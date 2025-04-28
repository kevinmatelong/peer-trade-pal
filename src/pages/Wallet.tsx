
import { useState } from "react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { CryptoCard } from "@/components/trade/crypto-card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Wallet as WalletIcon,
  ArrowUpRight,
  ArrowDownLeft,
  ChevronDown,
  BarChart4,
  CreditCard,
  Clock,
  Copy,
  ChevronRight,
  Search,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "buy" | "sell";
  amount: number;
  symbol: string;
  fiatAmount?: number;
  fiatCurrency?: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
}

const mockCryptos = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
    balance: 1.25,
    price: 27500,
    value: 34375,
    currency: "USD",
    change24h: 1.23,
    verified: true,
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    logoUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
    balance: 12.5,
    price: 1600,
    value: 20000,
    currency: "USD",
    change24h: -0.85,
    verified: true,
  },
  {
    id: "usdt",
    name: "Tether",
    symbol: "USDT",
    logoUrl: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
    balance: 5000,
    price: 1,
    value: 5000,
    currency: "USD",
    change24h: 0.02,
    verified: true,
  },
  {
    id: "bnb",
    name: "Binance Coin",
    symbol: "BNB",
    logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025",
    balance: 25,
    price: 220,
    value: 5500,
    currency: "USD",
    change24h: 2.15,
    verified: true,
  },
];

const mockTransactions: Transaction[] = [
  {
    id: "tx1",
    type: "deposit",
    amount: 0.5,
    symbol: "BTC",
    timestamp: "2025-04-16T14:30:00Z",
    status: "completed",
  },
  {
    id: "tx2",
    type: "buy",
    amount: 5,
    symbol: "ETH",
    fiatAmount: 8000,
    fiatCurrency: "USD",
    timestamp: "2025-04-15T11:20:00Z",
    status: "completed",
  },
  {
    id: "tx3",
    type: "sell",
    amount: 0.25,
    symbol: "BTC",
    fiatAmount: 6875,
    fiatCurrency: "USD",
    timestamp: "2025-04-13T09:45:00Z",
    status: "completed",
  },
  {
    id: "tx4",
    type: "withdrawal",
    amount: 2,
    symbol: "ETH",
    timestamp: "2025-04-10T16:15:00Z",
    status: "completed",
  },
  {
    id: "tx5",
    type: "deposit",
    amount: 1000,
    symbol: "USDT",
    timestamp: "2025-04-08T10:30:00Z",
    status: "completed",
  },
  {
    id: "tx6",
    type: "withdrawal",
    amount: 0.1,
    symbol: "BTC",
    timestamp: "2025-04-17T08:45:00Z",
    status: "pending",
  },
];

