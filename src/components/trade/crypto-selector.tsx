
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
import { useCryptoPrices } from "@/hooks/use-crypto-prices";

interface CryptoSelectorProps {
  onSelect: (value: string) => void;
  selected: string;
}

export function CryptoSelector({ onSelect, selected }: CryptoSelectorProps) {
  const [open, setOpen] = useState(false);
  const { data: cryptoPrices } = useCryptoPrices();

  const selectedCrypto = cryptoPrices?.find(
    (crypto) => crypto.id === selected
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
          {selectedCrypto ? selectedCrypto.name : "Select cryptocurrency..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search cryptocurrency..." />
          <CommandList>
            <CommandEmpty>No cryptocurrency found.</CommandEmpty>
            <CommandGroup>
              {cryptoPrices?.map((crypto) => (
                <CommandItem
                  key={crypto.id}
                  value={crypto.id}
                  onSelect={() => {
                    onSelect(crypto.id);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected === crypto.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {crypto.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
