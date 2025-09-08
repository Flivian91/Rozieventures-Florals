import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { FaStar } from "react-icons/fa";
import { Heart, ShoppingCart } from "lucide-react";

function ProductsCard() {
  return (
    <Card className={"group"}>
      <CardHeader>
        <div className="relative overflow-hidden transition-all duration-300">
          <Image
            src={"/images/purple-roses.jpg"}
            height={100}
            width={100}
            alt="Gloden Image"
            className="group-hover:scale-105 group-hover:opacity-40 object-cover w-full"
          />
          <div className="absolute z-10 top-2 left-0 w-full flex items-center justify-between">
            <Badge className={"bg-accent"}>New</Badge>
            <Button className={"bg-slate-100 text-slate-800"}>
              <Heart />
            </Button>
          </div>
          <CardAction>
            <button
              className={
                "items-center cursor-pointer gap-2 bg-primary text-slate-100 rounded px-4 py-2 justify-between hidden group-hover:flex absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 z-10"
              }
            >
              <ShoppingCart />
              <span>Quick Add</span>
            </button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent className={"flex flex-col gap-2"}>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-accent">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex items-center gap-2">
            <span>4.9</span>
            <span>(127)</span>
          </div>
        </div>
        <h2 className="text-xl tracking-wider group-hover:text-primary">
          Soft Pink Peonies
        </h2>
        <p>Delicate pink peonies perfet for romantice</p>
      </CardContent>
      <CardFooter className={"flex justify-between items-center"}>
        <div>
          <span>Ksh 2,000</span>
        </div>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductsCard;
