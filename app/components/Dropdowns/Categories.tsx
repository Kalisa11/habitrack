"use client";

import React, { useEffect, useState } from "react";
import { Category } from "@/src/graphql/generated/graphql";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form";
import { Skeleton } from "@components/ui/skeleton";
import { ScrollArea } from "@components/ui/scroll-area";
import { Separator } from "@components/ui/separator";

const Categories = ({ control }: { control: any }) => {
  const [categories, setCategories] = useState<Category[]>();
  const [loading, setLoading] = useState(false);
  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/categories`);
      const categories = await res.json();
      setCategories(categories);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <FormField
      control={control}
      name="category_id"
      render={({ field }) => (
        <FormItem className="col-span-2">
          <FormLabel>Category</FormLabel>
          <Select onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="h-32">
              {loading ? (
                <div>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="bg-gray-200 w-48 h-4 mb-2 pt-1 mx-auto"
                    />
                  ))}
                </div>
              ) : (
                categories?.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Categories;
