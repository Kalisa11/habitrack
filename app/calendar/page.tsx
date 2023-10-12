import EmptyPlaceholder from "@components/Habits/EmptyPlaceholder";
import Navbar from "@/app/components/Navbar";
import { hasuraClient } from "@/lib/hasuraClient";
import { GetHabitByUserDocument, Habit } from "@/src/graphql/generated/graphql";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import GuestView from "@components/GuestView";
import CalendarView from "@components/Habits/CalendarView";

const CalendarPage = async () => {
  const session = await getServerSession(authOptions);

  const habits = (await hasuraClient(GetHabitByUserDocument, {
    email: session?.user?.email,
  })) as { habit: Habit[] };

  if (!session) {
    return <GuestView />;
  }

  return (
    <div>
      <Navbar header="Calendar" />
      {habits?.habit?.length === 0 ? (
        <EmptyPlaceholder />
      ) : (
        <CalendarView habits={habits.habit} />
      )}
    </div>
  );
};

export default CalendarPage;
