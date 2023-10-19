const HabitPage = ({ params }: { params: { id: string } }) => {
  return <div>My Habit: {params.id}</div>;
};

export default HabitPage;
