
import React, { useEffect, useState } from "react";
import { Import, Database, FileUp } from "lucide-react";

const dummyRows = [
  {
    imei: "35370...0241",
    brand: "Apple",
    model: "iPhone 13",
    grade: "A",
    network: "Unlocked",
  },
  {
    imei: "86832...2215",
    brand: "Samsung",
    model: "Galaxy S21",
    grade: "B",
    network: "T-Mobile",
  },
  {
    imei: "01452...8299",
    brand: "Google",
    model: "Pixel 6",
    grade: "A",
    network: "Verizon",
  }
];

export default function BulkImportAnimatedVisual() {
  // Animate sliding-in of rows
  const [shownRows, setShownRows] = useState(0);

  useEffect(() => {
    setShownRows(0);
    // Animate the "import" process row by row
    const timeouts: NodeJS.Timeout[] = [];
    dummyRows.forEach((row, i) => {
      const to = setTimeout(() => setShownRows(r => Math.max(r, i + 1)), 900 + i * 450);
      timeouts.push(to);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-[95vw] max-w-[330px] md:max-w-[380px] mx-auto h-[225px] md:h-[240px] bg-gradient-to-br from-brand-blue/5 to-brand-teal/10 rounded-2xl flex flex-col p-4 shadow-[0_1px_6px_0_rgba(10,93,117,0.05)] overflow-hidden">
      {/* Animated Import Area */}
      <div className="absolute z-10 left-0 top-2 w-full flex justify-center pointer-events-none">
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg w-[200px] animate-fade-in">
          <Import className="text-brand-teal animate-pulse w-5 h-5" aria-hidden="true" />
          <span className="font-semibold text-brand-teal text-sm">CSV Import</span>
          <FileUp className="text-gray-400 ml-auto w-4 h-4" aria-hidden="true" />
        </div>
      </div>
      {/* Arrow indicating import flow */}
      <div className="absolute left-1/2 top-[55px] -translate-x-1/2 z-10">
        <svg width="30" height="36" viewBox="0 0 30 36" fill="none" className="animate-bounce" aria-hidden="true">
          <path d="M15 2v28M15 30l6-6M15 30l-6-6" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Animated Table */}
      <div className="relative mt-auto pt-[84px]">
        <div className="bg-white rounded-xl shadow-lg w-full min-h-[110px] px-2 py-3 border border-brand-teal/10 animate-fade-in">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center text-xs text-gray-400">
              <Database className="w-4 h-4 text-brand-blue mr-1" />
              <span className="font-medium">Inventory Dashboard</span>
            </div>
            <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-1 text-gray-600 text-xs shadow-inner">
              <span className="text-brand-blue font-semibold">Search:</span>
              <span className="italic opacity-80">IMEI / Model</span>
            </div>
          </div>
          <table className="table-auto w-full text-xs overflow-x-auto">
            <thead>
              <tr className="bg-gray-50 text-brand-blue text-[13px]">
                <th className="p-1 font-medium">IMEI</th>
                <th className="p-1 font-medium">Brand</th>
                <th className="p-1 font-medium">Model</th>
                <th className="p-1 font-medium">Grade</th>
                <th className="p-1 font-medium">Network</th>
              </tr>
            </thead>
            <tbody>
              {dummyRows.slice(0, shownRows).map((row, i) => (
                <tr
                  key={row.imei}
                  className={`transition-all duration-500 ${i % 2 === 1 ? "bg-gray-50" : ""} ${shownRows > i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
                  style={{ animation: `fade-in 0.6s cubic-bezier(0.4,0,0.6,1)` }}
                >
                  <td className="p-1 font-mono">{row.imei}</td>
                  <td className="p-1">{row.brand}</td>
                  <td className="p-1">{row.model}</td>
                  <td className="p-1">{row.grade}</td>
                  <td className="p-1">{row.network}</td>
                </tr>
              ))}
              {/* If no rows animated in, show a min height row as placeholder */}
              {shownRows === 0 && (
                <tr><td colSpan={5} className="p-1 text-muted-foreground text-center">&nbsp;</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Subtle floating db icon */}
      <div className="absolute bottom-2 right-3 opacity-15 pointer-events-none animate-float hidden md:block">
        <Database className="w-11 h-11 text-brand-blue" aria-hidden="true" />
      </div>
    </div>
  );
}
