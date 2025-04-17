
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <div className="bg-navy-light py-16">
      <div className="container px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 shadow-xl sm:px-16 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,169,165,0.15),transparent_70%)]"></div>
          <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-72 w-72 opacity-30 text-gold"
            >
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
              <path
                d="M28 65L48 45L58 55L72 35"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="28" cy="65" r="4" fill="currentColor" />
              <circle cx="48" cy="45" r="4" fill="currentColor" />
              <circle cx="58" cy="55" r="4" fill="currentColor" />
              <circle cx="72" cy="35" r="4" fill="currentColor" />
            </svg>
          </div>

          <div className="relative max-w-2xl text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start trading?
            </h2>
            <p className="mt-4 text-lg">
              Join thousands of users who trust TradePal for their peer-to-peer trading needs. Sign up today and experience the difference.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                  Create Account
                </Button>
              </Link>
              <Link to="/learn">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 hover:bg-white/10 text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
