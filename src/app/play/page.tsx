"use client";

import { Button } from "@/components/ui/button";
import { usePopper } from "@/providers/popper";
import UploadProfileImage from "../sign-up/UploadProfileImage"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form"
import DemoPage from "../client/users-table/table";
import { useSession } from 'next-auth/react'


export default function Playground() {
  const { data } = useSession()

  return (
    <>
      <div className="">
        {JSON.stringify(data, null, 2)}
      </div>
      {/* <DemoPage /> */}
    </>
  );
}
