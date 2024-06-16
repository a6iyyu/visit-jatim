declare module "astro:content" {
  interface Render {
    ".mdx": Promise<{
      Content: import("astro").MarkdownInstance<{}>["Content"];
      headings: import("astro").MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module "astro:content" {
  interface Render {
    ".md": Promise<{
      Content: import("astro").MarkdownInstance<{}>["Content"];
      headings: import("astro").MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module "astro:content" {
  type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

  export type CollectionKey = keyof AnyEntryMap;
  export type CollectionEntry<C extends CollectionKey> = Flatten<
    AnyEntryMap[C]
  >;

  export type ContentCollectionKey = keyof ContentEntryMap;
  export type DataCollectionKey = keyof DataEntryMap;

  type AllValuesOf<T> = T extends any ? T[keyof T] : never;
  type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
    ContentEntryMap[C]
  >["slug"];

  export function getEntryBySlug<
    C extends keyof ContentEntryMap,
    E extends ValidContentEntrySlug<C> | (string & {}),
  >(
    collection: C,
    // Note that this has to accept a regular string too, for SSR
    entrySlug: E,
  ): E extends ValidContentEntrySlug<C>
    ? Promise<CollectionEntry<C>>
    : Promise<CollectionEntry<C> | undefined>;

  export function getDataEntryById<
    C extends keyof DataEntryMap,
    E extends keyof DataEntryMap[C],
  >(collection: C, entryId: E): Promise<CollectionEntry<C>>;

  export function getCollection<
    C extends keyof AnyEntryMap,
    E extends CollectionEntry<C>,
  >(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => entry is E,
  ): Promise<E[]>;
  export function getCollection<C extends keyof AnyEntryMap>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => unknown,
  ): Promise<CollectionEntry<C>[]>;

  export function getEntry<
    C extends keyof ContentEntryMap,
    E extends ValidContentEntrySlug<C> | (string & {}),
  >(entry: {
    collection: C;
    slug: E;
  }): E extends ValidContentEntrySlug<C>
    ? Promise<CollectionEntry<C>>
    : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<
    C extends keyof DataEntryMap,
    E extends keyof DataEntryMap[C] | (string & {}),
  >(entry: {
    collection: C;
    id: E;
  }): E extends keyof DataEntryMap[C]
    ? Promise<DataEntryMap[C][E]>
    : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<
    C extends keyof ContentEntryMap,
    E extends ValidContentEntrySlug<C> | (string & {}),
  >(
    collection: C,
    slug: E,
  ): E extends ValidContentEntrySlug<C>
    ? Promise<CollectionEntry<C>>
    : Promise<CollectionEntry<C> | undefined>;
  export function getEntry<
    C extends keyof DataEntryMap,
    E extends keyof DataEntryMap[C] | (string & {}),
  >(
    collection: C,
    id: E,
  ): E extends keyof DataEntryMap[C]
    ? Promise<DataEntryMap[C][E]>
    : Promise<CollectionEntry<C> | undefined>;

  /** Resolve an array of entry references from the same collection */
  export function getEntries<C extends keyof ContentEntryMap>(
    entries: {
      collection: C;
      slug: ValidContentEntrySlug<C>;
    }[],
  ): Promise<CollectionEntry<C>[]>;
  export function getEntries<C extends keyof DataEntryMap>(
    entries: {
      collection: C;
      id: keyof DataEntryMap[C];
    }[],
  ): Promise<CollectionEntry<C>[]>;

  export function reference<C extends keyof AnyEntryMap>(
    collection: C,
  ): import("astro/zod").ZodEffects<
    import("astro/zod").ZodString,
    C extends keyof ContentEntryMap
      ? {
          collection: C;
          slug: ValidContentEntrySlug<C>;
        }
      : {
          collection: C;
          id: keyof DataEntryMap[C];
        }
  >;
  // Allow generic `string` to avoid excessive type errors in the config
  // if `dev` is not running to update as you edit.
  // Invalid collection names will be caught at build time.
  export function reference<C extends string>(
    collection: C,
  ): import("astro/zod").ZodEffects<import("astro/zod").ZodString, never>;

  type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
  type InferEntrySchema<C extends keyof AnyEntryMap> =
    import("astro/zod").infer<
      ReturnTypeOrOriginal<Required<ContentConfig["collections"][C]>["schema"]>
    >;

  type ContentEntryMap = {
    "destinasi-favorit": {
      "air-terjun-coban-rondo.mdx": {
        id: "air-terjun-coban-rondo.mdx";
        slug: "air-terjun-coban-rondo";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "air-terjun-tumpak-sewu.mdx": {
        id: "air-terjun-tumpak-sewu.mdx";
        slug: "air-terjun-tumpak-sewu";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "bromo-tengger-semeru.mdx": {
        id: "bromo-tengger-semeru.mdx";
        slug: "bromo-tengger-semeru";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "candi-singosari.mdx": {
        id: "candi-singosari.mdx";
        slug: "candi-singosari";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "kawah-ijen.mdx": {
        id: "kawah-ijen.mdx";
        slug: "kawah-ijen";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "museum-kereta-api-bondowoso.mdx": {
        id: "museum-kereta-api-bondowoso.mdx";
        slug: "museum-kereta-api-bondowoso";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "taman-nasional-baluran.mdx": {
        id: "taman-nasional-baluran.mdx";
        slug: "taman-nasional-baluran";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "taman-nasional-meru-betiri.mdx": {
        id: "taman-nasional-meru-betiri.mdx";
        slug: "taman-nasional-meru-betiri";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
      "telaga-sarangan.mdx": {
        id: "telaga-sarangan.mdx";
        slug: "telaga-sarangan";
        body: string;
        collection: "destinasi-favorit";
        data: InferEntrySchema<"destinasi-favorit">;
      } & { render(): Render[".mdx"] };
    };
    "kota-dan-desa": {
      "kabupaten-bangkalan.mdx": {
        id: "kabupaten-bangkalan.mdx";
        slug: "kabupaten-bangkalan";
        body: string;
        collection: "kota-dan-desa";
        data: InferEntrySchema<"kota-dan-desa">;
      } & { render(): Render[".mdx"] };
      "kabupaten-blitar.mdx": {
        id: "kabupaten-blitar.mdx";
        slug: "kabupaten-blitar";
        body: string;
        collection: "kota-dan-desa";
        data: InferEntrySchema<"kota-dan-desa">;
      } & { render(): Render[".mdx"] };
      "kabupaten-malang.mdx": {
        id: "kabupaten-malang.mdx";
        slug: "kabupaten-malang";
        body: string;
        collection: "kota-dan-desa";
        data: InferEntrySchema<"kota-dan-desa">;
      } & { render(): Render[".mdx"] };
      "kota-malang.mdx": {
        id: "kota-malang.mdx";
        slug: "kota-malang";
        body: string;
        collection: "kota-dan-desa";
        data: InferEntrySchema<"kota-dan-desa">;
      } & { render(): Render[".mdx"] };
    };
    "kuliner-tradisional": {
      "gado-gado.mdx": {
        id: "gado-gado.mdx";
        slug: "gado-gado";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "gethuk-pisang.mdx": {
        id: "gethuk-pisang.mdx";
        slug: "gethuk-pisang";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "lontong-balap.mdx": {
        id: "lontong-balap.mdx";
        slug: "lontong-balap";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "nasi-krawu.mdx": {
        id: "nasi-krawu.mdx";
        slug: "nasi-krawu";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "nasi-tempong.mdx": {
        id: "nasi-tempong.mdx";
        slug: "nasi-tempong";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "pecel.mdx": {
        id: "pecel.mdx";
        slug: "pecel";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "rawon.mdx": {
        id: "rawon.mdx";
        slug: "rawon";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "rujak-cingur.mdx": {
        id: "rujak-cingur.mdx";
        slug: "rujak-cingur";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "rujak-soto.mdx": {
        id: "rujak-soto.mdx";
        slug: "rujak-soto";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "sate-madura.mdx": {
        id: "sate-madura.mdx";
        slug: "sate-madura";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "soto-lamongan.mdx": {
        id: "soto-lamongan.mdx";
        slug: "soto-lamongan";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
      "tahu-tek.mdx": {
        id: "tahu-tek.mdx";
        slug: "tahu-tek";
        body: string;
        collection: "kuliner-tradisional";
        data: InferEntrySchema<"kuliner-tradisional">;
      } & { render(): Render[".mdx"] };
    };
    universitas: {
      "its.mdx": {
        id: "its.mdx";
        slug: "its";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "pens.mdx": {
        id: "pens.mdx";
        slug: "pens";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "polinema.mdx": {
        id: "polinema.mdx";
        slug: "polinema";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "ub.mdx": {
        id: "ub.mdx";
        slug: "ub";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "uin-malang.mdx": {
        id: "uin-malang.mdx";
        slug: "uin-malang";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "um.mdx": {
        id: "um.mdx";
        slug: "um";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "umm.mdx": {
        id: "umm.mdx";
        slug: "umm";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "unair.mdx": {
        id: "unair.mdx";
        slug: "unair";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "unej.mdx": {
        id: "unej.mdx";
        slug: "unej";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "unesa.mdx": {
        id: "unesa.mdx";
        slug: "unesa";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "upn-veteran.mdx": {
        id: "upn-veteran.mdx";
        slug: "upn-veteran";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
      "utm.mdx": {
        id: "utm.mdx";
        slug: "utm";
        body: string;
        collection: "universitas";
        data: InferEntrySchema<"universitas">;
      } & { render(): Render[".mdx"] };
    };
    "upacara-adat": {
      "kebo-keboan.mdx": {
        id: "kebo-keboan.mdx";
        slug: "kebo-keboan";
        body: string;
        collection: "upacara-adat";
        data: InferEntrySchema<"upacara-adat">;
      } & { render(): Render[".mdx"] };
      "keduk-beji.mdx": {
        id: "keduk-beji.mdx";
        slug: "keduk-beji";
        body: string;
        collection: "upacara-adat";
        data: InferEntrySchema<"upacara-adat">;
      } & { render(): Render[".mdx"] };
      "labuh-sesaji.mdx": {
        id: "labuh-sesaji.mdx";
        slug: "labuh-sesaji";
        body: string;
        collection: "upacara-adat";
        data: InferEntrySchema<"upacara-adat">;
      } & { render(): Render[".mdx"] };
      "larung-sembonyo.mdx": {
        id: "larung-sembonyo.mdx";
        slug: "larung-sembonyo";
        body: string;
        collection: "upacara-adat";
        data: InferEntrySchema<"upacara-adat">;
      } & { render(): Render[".mdx"] };
      "reog.mdx": {
        id: "reog.mdx";
        slug: "reog";
        body: string;
        collection: "upacara-adat";
        data: InferEntrySchema<"upacara-adat">;
      } & { render(): Render[".mdx"] };
      "yadnya-kasada.mdx": {
        id: "yadnya-kasada.mdx";
        slug: "yadnya-kasada";
        body: string;
        collection: "upacara-adat";
        data: InferEntrySchema<"upacara-adat">;
      } & { render(): Render[".mdx"] };
    };
  };

  type DataEntryMap = {};

  type AnyEntryMap = ContentEntryMap & DataEntryMap;

  export type ContentConfig = typeof import("./../src/content/config.js");
}