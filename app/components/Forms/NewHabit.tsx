"use client";

import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Calendar } from "@components/ui/calendar";
import { CalendarIcon, Plus } from "lucide-react";
import Categories from "../Dropdowns/Categories";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@components/ui/popover";
import { useSession } from "next-auth/react";
import { hasuraClient } from "@/lib/hasuraClient";
import { CreateHabitDocument } from "@/src/graphql/generated/graphql";
import { toast } from "react-hot-toast";
import InputField from "./InputField";

export function NewHabit() {
  const session = useSession();
  const FormSchema = z
    .object({
      name: z.string().min(3, {
        message: "Name must be at least 3 characters long",
      }),
      description: z.string(),
      start_date: z.date(),
      end_date: z.date(),
      category_id: z.string().nonempty({
        message: "Please select a category",
      }),
      user_id: z.string(),
    })
    .required();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user_id: session.data?.user?.id,
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    // ✅ This will be type-safe and validated.
    try {
      toast.promise(hasuraClient(CreateHabitDocument, values), {
        loading: "Creating habit...",
        success: "Habit created!",
        error: "Error creating habit",
      });
      form.reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="text-white mr-1" />
          New Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-4 gap-4 py-4">
              <InputField
                control={form.control}
                name="name"
                label="Name"
                inputType="text"
              />
              <InputField
                control={form.control}
                name="description"
                label="Description"
                inputType="text"
              />
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col col-span-2">
                    <FormLabel>Start date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Start monitoring your progress
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="end_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col col-span-2">
                    <FormLabel>End date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Stop monitoring your progress
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Categories control={form.control} />
            </div>
            <DialogFooter>
              <DialogTrigger asChild={false}>
                <Button variant="destructive" type="button">
                  Cancel
                </Button>
              </DialogTrigger>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
