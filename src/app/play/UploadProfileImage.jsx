"use client";

import "@uploadthing/react/styles.css";
import { usePopper } from "../../providers/popper";
import { UploadButton, UploadDropzone } from "@uploadthing/react";
import Image from "next/image";
import { useState } from "react";

export default function UploadProfileImage() {
  const [imageUrl, setImageUrl] = useState(() => {
    return localStorage.getItem("profileImage") || ""
  });
  const { pop } = usePopper();

  const onSuccessfulUpload = (res) => {
    setImageUrl(res[0].fileUrl);
    localStorage.setItem("profileImage", res[0].fileUrl);
    pop({
      headline: "Profile Image",
      message: "Profile image uploaded successfully.",
      type: "success",
    });
  };

  const onUploadError = () => {
    pop({
      headline: "Profile Image",
      message: "Profile image upload failed.",
      type: "error",
    });
  };
  
  if (imageUrl) {
    return (
      <div className="">
        <Image
          src={imageUrl}
          alt="profile"
          className="rounded-lg shadow-lg"
          width={500}
          height={500}
        />
        <p className="text-sm mt-1 opacity-70">You can change this image in the setting.</p>
      </div>
    );
  } else {
    return (
      <div className="space-y-4">
        <UploadDropzone
          endpoint="profileImage"
          onClientUploadComplete={onSuccessfulUpload}
          onUploadError={onUploadError}
        />
        <UploadButton
          endpoint={"profileImage"}
          onClientUploadComplete={onSuccessfulUpload}
          onUploadError={onUploadError}
        />
      </div>
    );
  }
}
