"use client";

import { Button } from "@/components/ui/button";
import { usePopper } from "@/providers/popper";

export default function Playground() {
  const {pop} = usePopper();
  return (
    <>
      <div className="">play</div>
      <Button onClick={() => pop({
        type: "success",
        headline: "Success",
        message: "This is a success message",
      })}>Success</Button>

      <Button onClick={() => pop({
        type: "error",
        headline: "Error",
        message: "This is an error message",
      })}>Error</Button>

      <Button onClick={() => pop({
        type: "warning",
        headline: "Warning",
        message: "This is a warning message",
      })}>Warning</Button>

      <Button onClick={() => pop({
        type: "info",
        headline: "Info",
        message: "This is an info message",
      })}>Info</Button>
    </>
  );
}
