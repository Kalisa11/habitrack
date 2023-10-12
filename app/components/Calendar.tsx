import { Calendar, Whisper, Popover, Badge } from "rsuite";
import { Habit } from "@/src/graphql/generated/graphql";
import {
  format,
  parseISO,
  isWithinInterval,
  isBefore,
  addDays,
} from "date-fns";

const HabitCalendar = ({ habits }: { habits?: Habit[] }) => {
  function getTodoList(date: Date) {
    // Filter habits for which the date is within their start and end dates
    const filteredHabits = habits?.filter((habit) => {
      const habitStartDate = parseISO(habit.start_date);
      const habitEndDate = parseISO(habit.end_date);

      // Check for valid date interval
      if (isBefore(habitEndDate, habitStartDate)) {
        return false;
      }

      return isWithinInterval(date, {
        start: habitStartDate,
        end: addDays(habitEndDate, 1),
      });
    });

    // Extract and format tasks from the filtered habits
    const taskList = filteredHabits?.map((habit) => ({
      id: habit.id,
      time: format(parseISO(habit.start_date), "hh:mm a"),
      title: habit.name,
    }));

    return taskList;
  }

  function renderCell(date: Date) {
    const list = getTodoList(date);

    if (list?.length) {
      const moreCount = list?.length > 1 ? list?.length - 1 : 0;
      const moreItem =
        moreCount > 0 ? (
          <li>
            <Whisper
              placement="top"
              trigger="click"
              speaker={
                <Popover>
                  {list?.slice(1).map((item) => (
                    <p key={item.id}>
                      <b>{item.time}</b> - {item.title}
                    </p>
                  ))}
                </Popover>
              }
            >
              <a>{moreCount} more</a>
            </Whisper>
          </li>
        ) : null;
      return (
        <ul className="calendar-todo-list text-xs">
          <li key={0}>
            <Badge /> <b>{list[0].time}</b> - {list[0].title}
          </li>
          {moreCount > 0 ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return <Calendar bordered renderCell={renderCell} />;
};

export default HabitCalendar;
