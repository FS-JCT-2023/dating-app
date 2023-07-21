import { HaveChildren } from "@/types";
import {PopperContextProvider} from "./popper";

// provider for all providers
export function Providers({children}: HaveChildren) {
  return (
    <PopperContextProvider>
      {children}
    </PopperContextProvider>
  );
}
