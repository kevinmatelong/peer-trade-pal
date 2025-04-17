
import { useState } from "react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeVerified } from "@/components/ui/badge-verified";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MessageSquare, Clock, CheckCircle2, AlertCircle, XCircle, AlertTriangle } from "lucide-react";

interface Order {
  id: string;
  type: "buy" | "sell";
  status: "pending" | "processing" | "completed" | "cancelled" | "disputed";
  crypto: {
    name: string;
    symbol: string;
    amount: number;
  };
  fiat: {
    amount: number;
    currency: string;
  };
  counterparty: {
    name: string;
    isVerified: boolean;
  };
  paymentMethod: string;
  createdAt: string;
  timeRemaining?: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-1234-5678",
    type: "buy",
    status: "pending",
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.25,
    },
    fiat: {
      amount: 6875,
      currency: "USD",
    },
    counterparty: {
      name: "Alex Trader",
      isVerified: true,
    },
    paymentMethod: "Bank Transfer",
    createdAt: "2025-04-16T15:30:00Z",
    timeRemaining: "12:45:30",
  },
  {
    id: "ORD-2345-6789",
    type: "sell",
    status: "processing",
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.5,
    },
    fiat: {
      amount: 13750,
      currency: "USD",
    },
    counterparty: {
      name: "Emma Trades",
      isVerified: true,
    },
    paymentMethod: "PayPal",
    createdAt: "2025-04-15T10:15:00Z",
  },
  {
    id: "ORD-3456-7890",
    type: "buy",
    status: "completed",
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.1,
    },
    fiat: {
      amount: 2750,
      currency: "USD",
    },
    counterparty: {
      name: "Sarah Crypto",
      isVerified: false,
    },
    paymentMethod: "Bank Transfer",
    createdAt: "2025-04-12T08:20:00Z",
  },
  {
    id: "ORD-4567-8901",
    type: "sell",
    status: "completed",
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.35,
    },
    fiat: {
      amount: 9625,
      currency: "USD",
    },
    counterparty: {
      name: "Michael P2P",
      isVerified: true,
    },
    paymentMethod: "Cash App",
    createdAt: "2025-04-10T14:45:00Z",
  },
  {
    id: "ORD-5678-9012",
    type: "buy",
    status: "cancelled",
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.15,
    },
    fiat: {
      amount: 4125,
      currency: "USD",
    },
    counterparty: {
      name: "Olivia Trader",
      isVerified: false,
    },
    paymentMethod: "Venmo",
    createdAt: "2025-04-08T11:30:00Z",
  },
  {
    id: "ORD-6789-0123",
    type: "sell",
    status: "disputed",
    crypto: {
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.05,
    },
    fiat: {
      amount: 1375,
      currency: "USD",
    },
    counterparty: {
      name: "Chris Blocks",
      isVerified: true,
    },
    paymentMethod: "Bank Transfer",
    createdAt: "2025-04-05T16:20:00Z",
  },
];

export default function Orders() {
  const [activeTab, setActiveTab] = useState("all");

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "processing":
        return <ArrowUpRight className="h-4 w-4 text-blue-500" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "cancelled":
        return <XCircle className="h-4 w-4 text-muted-foreground" />;
      case "disputed":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "processing":
        return "Processing";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      case "disputed":
        return "Disputed";
      default:
        return status;
    }
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "processing":
        return "bg-blue-500/10 text-blue-500";
      case "completed":
        return "bg-success/10 text-success";
      case "cancelled":
        return "bg-muted text-muted-foreground";
      case "disputed":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredOrders = mockOrders.filter((order) => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return ["pending", "processing"].includes(order.status);
    if (activeTab === "completed") return order.status === "completed";
    if (activeTab === "cancelled") return ["cancelled", "disputed"].includes(order.status);
    return true;
  });

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container px-4 py-8 flex-1 sm:px-6 sm:py-12">
        <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
        <p className="mt-2 text-muted-foreground">
          Track and manage all your ongoing and past trades.
        </p>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled/Disputed</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab}>
            <div className="space-y-4">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <Card key={order.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="border-b p-6">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-muted-foreground">
                                Order ID:
                              </span>
                              <span className="font-mono text-sm">{order.id}</span>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <Badge variant="outline" className="text-xs font-normal">
                                {order.type === "buy" ? "Buying" : "Selling"}
                              </Badge>
                              <Badge variant="outline" className={getStatusColor(order.status)}>
                                <span className="flex items-center gap-1">
                                  {getStatusIcon(order.status)}
                                  {getStatusText(order.status)}
                                </span>
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">
                              Created: {formatDate(order.createdAt)}
                            </p>
                            {order.timeRemaining && (
                              <p className="mt-1 flex items-center justify-end gap-1 text-xs text-yellow-500">
                                <Clock className="h-3 w-3" />
                                Time left: {order.timeRemaining}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="grid gap-6 md:grid-cols-3">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Amount</p>
                            <div className="mt-1">
                              <p className="font-medium">
                                {order.crypto.amount} {order.crypto.symbol}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {formatCurrency(order.fiat.amount, order.fiat.currency)}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              {order.type === "buy" ? "Seller" : "Buyer"}
                            </p>
                            <div className="mt-1 flex items-center gap-1.5">
                              <span className="font-medium">{order.counterparty.name}</span>
                              {order.counterparty.isVerified && <BadgeVerified size="sm" />}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Via {order.paymentMethod}
                            </p>
                          </div>

                          <div className="flex items-end justify-end">
                            {(order.status === "pending" || order.status === "processing") && (
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  Chat
                                </Button>
                                <Button 
                                  size="sm" 
                                  className={order.type === "buy" ? "bg-teal hover:bg-teal-dark" : "bg-navy hover:bg-navy-light"}
                                >
                                  {order.type === "buy" 
                                    ? (order.status === "pending" ? "Pay Now" : "Release Payment") 
                                    : (order.status === "pending" ? "Upload Proof" : "Confirm Receipt")}
                                </Button>
                              </div>
                            )}
                            {order.status === "completed" && (
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            )}
                            {(order.status === "cancelled" || order.status === "disputed") && (
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="flex h-60 items-center justify-center rounded-lg border bg-muted/20">
                  <div className="text-center">
                    <p className="text-muted-foreground">No orders found.</p>
                    <div className="mt-4 flex justify-center gap-4">
                      <Button variant="outline" asChild>
                        <a href="/buy">Buy Crypto</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/sell">Sell Crypto</a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
