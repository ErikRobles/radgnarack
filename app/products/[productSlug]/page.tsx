import { client } from "../../../sanity/lib/client"
import { groq } from "next-sanity"
import { SanityProduct } from "../../../config/inventory"
import { ProductGallery } from "../../components/product-gallery"
import { ProductInfo } from "../../components/product-info"

interface Props {
  params: {
    productSlug: string
  }
}

export default async function Page({params}: Props) {
  const product = await client.fetch<SanityProduct>(groq`*[_type == "product" && productSlug.current == "${params.productSlug}"][0] {
    _id,
    _createdAt,
    "id": _id,
    productName,
    sku,
    images,
    price,
    currency,
    body[]{
      ...,
      // Define the type for body here
      _type == 'block' => {
        // You can add other properties as needed
        "style": style,
        "children": children
      }
    },
    sizes,
    categories,
    colors,
    "productSlug": productSlug.current,
  }`
);

  return (
    <div className="bg-[#222222] w-full">
    <div className="bg-black h-[88px]"></div>
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          <ProductGallery product={product} />
          {/* Product info */}
          <ProductInfo product={product} />
        </div>
      </div>
    </main>
    </div>
  )
}
