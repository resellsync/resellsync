
import React, { useEffect, useState } from "react";
import { FileInput } from "lucide-react";

const dummyRows = [
  {
    imei: "353700024123456",
    brand: "Apple",
    model: "iPhone 13",
    grade: "A",
    network: "Unlocked"
  },
  {
    imei: "868322215987654",
    brand: "Samsung",
    model: "Galaxy S21",
    grade: "B",
    network: "T-Mobile"
  },
  {
    imei: "014528299123789",
    brand: "Google",
    model: "Pixel 6",
    grade: "A",
    network: "Verizon"
  }
];

export default function BulkImportAnimatedVisual() {
  const [shownRows, setShownRows] = useState(0);
  
  useEffect(() => {
    setShownRows(0);
    const timeouts: NodeJS.Timeout[] = [];
    dummyRows.forEach((row, i) => {
      const to = setTimeout(() => setShownRows(r => Math.max(r, i + 1)), 900 + i * 450);
      timeouts.push(to);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);
  
  return (
    <div className="relative w-full max-w-3xl mx-auto h-[400px] md:h-[450px] bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="relative flex items-center justify-center gap-2 w-full max-w-[260px] mx-auto p-3 mt-4 rounded-lg bg-white/80 shadow-sm border border-brand-teal/10 animate-fade-in">
        <FileInput className="w-5 h-5 text-brand-blue" />
        <div className="text-sm text-muted-foreground">
          Import Phone Inventory
        </div>
      </div>

      <div className="absolute left-1/2 top-[75px] -translate-x-1/2 z-10">
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" className="animate-bounce" aria-hidden="true">
          <path d="M15 2v16M15 18l4-4M15 18l-4-4" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative mt-auto w-full p-4">
        <div className="overflow-x-auto">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
            <div className="flex items-center text-sm">
              <span className="font-medium text-gray-700">Inventory Dashboard</span>
            </div>
            <div className="bg-gray-50 rounded-full px-3 py-1 flex items-center gap-1.5 text-xs">
              <span className="text-gray-600">Search:</span>
              <span className="text-gray-500">IMEI / Model</span>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">IMEI</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Brand</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Model</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Grade</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Network</th>
              </tr>
            </thead>
            <tbody>
              {dummyRows.slice(0, shownRows).map((row, i) => (
                <tr 
                  key={row.imei} 
                  className={`transition-all duration-500 ${i % 2 === 1 ? "bg-gray-50" : ""} ${shownRows > i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`} 
                  style={{
                    animation: `fade-in 0.6s cubic-bezier(0.4,0,0.6,1)`
                  }}
                >
                  <td className="py-3 px-4 font-mono text-sm">{row.imei}</td>
                  <td className="py-3 px-4 text-sm">{row.brand}</td>
                  <td className="py-3 px-4 text-sm">{row.model}</td>
                  <td className="py-3 px-4 text-sm">{row.grade}</td>
                  <td className="py-3 px-4 text-sm">{row.network}</td>
                </tr>
              ))}
              {shownRows === 0 && <tr><td colSpan={5} className="p-4 text-center">&nbsp;</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
