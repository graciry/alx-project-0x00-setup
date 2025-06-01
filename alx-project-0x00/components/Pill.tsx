// components/Pill.tsx
import React from "react";
import { PillProps } from "@/interfaces";


const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
      {title}
    </span>
  );
};

export default Pill;
