"use client";

import React, { useEffect, useState } from "react";
import { Category } from "@/src/graphql/generated/graphql";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@components/ui/select";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>();
  const getCategories = async () => {
    try {
      const res = await fetch(`/api/categories`);
      const categories = await res.json();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Select>
      <SelectTrigger className="w-2/3">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent className="h-32">
        <SelectGroup>
          <SelectLabel>Habit Categories</SelectLabel>
          {categories?.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Categories;
