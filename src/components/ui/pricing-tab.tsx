
import * as React from "react";
import { motion } from "framer-motion";

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
      className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-base relative focus:outline-none`}
      onClick={() => setSelected(text)}
    >
      {selected && (
        <motion.span
          layoutId="pricing-tab-pill"
          className="absolute inset-0 bg-gradient-to-r from-[#009A53] to-[#00B65E] rounded-full shadow-md"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className={`flex items-center gap-2 relative z-10 ${selected ? "text-white font-semibold" : "text-[#0A090C]"}`}>
        {text}
        {discount && (
          <span className={`text-xs px-2 py-0.5 rounded-full ${selected ? "bg-white text-[#009A53]" : "bg-[#E6F5EE] text-[#009A53]"}`}>
            Save 17%
          </span>
        )}
      </span>
    </button>
  );
}
