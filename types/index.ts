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

export interface ProductCount extends APIProduct {
    count: number;
}