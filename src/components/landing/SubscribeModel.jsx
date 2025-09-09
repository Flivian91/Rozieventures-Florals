"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePathname } from "next/navigation";
import Heading from "../common/Heading";
import { Checkbox } from "../ui/checkbox";

export function SubscribeModel() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  // Open automatically on landing page ("/")
  useEffect(() => {
    if (pathname === "/") {
      setOpen(true);
    }
  }, [pathname]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader className={"flex flex-col gap-2"}>
          <div className="flex  items-center justify-center">
            <DialogTitle className={"flex items-center gap-1"}>
              <span>Welcome</span>
              <span className="font-bold text-2xl text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Ora Blooms
              </span>
            </DialogTitle>
          </div>
          <h5 className="text-center tracking-wider mt-3">
            Subscribe to our newsletter
          </h5>

          <DialogDescription>
            Stay updated with our latest floral collections and offers 🌸
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" name="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email-1">Email</Label>
            <Input
              id="email-1"
              name="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" />
          <div className="grid gap-2">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <p className="text-muted-foreground text-sm">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
