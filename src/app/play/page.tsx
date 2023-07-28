import { Button } from "@/components/ui/button";
import { usePopper } from "@/providers/popper";
import UploadProfileImage from "../sign-up/UploadProfileImage"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {Form} from "@/components/ui/form"
import DemoPage from "../client/users-table/table";


export default function Playground() {  
  return (
    <>
    <DemoPage />
    </>
  );
}
