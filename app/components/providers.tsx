"use client"
import { CartProvider } from "use-shopping-cart"
import { Toaster } from "./ui/toaster"
import { TailwindIndicator } from "./tailwind-indicator"

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return <CartProvider
    currency="USD"
    shouldPersist={true}
    cartMode="checkout-session"
    // @ts-ignore
    nmi={process.env.NEXT_PUBLIC_NMI_API_KEY!}
  > 
    <Toaster />
    {children}
    <TailwindIndicator />
    </CartProvider>
}
