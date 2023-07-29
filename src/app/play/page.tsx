// "use client";

import { Button } from "@/components/ui/button";
import { usePopper } from "@/providers/popper";
import UploadProfileImage from "../../components/UploadProfileImage"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form"
import DemoPage from "../../components/users-table/table";
import { useSession } from 'next-auth/react'
import { SingleBadge, BlackListedBadge, DivorcedBadge, IsDatingBadge, MenBadge, WomenBadge } from "@/components/users-table/RowCells";
import AddImage from "@/components/UploadProfileImage"
import { useLocalStorage } from "usehooks-ts";
import Image from "next/image";

export default function Playground() {
  return (
    <>
      {/* <AddImage /> */}
      {/* <Image src={img} width={500} height={500} alt="Profile image" /> */}
      <DemoPage />
    </>
  );
}
