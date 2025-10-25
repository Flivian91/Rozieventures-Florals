import PageHeading from "@/components/common/PageHeading";
import BlogCategory from "@/components/landing/blog/BlogCategory";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const blogData = [
  {
    id: 1,
    title: "The Art of Seasonal Flower Arrangements",
    image: "purple.png",
    category: "Design Tips",
    description:
      "Discover how to create stunning arrangements that celebrate each season's unique beauty and color palette.",
    createdAt: "March 12, 2024",
  },
  {
    id: 2,
    title: "Top 10 Flowers That Last the Longest in a Vase",
    image: "purple-roses.jpg",
    category: "Floral Care",
    description:
      "Learn which blooms stay fresh the longest and how to keep your arrangements vibrant for days.",
    createdAt: "April 5, 2024",
  },
  {
    id: 3,
    title: "How to Choose the Perfect Bouquet for Every Occasion",
    image: "pink-peonies.jpg",
    category: "Gifting Guide",
    description:
      "From birthdays to weddings, explore the meaning behind different flowers and how to match them to each celebration.",
    createdAt: "May 20, 2024",
  },
  {
    id: 4,
    title: "Inside the Bloom: The Journey of a Flower from Farm to Vase",
    image: "hero-florals.jpg",
    category: "Behind the Scenes",
    description:
      "Take a behind-the-scenes look at how our flowers are grown, handpicked, and delivered with care.",
    createdAt: "June 8, 2024",
  },
  {
    id: 5,
    title: "The Meaning of Colors in Floral Design",
    image: "golden-flowers.jpg",
    category: "Floral Trends",
    description:
      "Explore how different flower colors express emotions and how to use them in your next arrangement.",
    createdAt: "July 14, 2024",
  },
  {
    id: 6,
    title: "DIY Floral Decor Ideas for Your Home",
    image: "purple.png",
    category: "Home Styling",
    description:
      "Brighten your space with simple do-it-yourself floral centerpieces and wall arrangements.",
    createdAt: "August 27, 2024",
  },
];

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
        {/* <div className="flex items-center gap-4">

        </div> */}
        <BlogCategory />
        <Separator />
        {/* Blog Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {blogData.map((data) => {
            return (
              <Card
                key={data.id}
                className={
                  "group overflow-hidden relative transition-all duration-500 py-0"
                }
              >
                <CardHeader className={"px-0"}>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Button className={"absolute z-10 top-1 left-1"}>
                      {data.category}
                    </Button>
                    <Image
                      src={`/images/${data.image}`}
                      layout="fill"
                      objectFit="fill"
                      className="group-hover:scale-110 transition-all "
                    />
                  </div>
                </CardHeader>
                <CardContent className={"flex flex-col gap-2 py-2"}>
                  <div className="flex text-sm font-medium tacking-wider text-gray-600 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{data.createdAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer size={16} />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold tracking-wide leading-7 group-hover:text-primary">
                    {data.title}
                  </h1>
                  <p className="">{data.description}</p>
                </CardContent>
                <CardFooter className={"py-2"}>
                  <CardAction>
                    <Button variant={"outline"} asChild>
                      <Link href={`/${data.id}`}>
                        <span>Read More</span>
                        <ArrowRight />
                      </Link>
                    </Button>
                  </CardAction>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      {/* Newsletter */}
    </div>
  );
}

export default page;
