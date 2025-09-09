"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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
import { useState } from "react";

const categories = [
  { value: "all", label: "All Flowers" },
  { value: "roses", label: "Roses" },
  { value: "peonies", label: "Peonies" },
  { value: "lilies", label: "Lilies" },
  { value: "tulips", label: "Tulips" },
  { value: "mixed", label: "Mixed Arrangements" },
];
export function ShopFilterCategories() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between rounded bg-white"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select flower type..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search flower type..." className="h-9" /> */}
          <CommandList>
            {/* <CommandEmpty>No flower found.</CommandEmpty> */}
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  
                  value={category.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {category.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === category.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
