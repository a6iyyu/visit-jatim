import { z, defineCollection } from "astro:content";

export const collections = {
  "destinasi-favorit": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      location: z.string().max(50, { message: "Location must be 50 characters or less!" }),
      description: z.string().max(250, { message: "Description must be 250 characters or less!" }),
      image: z.string().optional(),
      category: z.enum(["Pegunungan", "Perairan", "Taman Nasional", "Cagar Budaya"]),
    }),
  }),
  "kota-dan-desa": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      description: z.string().max(250, { message: "Description must be 250 characters or less!" }),
      image: z.string().optional(),
      category: z.enum(["Kabupaten", "Kota"]),
    }),
  }),
  "kuliner-tradisional": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      location: z.string().max(50, { message: "Location must be 50 characters or less!" }),
      description: z.string().max(250, { message: "Description must be 250 characters or less!" }),
      image: z.string().optional(),
    }),
  }),
  "universitas": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      acronym: z.string().max(15, { message: "Acronym must be 15 characters or less!" }),
      location: z.string().max(50, { message: "Location must be 50 characters or less!" }),
      description: z.string().max(250, { message: "Description must be 250 characters or less!" }),
      image: z.string().optional(),
      category: z.enum(["Negeri", "Swasta"]),
    }),
  }),
  "upacara-adat": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(50, { message: "Title must be 50 characters or less!" }),
      location: z.string().max(50, { message: "Location must be 50 characters or less!" }),
      description: z.string().max(250, { message: "Description must be 250 characters or less!" }),
      image: z.string().optional(),
    }),
  }),
};