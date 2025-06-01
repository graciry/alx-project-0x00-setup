// pill.tsx
import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="px-3 py-1 bg-[#F6F6F6] text-sm rounded-full font-medium text-[#6E6E6E]">
      {title}
    </span>
  );
};

export default Pill;
