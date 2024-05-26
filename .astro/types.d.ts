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
    DestinasiFavorit: {};
    KotaDesa: {};
    Universitas: {};
    "desa-dan-kota": {};
    desa_kota: {
      "kabupaten-bangkalan.mdx": {
        id: "kabupaten-bangkalan.mdx";
        slug: "kabupaten-bangkalan";
        body: string;
        collection: "desa_kota";
        data: any;
      } & { render(): Render[".mdx"] };
      "kabupaten-blitar.mdx": {
        id: "kabupaten-blitar.mdx";
        slug: "kabupaten-blitar";
        body: string;
        collection: "desa_kota";
        data: any;
      } & { render(): Render[".mdx"] };
      "kabupaten-malang.mdx": {
        id: "kabupaten-malang.mdx";
        slug: "kabupaten-malang";
        body: string;
        collection: "desa_kota";
        data: any;
      } & { render(): Render[".mdx"] };
      "kota-malang.mdx": {
        id: "kota-malang.mdx";
        slug: "kota-malang";
        body: string;
        collection: "desa_kota";
        data: any;
      } & { render(): Render[".mdx"] };
    };
    "destinasi-favorit": {};
    destinasi_favorit: {
      "air-terjun-tumpak-sewu.mdx": {
        id: "air-terjun-tumpak-sewu.mdx";
        slug: "air-terjun-tumpak-sewu";
        body: string;
        collection: "destinasi_favorit";
        data: any;
      } & { render(): Render[".mdx"] };
      "bromo-tengger-semeru.mdx": {
        id: "bromo-tengger-semeru.mdx";
        slug: "bromo-tengger-semeru";
        body: string;
        collection: "destinasi_favorit";
        data: any;
      } & { render(): Render[".mdx"] };
      "kawah-ijen.mdx": {
        id: "kawah-ijen.mdx";
        slug: "kawah-ijen";
        body: string;
        collection: "destinasi_favorit";
        data: any;
      } & { render(): Render[".mdx"] };
      "taman-nasional-baluran.mdx": {
        id: "taman-nasional-baluran.mdx";
        slug: "taman-nasional-baluran";
        body: string;
        collection: "destinasi_favorit";
        data: any;
      } & { render(): Render[".mdx"] };
      "taman-nasional-meru-betiri.mdx": {
        id: "taman-nasional-meru-betiri.mdx";
        slug: "taman-nasional-meru-betiri";
        body: string;
        collection: "destinasi_favorit";
        data: any;
      } & { render(): Render[".mdx"] };
      "telaga-sarangan.mdx": {
        id: "telaga-sarangan.mdx";
        slug: "telaga-sarangan";
        body: string;
        collection: "destinasi_favorit";
        data: any;
      } & { render(): Render[".mdx"] };
    };
    kota_desa: {};
    universitas: {
      "its.mdx": {
        id: "its.mdx";
        slug: "its";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "pens.mdx": {
        id: "pens.mdx";
        slug: "pens";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "polinema.mdx": {
        id: "polinema.mdx";
        slug: "polinema";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "ub.mdx": {
        id: "ub.mdx";
        slug: "ub";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "uin-malang.mdx": {
        id: "uin-malang.mdx";
        slug: "uin-malang";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "um.mdx": {
        id: "um.mdx";
        slug: "um";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "umm.mdx": {
        id: "umm.mdx";
        slug: "umm";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "unair.mdx": {
        id: "unair.mdx";
        slug: "unair";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "unej.mdx": {
        id: "unej.mdx";
        slug: "unej";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "unesa.mdx": {
        id: "unesa.mdx";
        slug: "unesa";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "upn-veteran.mdx": {
        id: "upn-veteran.mdx";
        slug: "upn-veteran";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
      "utm.mdx": {
        id: "utm.mdx";
        slug: "utm";
        body: string;
        collection: "universitas";
        data: any;
      } & { render(): Render[".mdx"] };
    };
  };

  type DataEntryMap = {};

  type AnyEntryMap = ContentEntryMap & DataEntryMap;

  export type ContentConfig = never;
}