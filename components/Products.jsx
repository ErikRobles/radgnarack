import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  return (
    <section
      id="racks"
      className="flex flex-col justify-center custom-container-2 md:gap-24 gap-8 pb-24 pt-12 section"
    >
      <div id="product-1">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
          <div className="image-wrapper">
            <Image
              src="/images/img_1499.jpeg"
              width={500}
              height={500}
              alt="Radgnarack Electric Bike Rack"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="text-wrapper">
            <h2 className="text-2xl mb-3">RadGnaRack</h2>
            <p className="text-xl">
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
            <button className="uppercase rounded-md hover:border border-[#000000] bg-[#ffc000] hover:bg-[#8d6a02] hover:text-white px-3 py-2 mt-3" onClick={() => router.push("/contact")}>
              Order Here!
            </button>
          </div>
        </div>
      </div>
      <div id="product-2">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
          <div className="text-wrapper">
            <h2 className="text-2xl mb-3">Custom Order</h2>
            <p className="text-xl">
              We love to work with customers on creative products. Feel free to
              reach out to us if you&apos;d like to partner with us on your next
              product. We&apos;ll have a member of our engineering team get back
              to you as quickly as possible.
            </p>
            <button className="uppercase rounded-md hover:border border-[#000000] bg-[#ffc000] hover:bg-[#8d6a02] hover:text-white px-3 py-2 mt-3" onClick={() => router.push("/contact")}>
              Order Here!
            </button>
          </div>
          <div className="image-wrapper order-first md:order-last">
            <Image
              src="/images/4.jpeg"
              width={500}
              height={500}
              alt="Radgnarack Electric Bike Rack"
              className="rounded-lg shadow-xl hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
