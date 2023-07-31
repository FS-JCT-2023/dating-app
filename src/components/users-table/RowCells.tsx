"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { OutlineColoredBadge } from "@/components/ui/badge"
import { getRandomProfileImageUrl } from "@/lib/images"
import { FC, useState } from "react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useSession } from "next-auth/react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { banUser } from "@/services/clientAction";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";

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
      {gender === "FEMALE" ? <WomenBadge /> : <MenBadge />}
      {isDating && <IsDatingBadge />}
      {category === "DIVORCED" && <DivorcedBadge />}
      {category === "SINGLE" && <SingleBadge />}
      {category === "BLACKLISTED" && <BlackListedBadge />}
    </div>
  )
}

type BanUserDialogProps = {
  id: string
  setOpen: (open: true | undefined) => void
}

const BanUserDialog = ({ id, setOpen }: BanUserDialogProps) => {

  const {register, handleSubmit} = useForm()

  return (
    <Dialog onOpenChange={(e) => setOpen(e ? true : undefined)}>
      <DialogTrigger>Ban user</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            You are about to ban this user. This action is irreversible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(d => {
          banUser({userId: id, reason: d.reason || undefined})
        })}>
          <Textarea {...register("reason")} name="reason" id="reason" />
          <DialogFooter className="mt-5">
            <Button variant="ghost">Cancel</Button>
            <Button type="submit" variant="destructive">Ban</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export const Actions = ({ id }: { id: string }) => {
  const session = useSession()
  const [isOpen, setOpen] = useState<true | undefined>(undefined)
  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href={`/clients/${id}`}>
            See Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Match</DropdownMenuItem>
        {session.data?.user?.role === "ADMIN" && <DropdownMenuItem><BanUserDialog id={id} setOpen={setOpen} /></DropdownMenuItem>}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
