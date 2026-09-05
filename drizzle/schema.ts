import {
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const contentKinds = ["article", "artwork", "project", "collection", "journey", "work-record"] as const;
export type ContentKind = (typeof contentKinds)[number];

export const contentItems = mysqlTable("contentItems", {
  id: int("id").autoincrement().primaryKey(),
  kind: mysqlEnum("kind", contentKinds).notNull(),
  slug: varchar("slug", { length: 160 }).notNull().unique(),
  titleEn: varchar("titleEn", { length: 300 }).notNull(),
  titleZh: varchar("titleZh", { length: 300 }).notNull(),
  excerptEn: text("excerptEn"),
  excerptZh: text("excerptZh"),
  bodyEn: text("bodyEn"),
  bodyZh: text("bodyZh"),
  categoryEn: varchar("categoryEn", { length: 120 }),
  categoryZh: varchar("categoryZh", { length: 120 }),
  tags: text("tags"),
  imageUrl: varchar("imageUrl", { length: 1024 }),
  linkUrl: varchar("linkUrl", { length: 1024 }),
  year: varchar("year", { length: 20 }),
  mediumEn: varchar("mediumEn", { length: 240 }),
  mediumZh: varchar("mediumZh", { length: 240 }),
  featured: boolean("featured").default(false).notNull(),
  status: mysqlEnum("status", ["draft", "published"]).default("draft").notNull(),
  sortOrder: int("sortOrder").default(0).notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const siteSettings = mysqlTable("siteSettings", {
  id: int("id").autoincrement().primaryKey(),
  settingKey: varchar("settingKey", { length: 120 }).notNull().unique(),
  valueEn: text("valueEn").notNull(),
  valueZh: text("valueZh").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const enquiryTypes = [
  "counselling",
  "expressive-arts",
  "watercolour",
  "talks-workshops",
  "older-adult-companionship",
  "general",
] as const;

export const contactEnquiries = mysqlTable("contactEnquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 180 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 80 }),
  enquiryType: mysqlEnum("enquiryType", enquiryTypes).notNull(),
  message: text("message").notNull(),
  locale: mysqlEnum("locale", ["en", "zh"]).default("en").notNull(),
  consent: boolean("consent").notNull(),
  status: mysqlEnum("status", ["new", "read", "closed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type ContentItem = typeof contentItems.$inferSelect;
export type InsertContentItem = typeof contentItems.$inferInsert;
export type ContactEnquiry = typeof contactEnquiries.$inferSelect;
export type SiteSetting = typeof siteSettings.$inferSelect;
