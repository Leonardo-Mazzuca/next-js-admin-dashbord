"use client";

import BackButton from "@/components/back-button";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import React from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
  author: z.string().min(1, "Author is required"),
  date: z.string().min(1, "Date is required"),
});

type Props = {
  params: Promise<{ id: string }>;
};
const PostEdit = ({ params }: Props) => {
  const resolved = React.use(params);

  const { toast} = useToast();

  const post = posts.find((post) => post.id === resolved.id);

  type PostData = z.infer<typeof formSchema>;

  const form = useForm<PostData>({
    resolver: zodResolver(formSchema),
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      title: post?.title || "",
      author: post?.author || "",
      body: post?.body || "",
      date: post?.date || "",
    },
  });

  console.log(post);

  const onSubmit = (data: PostData) => {
    toast({
        title:'Post has been updated successfully',
        description: `Updated by ${data?.author} on ${data?.date}`,
    })
  };

  const { control } = form;

  return (
    <>
      <BackButton text="Back to posts" link="/posts" />
      <h3 className="text-2xl mb-4">Edit post</h3>

      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                    placeholder="Enter author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 dark:text-white text-black focus-visible:ring-offset-0"
                    placeholder="Enter date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full dark:bg-slate-800 dark:text-white">
            Update post
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PostEdit;
