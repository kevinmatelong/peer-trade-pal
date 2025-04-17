
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Filter, RefreshCw } from "lucide-react";

interface FilterSidebarProps {
  onFilterChange?: (filters: Record<string, any>) => void;
  className?: string;
}

export function FilterSidebar({ onFilterChange, className }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [amountRange, setAmountRange] = useState([0, 10]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<string[]>([]);
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const paymentMethods = [
    { id: "bank", name: "Bank Transfer" },
    { id: "paypal", name: "PayPal" },
    { id: "venmo", name: "Venmo" },
    { id: "cashapp", name: "Cash App" },
    { id: "card", name: "Credit/Debit Card" },
  ];

  const togglePaymentMethod = (id: string) => {
    setSelectedPaymentMethods((prev) => {
      if (prev.includes(id)) {
        return prev.filter((method) => method !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const resetFilters = () => {
    setPriceRange([0, 100000]);
    setAmountRange([0, 10]);
    setSelectedPaymentMethods([]);
    setShowVerifiedOnly(false);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          className="flex h-8 items-center gap-1.5 text-xs text-muted-foreground"
          onClick={resetFilters}
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Reset
        </Button>
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <Label htmlFor="currency">Currency</Label>
          <Select defaultValue="usd">
            <SelectTrigger id="currency" className="mt-1.5">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="gbp">GBP</SelectItem>
              <SelectItem value="cad">CAD</SelectItem>
              <SelectItem value="aud">AUD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="price-range">Price range</Label>
          <div className="mt-3">
            <Slider
              id="price-range"
              value={priceRange}
              min={0}
              max={100000}
              step={100}
              onValueChange={setPriceRange}
            />
            <div className="mt-2 flex items-center justify-between">
              <Input
                type="number"
                className="h-8 w-24"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([
                    parseInt(e.target.value),
                    priceRange[1],
                  ])
                }
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="number"
                className="h-8 w-24"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    parseInt(e.target.value),
                  ])
                }
              />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="amount-range">Amount</Label>
          <div className="mt-3">
            <Slider
              id="amount-range"
              value={amountRange}
              min={0}
              max={10}
              step={0.1}
              onValueChange={setAmountRange}
            />
            <div className="mt-2 flex items-center justify-between">
              <Input
                type="number"
                className="h-8 w-24"
                value={amountRange[0]}
                onChange={(e) =>
                  setAmountRange([
                    parseFloat(e.target.value),
                    amountRange[1],
                  ])
                }
              />
              <span className="text-muted-foreground">to</span>
              <Input
                type="number"
                className="h-8 w-24"
                value={amountRange[1]}
                onChange={(e) =>
                  setAmountRange([
                    amountRange[0],
                    parseFloat(e.target.value),
                  ])
                }
              />
            </div>
          </div>
        </div>

        <div>
          <Label>Payment methods</Label>
          <div className="mt-3 space-y-2">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center space-x-2"
              >
                <Switch
                  id={`payment-${method.id}`}
                  checked={selectedPaymentMethods.includes(method.id)}
                  onCheckedChange={() => togglePaymentMethod(method.id)}
                />
                <Label
                  htmlFor={`payment-${method.id}`}
                  className="text-sm font-normal"
                >
                  {method.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <Switch
              id="verified-only"
              checked={showVerifiedOnly}
              onCheckedChange={setShowVerifiedOnly}
            />
            <Label
              htmlFor="verified-only"
              className="text-sm font-normal"
            >
              Verified users only
            </Label>
          </div>
        </div>

        <Button className="mt-6 w-full">
          <Filter className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
