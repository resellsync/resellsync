import React from "react";
import { FileInput, Database, RefreshCw, Package, Inbox, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BulkImportAnimatedVisual from "./BulkImportAnimatedVisual";
import DashboardPreview from "./DashboardPreview";
import DashboardInsights from "./DashboardInsights";
import OrdersDashboardPreview from "./OrdersDashboardPreview";

const features = [
  {
    title: "Import Your Phone Inventory Fast",
    desc: (
      <>
        <div>
          Upload your devices with key details like <strong>IMEI, brand, model, grade, and network</strong>.
          Keep your inventory organized, searchable, and ready to track — all in one place.
        </div>
      </>
    ),
    visual: <BulkImportAnimatedVisual />,
    alt: "Animated CSV or scanner import interface and inventory dashboard mockup for Resellsync",
    imgClass: "",
  },
  {
    title: "Full Control Over Every Phone",
    desc: "Bulk update statuses, check device details, track workflows, and view everything in one dashboard. Stay organized, move faster, and never lose track of a single phone.",
    visual: <DashboardPreview />,
    alt: "Phone Control Dashboard",
    imgClass: "",
  },
  {
    title: "Sync Your Inventory Across Marketplaces",
    desc: "Resellsync keeps your stock levels updated in real time across every connected platform. Avoid double-selling, manual edits, and inventory mistakes with one reliable system.",
    visual: <OrdersDashboardPreview />,
    alt: "Orders and Sales Overview Dashboard Mockup",
    imgClass: "bg-gradient-to-br from-brand-blue/20 to-brand-green/10",
  },
  {
    title: "Grow Smarter With a Powerful Dashboard",
    desc: "View sales trends, inventory levels, and top-performing devices by day, week, or month. Our dashboard gives you the clarity to take control and scale your phone business with confidence. Know what's working, what's moving, and where to focus next.",
    visual: <DashboardInsights />,
    alt: "Dashboard and Analytics Illustration",
    imgClass: "bg-gradient-to-br from-brand-teal/10 to-brand-blue/10",
  },
];

const SectionFeatures = () => (
  <section id="features" className="container-section max-w-7xl mx-auto pb-20 bg-[#F9F9F9]" aria-label="Resellsync features">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-heading text-[#0A090C]">
      What You Can Do With Resellsync
    </h2>
    <p className="text-[#0A090C] opacity-80 text-center text-lg mb-16 max-w-2xl mx-auto">
      Discover how Resellsync simplifies inventory management, automates listings, and helps phone resellers grow faster by connecting every part of their sales workflow in one intuitive platform.
    </p>
    <div className="flex flex-col gap-32">
      {features.map((feat, idx) => (
        <div
          key={feat.title}
          className={`flex flex-col md:flex-row items-center md:items-center md:gap-20 gap-12 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 w-full min-w-0 flex items-center justify-center">
            {feat.visual}
          </div>
          <div className="flex-1 w-full min-w-0 flex items-center">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#0A090C]">{feat.title}</h3>
              <p className="text-[#0A090C] opacity-80 text-base">{feat.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="relative mt-24 rounded-2xl bg-white p-8 border border-gray-100">
      <div className="relative flex flex-col items-center gap-4">
        <div className="text-xl md:text-2xl font-semibold text-[#0A090C]">
          Ready to streamline and scale your phone reselling business?
        </div>
        <Button size="lg" className="group bg-[#0A090C] text-white border-0" asChild>
          <a href="https://tally.so/r/wggEKJ" target="_blank" rel="noopener noreferrer">
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default SectionFeatures;
