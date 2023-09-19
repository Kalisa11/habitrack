import { hasuraClient } from "@/lib/hasuraClient";
import { CreateUserDocument } from "@/src/graphql/generated/graphql";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await hasuraClient(CreateUserDocument, {
      email,
      password: hashedPassword,
    }).then((data: any) => data?.insert_users_one);

    return NextResponse.json(user);
  } catch (error: any) {
    console.log("registration error", error.message);
    return new NextResponse(error.message, { status: 500 });
  }
}
