import { Metadata } from "next";

import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";
import { Providers } from "../components/providers";
import { SiteBlob } from "../components/site-blob";

export const metadata = {
  title: "RadGnarack | Store",
  description: "RadGnarack Bike Rack Store Front",
};

export default function StoreLayout({children}) {
  return (
    <Providers>
      <section>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </section>
    </Providers>
  );
}
