import { hasuraClient } from "@/lib/hasuraClient";
import { GetUserbyEmailDocument, Users } from "../graphql/generated/graphql";

export async function getUser(email: string) {
  try {
    const data = (await hasuraClient(GetUserbyEmailDocument, {
      email,
    })) as { users: Users[] };

    if (data.users.length > 0) {
      return {
        userId: data.users[0].id,
        lastName: data.users[0].last_name,
        firstName: data.users[0].first_name,
        email,
      };
    }

    return null;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
