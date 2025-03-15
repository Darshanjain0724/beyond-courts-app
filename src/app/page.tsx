import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, Users, MessageSquare, Phone } from "lucide-react"
import styles from "./styles.module.css"

const features = [
  {
    name: "Expert Mediators",
    description:
      "Connect with certified mediators who specialize in various types of disputes.",
    icon: Scale,
  },
  {
    name: "Community Support",
    description:
      "Join our community forum to share experiences and get advice from others.",
    icon: Users,
  },
  {
    name: "AI-Powered Chatbot",
    description:
      "Get instant guidance and information through our multilingual chatbot.",
    icon: MessageSquare,
  },
  {
    name: "USSD/IVR Access",
    description:
      "Access mediation services through USSD or IVR for areas with limited internet.",
    icon: Phone,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className={`absolute inset-0 ${styles['bg-grid-pattern']} opacity-5`} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            {/* Text Content */}
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-background/80 via-background/50 to-transparent blur-xl lg:hidden" />
                <div className="relative">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Resolve Disputes Through Mediation
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground">
                    Beyond Courts is your trusted platform for alternative dispute resolution.
                    We connect you with certified mediators and provide resources to help you
                    resolve conflicts efficiently and amicably.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="/chatbot" className="flex items-center">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg">
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${styles['image-blend']}`}>
                <Image
                  src="/images/consultation.jpg"
                  alt="Professional mediation consultation"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to resolve disputes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform provides comprehensive tools and resources for effective
              mediation and dispute resolution.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
