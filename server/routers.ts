import { z } from "zod";
import { contentKinds, enquiryTypes } from "../drizzle/schema";
import {
  listAllContent,
  listContactEnquiries,
  getPublishedContentBySlug,
  listPublishedContent,
  listSiteSettings,
  saveContentItem,
  saveSiteSetting,
  submitContactEnquiry,
} from "./db";
import { storagePut } from "./storage";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

export const contentInputSchema = z.object({
  id: z.number().int().positive().optional(),
  kind: z.enum(contentKinds),
  slug: z.string().min(2).max(160).regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens only."),
  titleEn: z.string().min(1).max(300),
  titleZh: z.string().min(1).max(300),
  excerptEn: z.string().max(5000).nullable().optional(),
  excerptZh: z.string().max(5000).nullable().optional(),
  bodyEn: z.string().max(30000).nullable().optional(),
  bodyZh: z.string().max(30000).nullable().optional(),
  categoryEn: z.string().max(120).nullable().optional(),
  categoryZh: z.string().max(120).nullable().optional(),
  tags: z.string().max(500).nullable().optional(),
  imageUrl: z.union([z.string().url(), z.string().regex(/^\/manus-storage\//)]).nullable().optional(),
  year: z.string().max(20).nullable().optional(),
  mediumEn: z.string().max(240).nullable().optional(),
  mediumZh: z.string().max(240).nullable().optional(),
  featured: z.boolean().default(false),
  status: z.enum(["draft", "published"]),
  sortOrder: z.number().int().min(0).max(9999).default(0),
});

export const contactInputSchema = z.object({
  name: z.string().trim().min(1).max(180),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(80).optional(),
  enquiryType: z.enum(enquiryTypes),
  message: z.string().trim().min(10).max(5000),
  locale: z.enum(["en", "zh"]),
  consent: z.literal(true),
});

const imageUploadSchema = z.object({
  fileName: z.string().min(1).max(180),
  contentType: z.enum(["image/jpeg", "image/png", "image/webp"]),
  base64: z.string().min(20).max(7_000_000),
});

export const siteSettingInputSchema = z.object({
  settingKey: z.enum([
    "about-lead",
    "about-story-1",
    "about-story-2",
    "about-story-3",
    "about-story-4",
    "service-watercolour",
    "service-expressive",
    "service-talks",
    "service-counselling",
    "service-companionship",
  ]),
  valueEn: z.string().trim().min(1).max(30000),
  valueZh: z.string().trim().min(1).max(30000),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  content: router({
    listPublished: publicProcedure
      .input(z.object({ kind: z.enum(contentKinds).optional() }))
      .query(({ input }) => listPublishedContent(input.kind)),
    getPublishedBySlug: publicProcedure
      .input(z.object({ slug: z.string().min(2).max(160) }))
      .query(({ input }) => getPublishedContentBySlug(input.slug)),
    listAll: adminProcedure.query(() => listAllContent()),
    save: adminProcedure.input(contentInputSchema).mutation(({ input }) => {
      const publishedAt = input.status === "published" ? new Date() : null;
      return saveContentItem({ ...input, publishedAt });
    }),
  }),
  settings: router({
    list: publicProcedure.query(() => listSiteSettings()),
    save: adminProcedure.input(siteSettingInputSchema).mutation(({ input }) => saveSiteSetting(input)),
  }),
  enquiries: router({
    submit: publicProcedure.input(contactInputSchema).mutation(({ input }) => submitContactEnquiry(input)),
    listAll: adminProcedure.query(() => listContactEnquiries()),
  }),
  media: router({
    uploadImage: adminProcedure.input(imageUploadSchema).mutation(async ({ input }) => {
      const safeName = input.fileName.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
      const imageBytes = Buffer.from(input.base64, "base64");
      const upload = await storagePut(`denise-media/${Date.now()}-${safeName}`, imageBytes, input.contentType);
      return upload;
    }),
  }),
});

export type AppRouter = typeof appRouter;
