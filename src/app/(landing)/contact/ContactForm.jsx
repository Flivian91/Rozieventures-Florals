import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import React from "react";

function ContactForm() {
  return (
    <div className="bg-white shadow rounded px-7 py-4 ">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <MessageCircle className="text-primary" />
          <h2 className="text-2xl font-semibold  ">Send Us a Message</h2>
        </div>
        <p className="text-lg text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {/* Names */}
        <div className="flex gap-2">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="firstname" className={"text-gray-600"}>
              First Name*
            </Label>
            <Input type="text" id="firstname" placeholder="First Name" />
          </div>{" "}
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="lastname" className={"text-gray-600"}>
              Last Name*
            </Label>
            <Input type="text" id="lastname" placeholder="Last Name" />
          </div>
        </div>
        {/* Email Address */}
        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="email" className={"text-gray-600"}>
            Email Address*
          </Label>
          <Input type="email" id="email" placeholder="Email Address" />
        </div>
        {/* Phone Number */}
        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="phone" className={"text-gray-600"}>
            Phone Number*
          </Label>
          <Input type="phone" id="phone" placeholder="Phone Number" />
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default ContactForm;
