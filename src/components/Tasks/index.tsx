import React from "react";
import { Checkbox } from "../ui/checkbox";
import TaskRow from "./TaskRow";

const Tasks = () => {
  return (
    <aside className="w-full h-full bg-[#26252A] rounded-md flex flex-col p-8">
      <h2 className="font-semibold text-2xl mb-3">Today&apos;s Task</h2>
      <TaskRow label="Frontend" />
      <TaskRow label="Review the Design" />
      <TaskRow label="Estimate the time" />
      <TaskRow label="Code UI" />
      <TaskRow label="Testing" />
      <TaskRow label="Submit" />
    </aside>
  );
};

export default Tasks;
