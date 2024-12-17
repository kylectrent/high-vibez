export type APIProduct = {
    id: number;
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    },
    alt: string;
}