import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/config/nextAuth';
import { prisma } from '@/services/prismaClient';
import Navbar from '@/components/Nav/Nav';
import React, { use, useEffect, useState } from "react";
import { UserType } from '@/components/Nav/Nav';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/lib/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePopper } from "@/providers/popper";



export default async function ClientDashboard() {
  const session = await getServerSession();

  return (
    <>

      <main className='min-h-screen'>
        <div className='text-center my-auto mt-16'>
          <h1 className='text-5xl font-bold mt-5 '>Welcome to My Dating App CRM</h1>
          <span className='text-sm opacity-70 max-w-md'>
            MyDatingApp is a dedicated dating site for Jews looking to meet religiously and culturally compatible partners. Our
            We offer a wide range of features, including:
            We believe that MyDatingApp is the best way for Jews to find love and happiness. If you're ready to start your journey to love, sign up today!
          </span>
        </div>
        <div className='flex justify-center space-x-5'>
          <Link href={"sign-in"}>
            <Button>Client Sign In</Button>
          </Link>
          <Link href={"sign-in"}>
            <Button>Matchmaker Sign Up</Button>
          </Link>
          <Link href={"sign-up"}>
            <Button>client Sign Up</Button>
          </Link>
          <Link href={"sign-up"}>
            <Button>Matchmaker Sign Up</Button>
          </Link>

        </div>
      </main>
      <div>
      </div>
    </>
  );
}
