
import { Shield, Repeat, Users, Clock, CreditCard, BarChart4 } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-teal" />,
      title: "Secure Escrow",
      description: "All trades are protected by our escrow service, ensuring both buyers and sellers are safeguarded.",
    },
    {
      icon: <Repeat className="h-6 w-6 text-teal" />,
      title: "Instant Trades",
      description: "Connect with peers and complete trades quickly with our streamlined process.",
    },
    {
      icon: <Users className="h-6 w-6 text-teal" />,
      title: "Trusted Community",
      description: "Build reputation through successful trades and connect with verified users.",
    },
    {
      icon: <Clock className="h-6 w-6 text-teal" />,
      title: "24/7 Trading",
      description: "Our platform runs around the clock, allowing you to trade whenever it suits you.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-teal" />,
      title: "Multiple Payment Options",
      description: "Choose from a variety of payment methods that work best for you.",
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-teal" />,
      title: "Market Analytics",
      description: "Make informed decisions with real-time market data and trading insights.",
    },
  ];

  return (
    <div className="bg-background py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trade with Confidence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our platform provides everything you need for safe and efficient peer-to-peer trading.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
