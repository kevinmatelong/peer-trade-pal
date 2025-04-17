
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal to-teal-light">
                <span className="sr-only">TradePal logo</span>
                <svg viewBox="0 0 30 30" className="h-5 w-5 text-white">
                  <path
                    fill="currentColor"
                    d="M15 3C8.373 3 3 8.373 3 15c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S5 20.523 5 15 9.477 5 15 5zm-2 4v2h4v2h-4v6h-2V7h6v2h-4zm6 4v6h-4v-6h4z"
                  />
                </svg>
              </div>
              <span className="font-semibold">TradePal</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              A secure P2P trading platform for buying and selling digital assets directly between users.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/buy" className="text-muted-foreground hover:text-foreground">
                  Buy Crypto
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-muted-foreground hover:text-foreground">
                  Sell Crypto
                </Link>
              </li>
              <li>
                <Link to="/wallet" className="text-muted-foreground hover:text-foreground">
                  Wallet
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-muted-foreground hover:text-foreground">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-muted-foreground hover:text-foreground">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-muted-foreground hover:text-foreground">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-8">
          <div className="flex flex-col items-center justify-between text-center md:flex-row md:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} TradePal. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
