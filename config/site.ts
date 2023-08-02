export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Name",
  description: "Description",
  footer: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Shipping & Return Policy", href: "#" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "FAQ", href: "#" },
  ],
}
