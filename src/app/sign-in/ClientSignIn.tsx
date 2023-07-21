"use client";

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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/lib/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ClientSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const { push } = useRouter();

  const onClick = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      ...data,
      callbackUrl: "/",
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      // TODO show error
      reset();
    } else {
      // TODO redirect to client space
      push("/");
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Sign-In</CardTitle>
        <CardDescription>
          Enter your email and password and then, click the sign-in button to
          sign-in.
        </CardDescription>
      </CardHeader>
      <form onSubmit={onClick} className="">
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input {...register("email")} id="email" type="text" />
            {errors.email?.message && (
              <Label className="text-xs text-red-600" htmlFor="email">
                {errors.email?.message.toString()}
              </Label>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input {...register("password")} id="password" type="password" />
            {errors.password?.message && (
              <Label htmlFor="email" className="text-xs text-red-600">
                {errors.password?.message.toString()}
              </Label>
            )}
          </div>
        </CardContent>
        <CardContent>
          <Button type="submit">Sign in</Button>
        </CardContent>
        <input type="hidden" value="CLIENT" {...register("role")} />
        <CardFooter>
          <p className="text-sm text-center mx-auto opacity-85">
            If you don{"'"}t have an account,{" "}
            <Link href="#" className="underline text-violet-900">
              sign up
            </Link>
            .
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
