import { and, asc, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  contactEnquiries,
  contentItems,
  ContentKind,
  InsertContentItem,
  InsertUser,
  siteSettings,
  users,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export function resolveUserRole(openId: string, existingRole?: "user" | "admin"): "user" | "admin" {
  if (openId === ENV.ownerOpenId || existingRole === "admin") return "admin";
  return "user";
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");

  const db = await getDb();
  if (!db) return;

  const values: InsertUser = { openId: user.openId, lastSignedIn: new Date() };
  const updateSet: Record<string, unknown> = { lastSignedIn: new Date() };

  for (const field of ["name", "email", "loginMethod"] as const) {
    if (user[field] !== undefined) {
      values[field] = user[field] ?? null;
      updateSet[field] = user[field] ?? null;
    }
  }

  const existing = await db
    .select({ role: users.role })
    .from(users)
    .where(eq(users.openId, user.openId))
    .limit(1);
  values.role = user.role ?? resolveUserRole(user.openId, existing[0]?.role);
  updateSet.role = values.role;
  await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

export async function listPublishedContent(kind?: ContentKind) {
  const db = await getDb();
  if (!db) return [];

  if (kind) {
    return db
      .select()
      .from(contentItems)
      .where(and(eq(contentItems.status, "published"), eq(contentItems.kind, kind)))
      .orderBy(asc(contentItems.sortOrder), desc(contentItems.featured), desc(contentItems.publishedAt), desc(contentItems.createdAt));
  }

  return db
    .select()
    .from(contentItems)
    .where(eq(contentItems.status, "published"))
    .orderBy(asc(contentItems.sortOrder), desc(contentItems.featured), desc(contentItems.publishedAt), desc(contentItems.createdAt));
}

export async function getPublishedContentBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(contentItems)
    .where(and(eq(contentItems.status, "published"), eq(contentItems.slug, slug)))
    .limit(1);
  return result[0];
}

export async function listAllContent() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(contentItems).orderBy(desc(contentItems.updatedAt));
}

export async function listSiteSettings() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(siteSettings).orderBy(siteSettings.settingKey);
}

export async function saveSiteSetting(input: typeof siteSettings.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Core content storage is not available yet.");
  await db.insert(siteSettings).values(input).onDuplicateKeyUpdate({
    set: { valueEn: input.valueEn, valueZh: input.valueZh },
  });
}

export async function saveContentItem(input: InsertContentItem & { id?: number }) {
  const db = await getDb();
  if (!db) throw new Error("Content storage is not available yet.");

  const { id, ...values } = input;
  if (id) {
    await db.update(contentItems).set(values).where(eq(contentItems.id, id));
    return id;
  }

  const result = await db.insert(contentItems).values(values);
  return result[0].insertId;
}

export async function submitContactEnquiry(input: typeof contactEnquiries.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Enquiries are temporarily unavailable. Please use the email link instead.");
  const result = await db.insert(contactEnquiries).values(input);
  return result[0].insertId;
}

export async function listContactEnquiries() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(contactEnquiries).orderBy(desc(contactEnquiries.createdAt));
}
