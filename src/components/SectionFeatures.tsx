
import React from "react";
import { FileInput, Database, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const BulkImportVisual = () => (
  <div className="relative w-[300px] h-[200px] md:w-[360px] md:h-[230px] p-4 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 shadow-md flex flex-col justify-between overflow-hidden">
    {/* CSV or Scanner Import Interface */}
    <div className="flex items-center gap-2 bg-white rounded-lg shadow p-2 w-2/3 mx-auto mb-3">
      <FileInput className="text-brand-teal w-7 h-7" aria-hidden="true" />
      <input
        disabled
        aria-label="CSV or IMEI input"
        className="bg-transparent text-sm text-muted-foreground placeholder:text-gray-400 flex-1 outline-none"
        placeholder="Scan or import IMEI/CSV..."
        style={{ minWidth: 0 }}
      />
      <Button variant="secondary" size="sm" className="ml-2 px-3 py-0.5 rounded">
        Import
      </Button>
    </div>
    {/* Search Bar */}
    <div className="flex items-center gap-2 bg-gray-50 rounded-full p-2 px-3 text-xs shadow-sm w-3/4 mx-auto mb-2">
      <Search className="text-brand-blue w-4 h-4" aria-hidden="true" />
      <span className="text-gray-600">Search IMEI, Model, Brand...</span>
    </div>
    {/* Inventory Table Preview */}
    <div className="bg-white rounded-lg shadow w-full text-xs overflow-x-auto">
      <table className="table-auto w-full min-w-[250px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-1 font-medium text-brand-blue">IMEI</th>
            <th className="p-1 font-medium text-brand-blue">Brand</th>
            <th className="p-1 font-medium text-brand-blue">Model</th>
            <th className="p-1 font-medium text-brand-blue">Grade</th>
            <th className="p-1 font-medium text-brand-blue">Network</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-1">35370...0241</td>
            <td className="p-1">Apple</td>
            <td className="p-1">iPhone 13</td>
            <td className="p-1">A</td>
            <td className="p-1">Unlocked</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-1">86832...2215</td>
            <td className="p-1">Samsung</td>
            <td className="p-1">Galaxy S21</td>
            <td className="p-1">B</td>
            <td className="p-1">T-Mobile</td>
          </tr>
          <tr>
            <td className="p-1">01452...8299</td>
            <td className="p-1">Google</td>
            <td className="p-1">Pixel 6</td>
            <td className="p-1">A</td>
            <td className="p-1">Verizon</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="absolute bottom-3 right-4 opacity-20">
      <Database className="w-12 h-12 text-brand-blue" aria-hidden="true" />
    </div>
  </div>
);

const features = [
  {
    // Block 1: Bulk Import Inventory (new content)
    title: "Import Your Phone Inventory Fast",
    desc: (
      <>
        <div>
          Upload your devices with key details like <strong>IMEI, brand, model, grade, and network</strong>.<br />
          Keep your inventory organized, searchable, and ready to track — all in one place.
        </div>
      </>
    ),
    // Custom visual component:
    icon: <BulkImportVisual />,
    alt: "CSV or scanner import interface and inventory dashboard mockup for Resellsync",
    imgClass: "", // Already styled in BulkImportVisual
  },
  {
    title: "Sync Listings Across Marketplaces",
    desc: "Automatically sync your phone listings across platforms in real time, reducing manual work and preventing overselling.",
    icon: <RefreshCw className="w-16 h-16 text-brand-blue mx-auto" aria-hidden="true" />,
    alt: "Marketplace Sync Illustration",
    imgClass: "bg-gradient-to-br from-brand-blue/10 to-brand-teal/20",
  },
  {
    title: "IMEI Tracking & Device Management",
    desc: "Stay organized with real-time IMEI tracking and full visibility of every device's status — from intake to shipment.",
    icon: <Package className="w-16 h-16 text-brand-blue mx-auto" aria-hidden="true" />,
    alt: "IMEI Tracking Mockup",
    imgClass: "bg-gradient-to-br from-brand-blue/20 to-brand-green/10",
  },
  {
    title: "Centralized Order Management",
    desc: "View and fulfill orders from all your connected marketplaces in one streamlined dashboard.",
    icon: <Inbox className="w-16 h-16 text-brand-teal mx-auto" aria-hidden="true" />,
    alt: "Order Management Illustration",
    imgClass: "bg-gradient-to-br from-brand-teal/10 to-brand-blue/10",
  },
];

const SectionFeatures = () => (
  <section className="container-section max-w-7xl mx-auto pb-12" aria-label="Resellsync features">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-heading">
      What You Can Do With Resellsync
    </h2>
    <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
      Discover how Resellsync simplifies inventory management, automates listings, and helps phone resellers grow faster by connecting every part of their sales workflow in one intuitive platform.
    </p>
    <div className="flex flex-col gap-14">
      {features.map((feat, idx) => (
        <div
          key={feat.title}
          className={`flex flex-col md:flex-row items-center md:gap-8 gap-6 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`flex-shrink-0 w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0`}
          >
            <div
              className={`rounded-2xl shadow-md ${feat.imgClass ? feat.imgClass : ""} flex flex-col items-center justify-center w-[300px] h-[200px] md:w-[360px] md:h-[230px]`}
              aria-label={feat.alt}
              role="img"
            >
              {feat.icon}
              {/* Accessibility: visually hidden span */}
              <span className="sr-only">{feat.alt}</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-muted-foreground text-base mb-1">{feat.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-16">
      <div className="text-lg font-medium mb-3">
        Ready to streamline and scale your phone reselling business?
      </div>
      <Button size="lg" className="group" aria-label="Try Resellsync Free">
        Try It Free
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </section>
);

export default SectionFeatures;