export default function Wallet() {
  const [activeTab, setActiveTab] = useState("assets");
  const [searchTerm, setSearchTerm] = useState("");

  const totalBalance = mockCryptos.reduce((sum, crypto) => sum + crypto.value, 0);

  const formatCurrency = (value: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatCrypto = (value: number) => {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: value < 0.01 ? 8 : value < 1 ? 6 : 4,
      maximumFractionDigits: value < 0.01 ? 8 : value < 1 ? 6 : 4,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "deposit":
        return <ArrowDownLeft className="h-4 w-4 text-success" />;
      case "withdrawal":
        return <ArrowUpRight className="h-4 w-4 text-destructive" />;
      case "buy":
        return <ArrowDownLeft className="h-4 w-4 text-success" />;
      case "sell":
        return <ArrowUpRight className="h-4 w-4 text-destructive" />;
    }
  };

  const getTransactionText = (type: Transaction["type"]) => {
    switch (type) {
      case "deposit":
        return "Deposit";
      case "withdrawal":
        return "Withdrawal";
      case "buy":
        return "Buy";
      case "sell":
        return "Sell";
    }
  };

  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "failed":
        return "bg-destructive/10 text-destructive";
    }
  };

  const filteredCryptos = mockCryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container px-4 py-8 flex-1 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl font-bold tracking-tight">My Wallet</h1>
              <div className="flex gap-2">
                <Button className="gap-2 bg-teal hover:bg-teal-dark">
                  <ArrowDownLeft className="h-4 w-4" />
                  Deposit
                </Button>
                <Button variant="outline" className="gap-2">
                  <ArrowUpRight className="h-4 w-4" />
                  Withdraw
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-1.5">
                      More
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <BarChart4 className="h-4 w-4" />
                      View Analytics
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <CreditCard className="h-4 w-4" />
                      Payment Methods
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <StatCard
                title="Total Balance"
                value={formatCurrency(totalBalance)}
                icon={<WalletIcon className="h-4 w-4" />}
                trend={{ direction: "up", value: "5.2%" }}
              />
              <StatCard
                title="24h Trading Volume"
                value={formatCurrency(12500)}
                trend={{ direction: "up", value: "8.7%" }}
              />
              <StatCard
                title="Pending Orders"
                value="4"
                icon={<Clock className="h-4 w-4" />}
              />
            </div>

            <Card className="mt-8">
              <CardHeader className="flex flex-row items-center justify-between px-6">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  View All
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </CardHeader>
              <CardContent className="px-6">
                <div className="space-y-4">
                  {mockTransactions.slice(0, 5).map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                          {getTransactionIcon(tx.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{getTransactionText(tx.type)}</p>
                            <Badge variant="outline" className={getStatusColor(tx.status)}>
                              {tx.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(tx.timestamp)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          {tx.type === "deposit" || tx.type === "buy" ? "+" : "-"}
                          {formatCrypto(tx.amount)} {tx.symbol}
                        </p>
                        {tx.fiatAmount && (
                          <p className="text-xs text-muted-foreground">
                            {formatCurrency(tx.fiatAmount, tx.fiatCurrency)}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="px-6">
                {/* FIX: Correctly defining Tabs and using TabsContent within it */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="assets">My Assets</TabsTrigger>
                    <TabsTrigger value="deposit">Deposit</TabsTrigger>
                  </TabsList>
                
                  {/* Move TabsContent here, inside the Tabs component */}
                  <TabsContent value="assets" className="mt-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search assets"
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <ScrollArea className="h-[400px] pr-3">
                      <div className="space-y-4">
                        {filteredCryptos.map((crypto) => (
                          <div
                            key={crypto.id}
                            className="flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:bg-muted/20"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-muted">
                                <img
                                  src={crypto.logoUrl}
                                  alt={`${crypto.name} logo`}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">{crypto.name}</p>
                                <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{formatCrypto(crypto.balance)} {crypto.symbol}</p>
                              <p className="text-sm text-muted-foreground">
                                {formatCurrency(crypto.value)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="deposit" className="mt-4 space-y-0">
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground">Select coin to deposit</p>
                      <div className="relative mt-2">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="Search coins"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-lg border bg-card p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-muted">
                            <img
                              src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025"
                              alt="Bitcoin logo"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">Bitcoin</p>
                            <p className="text-sm text-muted-foreground">BTC</p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="text-sm font-medium">BTC Deposit Address</p>
                          <div className="mt-2 flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2">
                            <p className="font-mono text-xs text-muted-foreground">
                              bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                            </p>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="mb-2 text-sm text-muted-foreground">
                            Minimum deposit amount: 0.0001 BTC
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Expected arrival: 3 network confirmations
                          </p>
                        </div>

                        <div className="mt-6">
                          <p className="mb-2 text-sm text-muted-foreground">
                            Network: Bitcoin (BTC)
                          </p>
                          <Button className="w-full bg-teal hover:bg-teal-dark">
                            Generate QR Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
              <CardContent className="px-6">
                {/* Content moved inside Tabs component above */}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Popular Assets</h2>
          <p className="mt-2 text-muted-foreground">
            Trending cryptocurrencies that you can trade on our platform.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mockCryptos.map((crypto) => (
              <CryptoCard
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                logoUrl={crypto.logoUrl}
                price={crypto.price}
                currency={crypto.currency}
                change24h={crypto.change24h}
                verified={crypto.verified}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
