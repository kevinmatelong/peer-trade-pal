import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal to-teal-light">
              <span className="sr-only">Crypto Sokoni logo</span>
              <svg viewBox="0 0 30 30" className="h-5 w-5 text-white">
                <path
                  fill="currentColor"
                  d="M15 12c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0-3c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm9 0a3 3 0 110 6 3 3 0 010-6zm-18 0a3 3 0 110 6 3 3 0 010-6z"
                />
              </svg>
            </div>
            <span className="hidden font-semibold sm:inline-block">Crypto Sokoni</span>
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link to="/buy" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Buy
            </Link>
            <Link to="/sell" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Sell
            </Link>
            <Link to="/orders" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Orders
            </Link>
            <Link to="/wallet" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Wallet
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative text-muted-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Globe className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="default" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Register
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="container pb-3 md:hidden">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/buy"
              className="flex items-center rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy
            </Link>
            <Link
              to="/sell"
              className="flex items-center rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sell
            </Link>
            <Link
              to="/orders"
              className="flex items-center rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Orders
            </Link>
            <Link
              to="/wallet"
              className="flex items-center rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wallet
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="default" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
