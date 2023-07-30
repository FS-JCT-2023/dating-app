"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { OutlineColoredBadge } from "@/components/ui/badge"
import { getRandomProfileImageUrl } from "@/lib/images"
import { FC } from "react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import {
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"

export const ClientAvatar: FC<{ url?: string }> = ({ url }) => {
  return (
    <Avatar className="relative">
      <AvatarImage src={url} />
      <AvatarFallback>
        <AvatarImage src={getRandomProfileImageUrl()} />
      </AvatarFallback>
    </Avatar>
  )
}

type BadgesProps = {
  gender: string
  isDating: boolean
  category: string
}

export const MenBadge = () => (
  <OutlineColoredBadge variant={"outline"} badgeColor={"blue"}>Men</OutlineColoredBadge>
)

export const WomenBadge = () => (
  <OutlineColoredBadge variant={"outline"} badgeColor={"pink"}>Women</OutlineColoredBadge>
)

export const DivorcedBadge = () => (
  <OutlineColoredBadge variant={"outline"} badgeColor={"yellow"}>Divorced</OutlineColoredBadge>
)

export const SingleBadge = () => (
  <OutlineColoredBadge variant={"outline"} badgeColor={"green"}>Single</OutlineColoredBadge>
)

export const BlackListedBadge = () => (
  <OutlineColoredBadge variant={"outline"} badgeColor={"red"}>Black Listed</OutlineColoredBadge>
)

export const IsDatingBadge = () => (
  <OutlineColoredBadge variant={"outline"} badgeColor={"black"}>Dating</OutlineColoredBadge>
)

export const Badges: FC<BadgesProps> = ({ gender, isDating, category }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {gender.includes("MALE") ? <MenBadge /> : <WomenBadge />}
      {isDating && <IsDatingBadge />}
      {category === "DIVORCED" && <DivorcedBadge />}
      {category === "SINGLE" && <SingleBadge />}
      {category === "BLACKLISTED" && <BlackListedBadge />}
    </div>
  )
}

export const Actions = ({ id }: { id: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
