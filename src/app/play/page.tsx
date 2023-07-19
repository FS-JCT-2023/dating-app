"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Playground() {
  return (
    <>
      <div className="">play</div>
      <Button onClick={() => signIn("credentials")}>Sign in</Button>
    </>
  );
}
