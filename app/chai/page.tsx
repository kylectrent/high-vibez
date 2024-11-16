import { Product } from '@/components/Product';

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Chai() {
  return (
    <div>
      <Product
        src="/assets/product-chai/chai.jpg"
        alt="Chai"
        name="Invigorate Mushroom Chai"
      />
    </div>
  );
}
