import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    title: "Hoodies & Jumpers",
    slug: "hoodies-jumpers",
    description:
      "Soft, warm, and perfect for branding. Our premium cotton fleece hoodies offer ultimate comfort and durability. Available in various colors and sizes.",
    features: ["Premium cotton fleece", "Custom embroidery", "Screen printing options", "Bulk orders available"],
    image: "/hoodie-collection-display.jpg",
  },
  {
    title: "T-Shirts",
    slug: "tshirts",
    description:
      "Breathable cotton and blended fabrics perfect for everyday wear or promotional events. Customization options include embroidery and screen printing.",
    features: ["100% cotton or blends", "Multiple color options", "Custom designs", "Fast turnaround"],
    image: "/tshirt-variety-collection.jpg",
  },
  {
    title: "Sweatpants & Sweatshirts",
    slug: "sweatpants-sweatshirts",
    description:
      "Premium comfort wear for teams and individuals. Perfect for athletic wear, loungewear, or corporate casual uniforms.",
    features: ["Soft fleece interior", "Elastic waistbands", "Team branding", "Matching sets available"],
    image: "/sweatpants-sweatshirt-set.jpg",
  },
  {
    title: "Tracksuits",
    slug: "tracksuits",
    description:
      "Complete athletic sets combining style and functionality. Ideal for sports teams, schools, and corporate wellness programs.",
    features: ["Coordinated sets", "Moisture-wicking fabric", "Custom team colors", "Durable construction"],
    image: "/tracksuit-athletic-wear.jpg",
  },
  {
    title: "Jackets",
    slug: "jackets",
    description:
      "Stylish, durable outerwear for all occasions. From lightweight windbreakers to warm fleece jackets, we have options for every season.",
    features: ["Weather-resistant options", "Multiple styles", "Corporate branding", "Quality zippers & hardware"],
    image: "/jacket-outerwear-collection.jpg",
  },
  {
    title: "Polo Shirts",
    slug: "polo-shirts",
    description:
      "Professional yet relaxed options perfect for corporate environments, hospitality, and retail uniforms. Classic style meets comfort.",
    features: ["Breathable fabric", "Collar styles", "Logo embroidery", "Professional finish"],
    image: "/polo-shirt-professional.jpg",
  },
  {
    title: "Maasai Shukas & Kikoys",
    slug: "maasai-shukas-kikoys",
    description:
      "Authentic Kenyan heritage textiles, available fleece-lined or plain. Traditional patterns with modern comfort and versatility.",
    features: ["Traditional patterns", "Fleece-lined options", "Cultural authenticity", "Multiple uses"],
    image: "/maasai-shuka-kikoy-traditional.jpg",
  },
  {
    title: "Ponchos & Snoodies",
    slug: "ponchos-snoodies",
    description:
      "Unique warmth solutions combining style and functionality. Perfect for outdoor events, camping, or casual wear.",
    features: ["Cozy fleece material", "One-size-fits-most", "Easy to wear", "Custom colors"],
    image: "/poncho-snoodie-warm-wear.jpg",
  },
  {
    title: "Uniforms & Workwear",
    slug: "uniforms-workwear",
    description:
      "Complete uniform solutions including overalls, dust coats, reflectors, tactical uniforms, and aprons. Professional appearance guaranteed.",
    features: ["Industry-specific designs", "Durable materials", "Safety compliance", "Bulk pricing"],
    image: "/corporate-uniform-professional.jpg",
  },
  {
    title: "Accessories",
    slug: "accessories",
    description:
      "Complete your look with our range of accessories including caps, bags (gift bags and jute bags), custom boxers, and umbrellas.",
    features: ["Caps & headwear", "Eco-friendly jute bags", "Custom gift bags", "Branded umbrellas"],
    image: "/accessories-caps-bags.jpg",
  },
]

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive apparel solutions for businesses, organizations, and individuals
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent
                  className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="w-fit bg-transparent">
                      <Link href={`/products/${category.slug}`}>View Details</Link>
                    </Button>
                    <Button asChild className="w-fit">
                      <Link href="/quote">Request Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
