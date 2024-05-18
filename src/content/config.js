import { z, defineCollection } from "astro:content";

export const collections = {
  destinasi: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      description: z.string().max(250, { message: "Title must be 250 characters or less!" }),
      image: z.string().optional(),
      category: z.enum(["Kabupaten", "Kota"]),
    }),
  }),
  wisata: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      location: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      description: z.string().max(250, { message: "Title must be 250 characters or less!" }),
      image: z.string().optional(),
      category: z.enum(["Pegunungan", "Perairan", "Taman Nasional"]),
    }),
  }),
};