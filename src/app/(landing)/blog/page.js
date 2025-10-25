import PageHeading from "@/components/common/PageHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Calendar, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      {/* Introduction */}
      <div className="bg-primary/20 py-10">
        <PageHeading
          heading={"Floral Insights"}
          subHeading={
            "Discover the art, science, and beauty of flowers through our expert insights, tips, and stories from the world of floriculture."
          }
        />
      </div>
      {/* Blogs collection */}
      <section className="px-5 py-8">
        {/* Pagination */}
        <div className="flex items-center gap-4"></div>
        {/* Blog Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className={"group transition-all duration-300"}>
            <CardHeader>
              <div className="relative h-56 w-full overflow-hidden">
                <Button className={"absolute -top-2 -left-2"}>Design</Button>
                <Image src={"/images/purple.png"} layout="fill" objectFit="fill" className="group-hover:scale-110"/>
              </div>
            </CardHeader>
            <CardContent className={"flex flex-col gap-2"}>
              <div className="flex text-sm font-medium tacking-wider text-gray-600 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>March 12, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer size={16} />
                  <span>5 min read</span>
                </div>
              </div>
              <h1 className="text-2xl font-semibold tracking-wide leading-7 group-hover:text-primary">The Art of Seasonal Flower Arrangements</h1>
              <p>
                Discover how to create stunning arrangements that celebrate each
                season's unique beauty and color palette.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant={"outline"} asChild>
                  <Link href={"/#"}>
                    <span>Read More</span>
                    <ArrowRight />
                  </Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        </div>
      </section>
      {/* Newsletter */}
    </div>
  );
}

export default page;
