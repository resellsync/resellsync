import * as React from "react";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (value: string) => void;
  discount?: boolean;
}

export function Tab({ text, selected, setSelected, discount }: TabProps) {
  return (
    <button
      type="button"
      className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 text-base focus:outline-none
        ${selected ? "bg-[#009A53] text-white" : "bg-transparent text-[#0A090C] hover:bg-[#D6F5E6]"}
      `}
      onClick={() => setSelected(text)}
    >
      <span className="flex items-center gap-2">
        {text}
        {discount && (
          <span className="ml-1 text-xs bg-[#009A53] text-white px-2 py-0.5 rounded-full">Save 17%</span>
        )}
      </span>
    </button>
  );
} 