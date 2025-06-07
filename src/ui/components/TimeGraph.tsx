import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export function TimeGraph({ data }: { data: { run: number; time: number }[] }) {
  return (
    <LineChart width={500} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="run" />
      <YAxis label={{ value: "Time (s)", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="time" stroke="#82ca9d" />
    </LineChart>
  );
}
