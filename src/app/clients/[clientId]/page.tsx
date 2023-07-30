import { prisma } from '@/services/prismaClient'
import React from 'react'

type ClientDetailsPageProps = {
  params: {
    clientId: string
  }
}

async function ClientDetailsPage({params}: ClientDetailsPageProps) {
  const client = await prisma.client.findUnique({
    where: {
      userId: params.clientId,
      user: {
        role: "CLIENT"
      }
    },
    include: {
      user: true,
      answers: true,
      matches1: true,
      matches2: true,
    }
  })

  if (!client || !client.user) {
    throw new Error("Client not found")
  }

  return (
    <div>{JSON.stringify(client)}</div>
  )
}

export default ClientDetailsPage
