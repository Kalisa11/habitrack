import { hasuraClient } from "@/lib/hasuraClient";
import { Category, GetCategoryDocument } from "@/src/graphql/generated/graphql";
import { NextResponse } from "next/server";

const fetchCategories = async () => {
  const categories = (await hasuraClient(GetCategoryDocument)) as {
    category: Category[];
  };
  return categories.category;
};

export async function GET() {
  const categories = await fetchCategories();
  return NextResponse.json(categories);
}
