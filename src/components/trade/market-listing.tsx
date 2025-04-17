
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeVerified } from "@/components/ui/badge-verified";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface MarketListingProps {
  id: string;
  user: {
    id: string;
    name: string;
    avatarUrl?: string;
    completedTrades: number;
    completionRate: number;
    isVerified?: boolean;
  };
  crypto: {
    name: string;
    symbol: string;
  };
  price: number;
  currency: string;
  availableAmount: number;
  minOrder: number;
  maxOrder: number;
  paymentMethods: Array<{
    id: string;
    name: string;
    icon?: string;
  }>;
  type: "buy" | "sell";
  className?: string;
}

export function MarketListing({
  user,
  crypto,
  price,
  currency,
  availableAmount,
  minOrder,
  maxOrder,
  paymentMethods,
  type,
  className,
}: MarketListingProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="grid gap-6 sm:grid-cols-5">
          <div className="flex items-start gap-3 sm:col-span-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-medium">{user.name}</span>
                {user.isVerified && <BadgeVerified size="sm" />}
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {user.completedTrades} trades
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">
                  {user.completionRate}% completion
                </span>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="font-medium">{formatPrice(price)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="font-medium">
                  {availableAmount} {crypto.symbol}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Limits</p>
                <p className="font-medium">
                  {formatPrice(minOrder)} - {formatPrice(maxOrder)}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-sm text-muted-foreground">Payment methods</p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                  >
                    {method.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 p-6 pt-4">
        <Button
          className={cn(
            "ml-auto",
            type === "buy" ? "bg-teal hover:bg-teal-dark" : "bg-navy hover:bg-navy-light"
          )}
        >
          {type === "buy" ? "Sell" : "Buy"} {crypto.symbol}
        </Button>
      </CardFooter>
    </Card>
  );
}
