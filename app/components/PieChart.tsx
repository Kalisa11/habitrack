import { FaEllipsisV } from "react-icons/fa";
import { PieChart, Pie, Cell } from "recharts";
const data = [
  { name: "Completed", value: 400 },
  { name: "In progress", value: 300 },
  { name: "Skipped", value: 300 },
  { name: "Undocumented", value: 200 },
];

const COLORS = ["#081A51", "#1F7A8C", "#F3A712", "#C1292E"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieComponent = () => {
  return (
    <div className="basis-[40%] w-1/2 border bg-white shadow-md cursor-pointer rounded-md">
      <div className="bg-[#F8F9FC] flex items-center justify-between py-4 px-5 border-b-[1px] border-[#EDEDED]">
        <h2 className="text-base text-dark-purple leading-5 font-bold">Habits Status</h2>
        <FaEllipsisV color="gray" className="cursor-pointer" />
      </div>
      <div>
        <div className="flex items-center justify-center py-4">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex flex-col px-2">

        <div className="grid grid-cols-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="cursor-pointer font-semibold text-xs">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 mt-3">
          {COLORS.map((item, idx) => (
            <div
              key={idx}
              className="h-7 w-7"
              style={{ backgroundColor: item }}
            ></div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default PieComponent;
