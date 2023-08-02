"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"
import BlockContent from "@sanity/block-content-to-react";
import { SanityProduct } from "../../config/inventory"
import { getSizeName } from "../../lib/utils"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

interface Props {
  product: SanityProduct 
}

export function ProductInfo({ product }: Props) {
  useEffect(() => {
    console.log('Product price before rendering:', product.price);
  }, []);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const {addItem, incrementItem, cartDetails} = useShoppingCart()
  const toast = useToast();
  const isInCart = !!cartDetails?.[product._id]


  
  function addToCart() { 
    const item = {
      ...product,
      product_data: {
        size: selectedSize,
      },
      name: product.productName // add name property
    }
    isInCart ? incrementItem( item._id) : addItem(item)
    toast.toast({
      title: `${item.productName} (${getSizeName(selectedSize)})`,
      description: "Added to cart",
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>Open Cart</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      )
    })
  }

 

  return (
    <div className="text-white mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.productName}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        
        {product.price &&
          <p className="text-3xl tracking-tight">${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        }

      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">
          <BlockContent blocks={product.body} projectId={"g91temd2"}
            dataset={"production"} className="justify block-text" />
        </div>
      </div>

      <div className="mt-4">
        <p>
          Size: <strong>{getSizeName(selectedSize)}</strong>
        </p>
        {product.sizes.map((size) => (
          <Button onClick={() => setSelectedSize(size)} key={size} variant={selectedSize === size ? 'default' : 'outline'} className="text-[#333] mr-2 mt-4 bg-[#ffc000]">
            {getSizeName(size)}
          </Button>
        ))}
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            onClick={addToCart}
            type="button"
            className="w-full bg-[#ffc000] text-[#333333] hover:bg-[#8d6a02] hover:text-white shadow-xl rounded-md py-6 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#333333]"
          >
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  )
}
