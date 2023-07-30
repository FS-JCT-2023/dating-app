"use client";

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useState } from "react";
import { ApiResponse, ClientsFromApi, Filters } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";

function FilterControl({ filters, setFilters }: { filters: Filters, setFilters: (filters: Filters) => void }) {
  return (
    <div className=""></div>
  )
}

export default function ClientTable() {
  const [filters, setFilters] = useState<Filters>({
    page: 1,
    page_size: 20,
    search: "",
    categories: [],
    gender: undefined
  })

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<ApiResponse<ClientsFromApi>>({
    queryKey:[ "clients"],
    queryFn: async () => {
      const url = `/api/clients?${new URLSearchParams(filters as any).toString()}`
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
      });
      return await res.json();
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.count < lastPage.page_size) return undefined;
      return lastPage.page + 1;
    },
  })

  const prevPage = () => {
    if (filters.page === 1) return;
    setFilters((prev) => ({ ...prev, page: prev.page - 1 }))
  }

  const nextPage = () => {
    if (data?.pages[filters.page].count && data.pages[filters.page].count < filters.page_size) return;
    if (!data?.pages[filters.page + 1]) {
      fetchNextPage()
    }
    setFilters((prev) => ({ ...prev, page: prev.page + 1 }))
  }

  return (
    <div className="container mx-auto py-10">
      <FilterControl filters={filters} setFilters={setFilters} />
      <DataTable columns={columns} data={data?.pages[filters.page].data || []} />
      <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => prevPage()}
            disabled={filters.page === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => nextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            Next
          </Button>
        </div>
    </div>
  )
}
