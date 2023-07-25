"use client";

import { Button } from "@/components/ui/button";
import { usePopper } from "@/providers/popper";
import UploadProfileImage from "../sign-up/UploadProfileImage"

export const OurUploadButton = () => (
  <UploadProfileImage />
);

export default function Playground() {
  const { pop } = usePopper();
  
  return (
    <>
      <div className="text-3xl font-semibold my-3 ml-2">play Page</div>
      <OurUploadButton />
      <div className="space-x-2 flex justify-center ">
        <Button
          onClick={() =>
            pop({
              type: "success",
              headline: "Success",
              message: "This is a success message",
            })
          }
        >
          Success
        </Button>

        <Button
          onClick={() =>
            pop({
              type: "error",
              headline: "Error",
              message: "This is an error message",
            })
          }
        >
          Error
        </Button>

        <Button
          onClick={() =>
            pop({
              type: "warning",
              headline: "Warning",
              message: "This is a warning message",
            })
          }
        >
          Warning
        </Button>

        <Button
          onClick={() =>
            pop({
              type: "info",
              headline: "Info",
              message: "This is an info message",
            })
          }
        >
          Info
        </Button>

        <Button
          onClick={() => {
            throw new Error("This is an error");
          }}
        >
          Throw Error
        </Button>
      </div>
    </>
  );
}
