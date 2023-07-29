import { User } from "@/types"
import { columns } from "./columns"
import { DataTable } from "./data-table"
// import { apiClient } from "@/services/apiClient"
import { prisma } from "@/services/prismaClient"

async function getData(): Promise<User[]> {
  return (await prisma.user.findMany({
    where: {
      role: "CLIENT",
    },
    include: {
      client: true,
    },
  })).map((user) => ({
    ...user,
    ...user.client,
  })) as User[]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
