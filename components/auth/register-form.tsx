"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import React from "react";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(1, "Password is required"),
  confirmPassword: z.string().min(1, "Password is required"),
});

const RegisterForm = () => {


  const router = useRouter();
  type Login = z.infer<typeof formSchema>;

  const form = useForm<Login>({
    resolver: zodResolver(formSchema),
    mode: "all",
    criteriaMode: "all",
    defaultValues:{
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    }
  });

  const onSubmit = (data: Login) => {
    
    router.push('/')
  };

  const { control } = form;

  return (

    <Card>
      <CardHeader>
        <CardTitle>
          Login
        </CardTitle>
        <CardDescription>
          Log into your account with your credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                        placeholder="Enter email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                        placeholder="Enter name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="confirm Password"
                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                        placeholder="Enter confirm Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full dark:bg-slate-800 dark:text-white">
                Sign up
              </Button>
            </form>
          </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
