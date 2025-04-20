
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,169,165,0.15),transparent_70%)]"></div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal to-teal-light opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="container relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="block">Crypto Sokoni</span>
            <span className="block text-teal">Africa's P2P Crypto Marketplace</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl text-gray-300">
            Trade cryptocurrencies directly with other users. Secure, transparent, and built for the African market.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/buy">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                Start Trading
              </Button>
            </Link>
            <Link to="/learn">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold to-gold-light opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
}
