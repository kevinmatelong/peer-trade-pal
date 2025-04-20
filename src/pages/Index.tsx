
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero-section";
import { FeaturesSection } from "@/components/site/features-section";
import { CTASection } from "@/components/site/cta-section";
import { CryptoCard } from "@/components/trade/crypto-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Globe, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useCryptoPrices } from "@/hooks/use-crypto-prices";

const Index = () => {
  const { data: cryptoPrices, isLoading } = useCryptoPrices();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <div className="container px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Live Cryptocurrency Prices
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Track real-time prices of top cryptocurrencies and trade directly with other users on our secure P2P platform.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {isLoading ? (
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="h-[200px] rounded-lg bg-muted animate-pulse" />
              ))
            ) : (
              cryptoPrices?.slice(0, 4).map((crypto) => (
                <CryptoCard
                  key={crypto.id}
                  id={crypto.id}
                  name={crypto.name}
                  symbol={crypto.symbol.toUpperCase()}
                  logoUrl={crypto.image}
                  price={crypto.current_price}
                  currency="USD"
                  change24h={crypto.price_change_percentage_24h}
                  verified={true}
                />
              ))
            )}
          </div>

          <div className="mt-12 text-center">
            <Link to="/buy">
              <Button variant="outline" className="gap-1.5">
                View All Assets
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <FeaturesSection />

        <div className="bg-background py-24">
          <div className="container px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Our P2P trading platform connects buyers and sellers directly, with built-in protections for both parties.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-teal">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">1. Find a Trading Partner</h3>
                  <p className="mt-2 text-muted-foreground">
                    Browse listings from verified sellers and buyers with your preferred payment methods.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-left">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Filter by price, payment method, and more</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>View trader reputation and completion rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Select from verified and trusted users</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-teal">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">2. Trade Securely</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our escrow service holds the cryptocurrency until payment is confirmed.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-left">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Seller's assets are locked in escrow</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Buyer makes payment directly to seller</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Built-in dispute resolution if needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-teal">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">3. Receive Your Assets</h3>
                  <p className="mt-2 text-muted-foreground">
                    Once payment is confirmed, the assets are released to your wallet.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-left">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Seller confirms payment receipt</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Crypto is released instantly to buyer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal" />
                      <span>Build reputation with each successful trade</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
