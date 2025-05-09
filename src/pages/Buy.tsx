
import { useState } from "react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { FilterSidebar } from "@/components/trade/filter-sidebar";
import { MarketListing } from "@/components/trade/market-listing";
import { Input } from "@/components/ui/input";
import { CryptoSelector } from "@/components/trade/crypto-selector";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const mockListings = [
  {
    id: "1",
    user: {
      id: "user1",
      name: "Alex Trader",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      completedTrades: 245,
      completionRate: 99.2,
      isVerified: true,
    },
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
    },
    price: 27500,
    currency: "USD",
    availableAmount: 2.5,
    minOrder: 100,
    maxOrder: 5000,
    paymentMethods: [
      { id: "bank", name: "Bank Transfer" },
      { id: "paypal", name: "PayPal" },
    ],
    type: "sell" as const,
  },
  {
    id: "2",
    user: {
      id: "user2",
      name: "Sarah Crypto",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      completedTrades: 187,
      completionRate: 98.7,
      isVerified: true,
    },
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
    },
    price: 27450,
    currency: "USD",
    availableAmount: 1.8,
    minOrder: 200,
    maxOrder: 8000,
    paymentMethods: [
      { id: "bank", name: "Bank Transfer" },
      { id: "venmo", name: "Venmo" },
      { id: "cashapp", name: "Cash App" },
    ],
    type: "sell" as const,
  },
  {
    id: "3",
    user: {
      id: "user3",
      name: "Michael P2P",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      completedTrades: 95,
      completionRate: 97.8,
      isVerified: false,
    },
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
    },
    price: 27600,
    currency: "USD",
    availableAmount: 0.75,
    minOrder: 100,
    maxOrder: 3000,
    paymentMethods: [
      { id: "bank", name: "Bank Transfer" },
    ],
    type: "sell" as const,
  },
  {
    id: "4",
    user: {
      id: "user4",
      name: "Emma Trades",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
      completedTrades: 321,
      completionRate: 99.8,
      isVerified: true,
    },
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
    },
    price: 27480,
    currency: "USD",
    availableAmount: 3.2,
    minOrder: 500,
    maxOrder: 10000,
    paymentMethods: [
      { id: "bank", name: "Bank Transfer" },
      { id: "card", name: "Credit/Debit Card" },
      { id: "paypal", name: "PayPal" },
    ],
    type: "sell" as const,
  },
];

export default function Buy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const [selectedCrypto, setSelectedCrypto] = useState("btc");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (value: string) => {
    setSortOption(value);
  };

  // Sort listings based on selected option
  const sortedListings = [...mockListings]
    .filter((listing) => listing.crypto.symbol.toLowerCase() === selectedCrypto.toUpperCase())
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "amount-asc":
          return a.availableAmount - b.availableAmount;
        case "amount-desc":
          return b.availableAmount - a.availableAmount;
        case "trades-desc":
          return b.user.completedTrades - a.user.completedTrades;
        default:
          return a.price - b.price;
      }
    });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container px-4 py-8 flex-1 sm:px-6 sm:py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Buy Crypto P2P</h1>
          <CryptoSelector selected={selectedCrypto} onSelect={setSelectedCrypto} />
        </div>
        <p className="mt-2 text-muted-foreground">
          Find sellers offering cryptocurrencies at competitive prices with your preferred payment methods.
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by seller name or payment method"
              className="pl-10"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="ml-4 flex items-center gap-4">
            <div className="hidden md:block">
              <Select value={sortOption} onValueChange={handleSort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="amount-asc">Amount: Low to High</SelectItem>
                  <SelectItem value="amount-desc">Amount: High to Low</SelectItem>
                  <SelectItem value="trades-desc">Most Trades</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <FilterSidebar />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-8">
          <aside className="hidden md:block md:col-span-3">
            <FilterSidebar />
          </aside>
          <main className="col-span-12 md:col-span-9">
            <div className="space-y-4">
              {sortedListings.map((listing) => (
                <MarketListing key={listing.id} {...listing} />
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
