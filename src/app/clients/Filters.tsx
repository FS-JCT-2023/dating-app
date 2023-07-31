"use client";

import type {Filters} from '@/types'
import { useRouter } from "next/router";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// give me the category regex for client category
const categoryRegex = 

const filtersSchema = z.object({
  page: z.number().min(1).default(1),
  page_size: z.number().max(40).default(20),
  search: z.string().max(255).optional(),
  categories: z.array(z.string().regex(/^("")$/)).optional(),
  

export const ClientFilters = () => {
  const router = useRouter()
  const form = useForm<Filters>({
    resolver: zodResolver()
  })

}