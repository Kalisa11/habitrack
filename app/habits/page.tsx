import EmptyPlaceholder from "@components/Habits/EmptyPlaceholder";
import Navbar from "../components/Habits/Navbar";
import { hasuraClient } from "@/lib/hasuraClient";
import { GetHabitByUserDocument, Habit } from "@/src/graphql/generated/graphql";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import HabitsList from "@components/Habits/HabitsList";

const HabitsPage = async () => {
  const session = await getServerSession(authOptions);

  const habits = (await hasuraClient(GetHabitByUserDocument, {
    email: session?.user?.email,
  })) as { habit: Habit[] };

  return (
    <div>
      <Navbar />
      <EmptyPlaceholder />
      {/* {habits?.habit?.length === 0 ? (
        <EmptyPlaceholder />
      ) : (
        <HabitsList habits={habits.habit} />
      )} 
      // TODO: To be implemented later
      */}
    </div>
  );
};

export default HabitsPage;
