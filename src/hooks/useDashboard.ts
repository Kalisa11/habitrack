import { useQuery } from "@tanstack/react-query";
import { hasuraClient } from "@/lib/hasuraClient";
import { GetHabitByUserDocument, Habit } from "../graphql/generated/graphql";
import getCurrentSession from "../helpers/getCurrentSession";
import { Session } from "next-auth";

export const useDashboard = () => {
  const session: Session | null | void = getCurrentSession();

  return useQuery({
    queryKey: ["habits"],
    queryFn: async () => {
      const habits = (await hasuraClient(
        GetHabitByUserDocument,
        session!.user!.email
      )) as {
        habits: Habit[];
      };
      return habits.habits as Habit[];
    },
  });
};
