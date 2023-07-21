"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link"
import { useForm } from "react-hook-form";

export default function ClientSignIn() {
  const { register, handleSubmit } = useForm()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Sign-In</CardTitle>
        <CardDescription>
          Enter your email and password and then, click the sign-in button to sign-in.
        </CardDescription>
      </CardHeader>
      <form className="">
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
            <Label htmlFor="email">Email</Label>
          </div>
        </CardContent>
        <CardContent>
          <Button>Sign in</Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center mx-auto opacity-85">
            If you don{"'"}t have an account, <Link href="#" className="underline text-violet-900">sign up</Link>! 
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
