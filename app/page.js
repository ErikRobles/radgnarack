// "use client"
import Head from "next/head";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";
import { cn } from "../lib/utils";
import { ProductFilters } from "./components/product-filters";
import { ProductGrid } from "./components/product-grid";
import { ProductSort } from "./components/product-sort";
import Search from "./components/Search";
import Script from 'next/script'


export default async function Home({ searchParams }) {
  const { price, category, color, size, search } = searchParams;
  const priceOrder = price ? `| order(price ${price})` : "";
  const dateOrder = searchParams.date
    ? `| order(_createdAt ${searchParams.date})`
    : "";
  const order = `${priceOrder}${dateOrder}`;

  const productFilter = `_type == "product"`;
  const colorFilter = color ? `&& "${color}" in colors` : "";
  const categoryFilter = category
    ? `&& "${category}" in categories[]->title`
    : "";
  const sizeFilter = size ? `&& "${size}" in sizes` : "";
  const searchFilter = search ? `&& productName match "${search}"` : "";
  const filter = `*[${productFilter} ${colorFilter} ${categoryFilter} ${sizeFilter} ${searchFilter}]`;

  const products = await client.fetch(
    groq`${filter} ${order} {
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
          price
      }
  `
  );


  return (
    <div>
      <Head>
        <title>Radgnarack Electric Bike Racks</title>
        <meta name="description" content="Radgnarack Electric Bike Racks" />
        <link rel=" shortcut icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading=""
        message="Experience the convenience and simplicity of the Radgnarack Electric Bike Rack"
      />
      <Products />
      {/* Store code */}
      <div className="bg-[#222222] min-h-screen text-white">
        <div className="px-4 pt-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-normal">
            Radgnarack Shop
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base">
            High Quality Racks for Electric Bikes
          </p>
        </div>
        <div>
          <main id="store" className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                {products.length} result{products.length > 1 ? "s" : ""}
              </h1>
              {/* Store Search */}
              <Search />
              {/* Store Search End */}
              <ProductSort />
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div
                className={cn(
                  "grid grid-cols-1 gap-x-8 gap-y-10",
                  products.length > 0
                    ? "lg:grid-cols-4"
                    : "lg:grid-cols-[1fr_3fr]"
                )}
              >
                <div className="hidden lg:block">
                  <ProductFilters />
                </div>
                <ProductGrid products={products} />
              </div>
            </section>
          </main>
        </div>
      </div>
      {/* End of Store Code */}
      {/* <Script>
        alert("Hello");
      </Script> */}
    </div>
  );
}
