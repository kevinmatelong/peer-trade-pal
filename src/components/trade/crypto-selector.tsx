
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

const cryptocurrencies = [
  { value: "btc", label: "Bitcoin", symbol: "BTC" },
  { value: "eth", label: "Ethereum", symbol: "ETH" },
  { value: "usdt", label: "Tether", symbol: "USDT" },
  { value: "bnb", label: "BNB", symbol: "BNB" },
  { value: "sol", label: "Solana", symbol: "SOL" },
  { value: "xrp", label: "XRP", symbol: "XRP" },
  { value: "ada", label: "Cardano", symbol: "ADA" },
  { value: "avax", label: "Avalanche", symbol: "AVAX" },
  { value: "dot", label: "Polkadot", symbol: "DOT" },
  { value: "matic", label: "Polygon", symbol: "MATIC" },
];

interface CryptoSelectorProps {
  onSelect: (value: string) => void;
  selected: string;
}

export function CryptoSelector({ onSelect, selected }: CryptoSelectorProps) {
  const [open, setOpen] = useState(false);

  const selectedCrypto = cryptocurrencies.find(
    (crypto) => crypto.value === selected
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[180px] justify-between font-normal"
        >
          {selectedCrypto ? selectedCrypto.label : "Select cryptocurrency..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search cryptocurrency..." />
          <CommandList>
            <CommandEmpty>No cryptocurrency found.</CommandEmpty>
            <CommandGroup>
              {cryptocurrencies.map((crypto) => (
                <CommandItem
                  key={crypto.value}
                  value={crypto.value}
                  onSelect={() => {
                    onSelect(crypto.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected === crypto.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {crypto.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
