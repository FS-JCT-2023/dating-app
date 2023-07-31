import { getServerSession } from "@/lib/auth/authorization";
import { } from "next-auth/next";
import AdminProfile from "./AdminProfile";
import MMProfile from "./MMProfile";
import ClientProfile from "./ClientProfile";
import { redirect } from 'next/navigation'
import { prisma } from "@/services/prismaClient";
import { User } from "@prisma/client";
import { UserDetails } from "@/components/profile/user-details";
import ChangePassword from "@/components/profile/change-password";


export default async function Profile() {
  const session = await getServerSession();
  if (!session || !session.user) {
    return redirect("/sign-in")
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id
    },
    include: {
      client: true,
      matchmaker: true,
      admin: true,
    }
  }) as User
  return (
    <div className="mx-auto px-4 py-3 max-w-2xl my-5 rounded-sm shadow-black/70 shadow bg-white">
      <UserDetails user={user} />
      {session.user.role === "ADMIN" && <AdminProfile user={session.user} />}
      {session.user.role === "CLIENT" && <ClientProfile user={session.user} />}
      {session.user.role === "MATCHMAKER" && <MMProfile user={session.user} />}
      <ChangePassword />
    </div>
  )
}