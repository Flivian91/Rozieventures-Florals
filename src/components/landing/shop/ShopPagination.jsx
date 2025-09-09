import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function ShopPagination() {
  return (
    <div className="pt-4">
      <Pagination className={"flex flex-col gap-4 md:flex-row items-center justify-between"}>
        <div>
          <h3 className="flex items-center gap-1 text-slate-700">
            Showing{" "}
            <span className="text-slate-950 font-bold tracking-wide font-mono">
              1
            </span>{" "}
            to{" "}
            <span className="text-slate-950 font-bold tracking-wide font-mono">
              10
            </span>{" "}
            of{" "}
            <span className="text-slate-950 font-bold tracking-wide font-mono">
              100
            </span>
            Entities
          </h3>
        </div>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className={"rounded"} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className={"rounded"} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
