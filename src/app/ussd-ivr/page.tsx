import { Phone, Smartphone } from "lucide-react"

export default function UssdIvrPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">USSD & IVR Support</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* USSD Section */}
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="mb-4 flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">USSD Access</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Access mediation services from any mobile phone by dialing:
            </p>
            <div className="rounded-md bg-muted p-4">
              <code className="text-lg font-semibold">*123*4#</code>
            </div>
            <h3 className="font-semibold">Available Services:</h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Check mediation status</li>
              <li>Request mediator contact</li>
              <li>Schedule consultation</li>
              <li>Get help in your language</li>
            </ul>
          </div>
        </div>

        {/* IVR Section */}
        <div className="rounded-lg border bg-background p-6 shadow-sm">
          <div className="mb-4 flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">IVR Support</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Call our toll-free number for voice-guided assistance:
            </p>
            <div className="rounded-md bg-muted p-4">
              <code className="text-lg font-semibold">1800-123-4567</code>
            </div>
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>24/7 automated support</li>
              <li>Multi-language support</li>
              <li>Connect with live mediators</li>
              <li>Voice-guided instructions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">How to Use</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">For USSD:</h3>
            <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
              <li>Dial *123*4# from your mobile phone</li>
              <li>Select your preferred language</li>
              <li>Choose the service you need</li>
              <li>Follow the on-screen instructions</li>
            </ol>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">For IVR:</h3>
            <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
              <li>Call 1800-123-4567</li>
              <li>Press 1 for English, 2 for Hindi, etc.</li>
              <li>Select your required service</li>
              <li>Follow the voice prompts</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Support Note */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          Need help? Contact our support team at{" "}
          <a href="tel:+911234567890" className="text-primary hover:underline">
            +91 123 456 7890
          </a>
          {" "}or email{" "}
          <a
            href="mailto:support@beyondcourts.com"
            className="text-primary hover:underline"
          >
            support@beyondcourts.com
          </a>
        </p>
      </div>
    </div>
  )
} 