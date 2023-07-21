"use client";

import { HaveChildren } from "@/types";
import { createContext, useContext } from "react";

//
type PopperContext = {};

const popperContext = createContext<PopperContext | null>(null);

export default function PopperContextProvider({ children }: HaveChildren) {
  return <popperContext.Provider value={{}}>{children}</popperContext.Provider>;
}

export function usePopper() {
  const popper = useContext(popperContext);
  if (!popper) throw new Error("Popper context not found");
  return popper;
}
