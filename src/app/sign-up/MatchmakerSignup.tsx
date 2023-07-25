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
import { signUpMatchMakerSchema } from "@/lib/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePopper } from "@/providers/popper";

export default function MatchmakerSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof signUpMatchMakerSchema>>({
    resolver: zodResolver(signUpMatchMakerSchema),
  });

  const { pop } = usePopper();

  const { push } = useRouter();

  const onClick = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      ...data,
      callbackUrl: "/",
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      pop({
        type: "error",
        headline: "Failed to signing up",
        message: "Please check your informations and try again.",
      })
      reset();
    } else {
      // TODO redirect to client space
      push("/");
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Matchmaker Sign-Up</CardTitle>
        <CardDescription>
          Enter your informations and then, click the sign-up button to
          sign-up.
        </CardDescription>
      </CardHeader>
      <form onSubmit={onClick} className="">
        <CardContent className="space-y-2">

          <div className="space-y-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input {...register("firstName")} id="firstName" type="text" />
            {errors.firstName?.message && (
              <Label htmlFor="email" className="text-xs text-red-600">
                {errors.firstName?.message.toString()}
              </Label>
              )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input {...register("lastName")} id="lastName" type="text" />
            {errors.lastName?.message && (
              <Label htmlFor="email" className="text-xs text-red-600">
                {errors.lastName?.message.toString()}
              </Label>
              )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input {...register("phoneNumber")} id="phoneNumber" type="text" />
            {errors.phoneNumber?.message && (
              <Label htmlFor="email" className="text-xs text-red-600">
                {errors.phoneNumber?.message.toString()}
              </Label>
              )}
          </div>
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
            <Input {...register("password")} autoComplete="password" id="password" type="password" />
            {errors.password?.message && (
              <Label htmlFor="email" className="text-xs text-red-600">
                {errors.password?.message.toString()}
              </Label>
            )}
          </div>
        </CardContent>
        <CardContent>
          <Button type="submit">Sign Up</Button>
        </CardContent>
        <input type="hidden" value="MATCHMAKER" {...register("role")} />
        <CardFooter>
          <p className="text-sm text-center mx-auto opacity-85">
            If you already have an account,{" "}
            <Link href="/sign-in" className="underline text-violet-900">
              sign in
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
