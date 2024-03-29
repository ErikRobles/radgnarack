import React from "react";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

// import { SanityProduct } from "../../config/inventory";
// import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";
import { ProductFilters } from "./product-filters";
import { ProductGrid } from "./product-grid";
import { ProductSort } from "./product-sort";


const Store = async (searchParams) => {
    const {date = "desc", price} = searchParams;
    const priceOrder = price 
      ? `| order(price ${price})` 
      : "";
    const dateOrder = date 
      ? `| order(_createdAt ${date})` 
      : "";
    const order = `${priceOrder}${dateOrder}`;

    const products = await client.fetch(
        groq`*[ _type == "product"] ${order} {
            _id,
            _createdAt,
            _updatedAt,
            productName,
            "productSlug": productSlug.current,
            body,
            excerpt,
            alt,
            sku,
            images,
            currency,
            price,
        }
    `);
    return (
    <div className="bg-[#222222] min-h-screen text-white">
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Radgnarack Shop</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">High Quality Racks for Electric Bikes</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length > 1 ? "s" : ""}
            </h1>
            {/* Product Sort */}
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10", products.length > 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-[1fr_3fr]')}>
              <div className="hidden lg:block">{/* Product filters */}
              <ProductFilters />
              </div>
              {/* Product grid */}
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Store;
