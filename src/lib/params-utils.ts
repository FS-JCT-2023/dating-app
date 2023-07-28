import { NextRequest } from "next/server";

// max results per page
const maxPageSize = 40;

// pagination params
export type PaginationParams = {
  page: number;
  page_size: number;
};

const defaultPaginationParams: PaginationParams = {
  page: 1,
  page_size: 20,
};

// get pagination params from request
export function getPaginationParams(req: NextRequest): PaginationParams {
  const url = new URL(req.nextUrl);
  const page = parseInt(url.searchParams.get("page") || "1");
  const page_size = parseInt(
    url.searchParams.get("page_size") || maxPageSize.toString()
  );

  if (isNaN(page) || isNaN(page_size) || page_size < 1 || page_size < 1) {
    return defaultPaginationParams;
  }

  return {
    page,
    page_size: Math.min(page_size, maxPageSize),
  };
}
