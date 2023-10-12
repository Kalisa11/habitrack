import EmptyPlaceholder from "@components/Habits/EmptyPlaceholder";
import Navbar from "../components/Navbar";
import { hasuraClient } from "@/lib/hasuraClient";
import { GetHabitByUserDocument, Habit } from "@/src/graphql/generated/graphql";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import HabitsList from "@components/Habits/HabitsList";
import GuestView from "@components/GuestView";
import { Skeleton } from "../components/ui/skeleton";

const HabitsPage = async () => {
  const session = await getServerSession(authOptions);

  const habits = (await hasuraClient(GetHabitByUserDocument, {
    email: session?.user?.email,
  })) as { habit: Habit[] };

  if (!session) {
    return <GuestView />;
  }

  return (
    <div>
      <Navbar header="Habits" />
      {habits?.habit?.length === 0 ? (
        <EmptyPlaceholder />
      ) : (
        <HabitsList habits={habits.habit} />
      )}
    </div>
  );
};

export default HabitsPage;
