import { Answer, QuestionType } from "@prisma/client"
import { prisma } from "@/services/prismaClient"
import { getServerSession } from "@/lib/auth/authorization"
import { redirect } from "next/navigation"
import {Questions} from './QuestionsForm'

type QuestionProps = {
  params: {
    category: QuestionType
  }
}

// revalidate data every 24 hours
export const revalidate = 60 * 60 * 24 // 24 hours

export default async function Question({params}: QuestionProps) {
  const session = await getServerSession();
  if (!session || !session.user || session.user.role !== "CLIENT") {
    return redirect("/sign-in")
  }

  const questions = await prisma.question.findMany({
    where: {
      type: params.category
    }, 
    include: {
      options: true
    }
  })

  const answers: Answer[] = await prisma.answer.findMany({
    where: {
      userId: session.user.id,
      question: {
        type: params.category
      }
    },
  })
  
  
  return (
    <>
    <div><Questions type={params.category} questions={questions} prevAnswers={answers} /></div>
    </>

    )
}