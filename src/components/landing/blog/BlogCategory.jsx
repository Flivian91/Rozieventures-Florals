import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import React from "react";

function BlogCategory() {
  return (
    <div className="my-6  -mt-1">
      <div className="flex items-center justify-center gap-4">
        <button className="px-2 py-1 cursor-pointer hover:bg-accent rounded-lg border text-sm font-medium">
          Design Tips
        </button>
        <button className="px-2 py-1 cursor-pointer hover:bg-accent rounded-lg border text-sm font-medium">
          Floral Care
        </button>
        <button className="px-2 py-1 cursor-pointer hover:bg-accent rounded-lg border text-sm font-medium">
          Gifting Guide
        </button>
        <button className="px-2 py-1 cursor-pointer hover:bg-accent rounded-lg border text-sm font-medium">
          Behind the Scenes
        </button>
        <button className="px-2 py-1 cursor-pointer hover:bg-accent rounded-lg border text-sm font-medium">
          Floral Trends
        </button>
      </div>
    </div>
  );
}

export default BlogCategory;
