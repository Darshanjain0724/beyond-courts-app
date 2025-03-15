import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "Save time and money compared to court litigation",
  "Maintain relationships through collaborative resolution",
  "Confidential and private process",
  "Greater control over the outcome",
  "Faster resolution of disputes",
  "Less stress and emotional burden",
]

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your dispute and understand how mediation can help.",
  },
  {
    number: "02",
    title: "Mediator Selection",
    description: "Choose from our network of certified mediators specializing in your type of dispute.",
  },
  {
    number: "03",
    title: "Mediation Session",
    description: "Participate in structured sessions where both parties work together to find a solution.",
  },
  {
    number: "04",
    title: "Resolution",
    description: "Reach a mutually beneficial agreement and get it documented properly.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Transform How You Resolve Disputes
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Beyond Courts is revolutionizing dispute resolution by making mediation accessible,
              efficient, and effective for everyone. Our platform combines technology with
              human expertise to help you find peaceful resolutions.
            </p>
            <div className="mt-10">
              <Button size="lg">
                <Link href="/chatbot" className="flex items-center">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Mediation?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Mediation offers numerous advantages over traditional court litigation,
              making it an increasingly popular choice for dispute resolution.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-x-3">
                <CheckCircle2 className="h-7 w-5 flex-none text-primary" aria-hidden="true" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our streamlined process makes it easy to get started with mediation
              and find a resolution to your dispute.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <div className="text-lg font-semibold text-primary-foreground">{step.number}</div>
                  </div>
                  <div className="text-xl font-semibold text-foreground">{step.title}</div>
                  <div className="mt-2 text-base text-muted-foreground">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-y-10 lg:max-w-none lg:flex-row lg:items-center lg:gap-x-16">
            <div className="lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Start?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Take the first step towards resolving your dispute through mediation.
                Our platform makes it easy to get started and find the right mediator for your needs.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full">
                <Link href="/chatbot">Get Started Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Link href="/inspiration">Watch Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 