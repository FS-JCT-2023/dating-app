import { getServerSession } from "@/lib/auth/authorization";
import {  } from "next-auth/next";
import AdminProfile from "./AdminProfile";
import MMProfile from "./MMProfile";
import ClientProfile from "./ClientProfile";
import { redirect } from 'next/navigation'


export default async function Profile() {
  const session = await getServerSession();
  if (!session || !session.user) {
    return redirect("/sign-in")
  }

  return (
    <>
    {session.user.role === "ADMIN" && <AdminProfile user={session.user} />}
    {session.user.role === "CLIENT" && <ClientProfile user={session.user} />}
    {session.user.role === "MATCHMAKER" && <MMProfile user={session.user} />}
    </>
  )
}