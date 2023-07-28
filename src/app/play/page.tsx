"use client";

import { Button } from "@/components/ui/button";
import { usePopper } from "@/providers/popper";
import UploadProfileImage from "../sign-up/UploadProfileImage"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {Form} from "@/components/ui/form"

export const OurUploadButton = () => (
  <UploadProfileImage />
);

export default function Playground() {
  const { pop } = usePopper();
  const form = useForm({
    resolver: zodResolver(z.object({
      bob: z.string()
    })),
  })
  const {register, handleSubmit} = form
  
  return (
    <>
    <Form {...form}>
      <form onSubmit={handleSubmit(d => console.log(d))}>
        <Checkbox  />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
  );
}
