"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Products = () => {
  const router = useRouter();
  return (
    <>
    <section className="flex flex-col justify-center custom-container-2 gap-12 md:gap-20 pb-24 pt-6">
      <div id="racks" className="section"></div>
      <h1 className="text-3xl text-center uppercase">Racks</h1>
      <div id="product-1">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
          {/* <div className="image-wrapper"> */}
          <div className="relative max-h-[400px]">
            <Image
              src="/images/rack-by-radgnarack.png"
              width={600}
              height={600}
              alt="Radgnarack Electric Bike Rack"
              className="rounded-lg pt-12 transition-all hover:scale-110 duration-300"
            />
            <Image
              src="/images/patentpending.png"
              width={125}
              height={125}
              alt="patent pending label"
              className="absolute right-3 -bottom-5 md:right-5 md:bottom-0 rotate-[5deg]"
            />
          </div>
          {/* </div> */}
          <div className="text-wrapper">
            <h2 className="text-2xl mb-3 font-bold">RadGnaRack</h2>
            <p className="text-lg text-justify mb-6">
              The RadGnaRack (Rad-Naar-Rack) is a modular hitch mounted
              equipment transportation device. The first module is designed for
              moving heavy bikes such as eBikes, but can just as easily used
              with mountain or road bikes thanks to the patented hinge based
              mounting system. Future modules will allow for transportation of
              other large outdoor adventure equipment or storage resources. The
              RadGnaRack was designed, fabricated, and assembled in the USA. The
              design and materials used for construction aim to maintain the
              highest level of quality and durability possible to ensure that
              people can rest assured that their equipment is safe and secured
            </p>
            {/* <button onClick={handleOrderButtonClick} className="uppercase rounded-md hover:border border-[#000000] bg-[#ffc000] hover:bg-[#8d6a02] hover:text-white px-3 py-2 mt-6">
              Order Here!
            </button> */}
            <Link
              href="https://collectcheckout.com/r/cw75t"
              className="uppercase rounded-md hover:border border-[#000000] bg-[#ffc000] hover:bg-[#8d6a02] hover:text-white px-3 py-2 mt-6"
              target="_blank" rel="noopener noreferrer"
            >
              Order Here!
            </Link>
          </div>
        </div>
      </div>
      <div id="product-2">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
          <div className="text-wrapper">
            <h2 className="text-2xl mb-3 font-bold">Custom Order</h2>
            <p className="text-lg text-justify">
              We love to work with customers on creative products. Feel free to
              reach out to us if you&apos;d like to partner with us on your next
              product. We&apos;ll have a member of our engineering team get back
              to you as quickly as possible.
            </p>
            <button
              className="uppercase rounded-md hover:border border-[#000000] bg-[#ffc000] hover:bg-[#8d6a02] hover:text-white px-3 py-2 mt-6"
              onClick={() => router.push("/sales")}
            >
              Order Here!
            </button>
          </div>

          {/* <div className="image-wrapper order-first md:order-last"> */}
          {/* <div className="order-first md:order-last"> */}
          <div className="md:order-last order-first max-w-[400px] max-h-[400px] min-w-[280px] min-h-[280px] overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/images/4.jpeg"
              width={400}
              height={400}
              alt="Radgnarack Electric Bike Rack"
              className="rounded-lg shadow-xl bg-cover bg-center object-cover object-center"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default Products;
