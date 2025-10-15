import type { Metadata } from "next"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductCategories } from "@/components/products/product-categories"
import { CustomizationOptions } from "@/components/products/customization-options"
import { ProductsCTA } from "@/components/products/products-cta"

export const metadata: Metadata = {
  title: "Our Products | Tewaw Enterprises Limited",
  description:
    "Explore our range of premium cotton and fleece apparel including hoodies, t-shirts, sweatpants, jackets, polo shirts, Maasai shukas, and more. Custom branding available.",
}

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <ProductCategories />
      <CustomizationOptions />
      <ProductsCTA />
    </main>
  )
}
