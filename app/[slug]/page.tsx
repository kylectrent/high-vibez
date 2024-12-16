"use client";
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { APIProduct } from '@/types';
import { Product } from '@/components/Product';

export default function Page() {
  const pathname = usePathname().replace(/^\//, '');
  const [product, setProduct] = React.useState<APIProduct>({
    id: 0,
    slug: "",
    name: "",
    image: {
      mobile: "",
      tablet: "",
      desktop: "",
    },
    alt: ""
  })

    React.useEffect(() => {
        fetch('api/data')
          .then((response) => response.json())
          .then((response) => {
            response.map((item: APIProduct) => {
              if(item.slug == pathname) {
                setProduct(item);
              }
            });
        });
    }, [pathname]);

  return (
    <div>
      <Product
        src={product.image.desktop}
        alt={product.alt}
        name={product.name}
      />
    </div>  
  )
}
