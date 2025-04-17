
import { BadgeVerified } from "@/components/ui/badge-verified";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface CryptoCardProps {
  id: string;
  name: string;
  symbol: string;
  logoUrl: string;
  price: number;
  currency: string;
  change24h: number;
  verified?: boolean;
  className?: string;
}

export function CryptoCard({
  name,
  symbol,
  logoUrl,
  price,
  currency,
  change24h,
  verified,
  className,
}: CryptoCardProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-muted">
              <img
                src={logoUrl}
                alt={`${name} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-medium">{name}</h3>
                {verified && <BadgeVerified size="sm" />}
              </div>
              <p className="text-sm text-muted-foreground">{symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">{formatPrice(price)}</p>
            <p
              className={cn(
                "text-xs",
                change24h > 0 ? "text-success" : "text-destructive"
              )}
            >
              {change24h > 0 ? "+" : ""}
              {change24h.toFixed(2)}%
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button variant="outline" size="sm" className="flex-1">
          Buy
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          Sell
        </Button>
      </CardFooter>
    </Card>
  );
}
