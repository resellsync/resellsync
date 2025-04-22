import React from "react";
import BulkImportAnimatedVisual from "./BulkImportAnimatedVisual";
import DashboardPreview from "./DashboardPreview";
import InventorySyncVisual from "./InventorySyncVisual";

const features = [
  {
    title: "Import Your Phone Inventory Fast",
    desc: (
      <div>
        Upload your devices with key details like <strong>IMEI, brand, model, grade, and network</strong>.
        Keep your inventory organized, searchable, and ready to track — all in one place.
      </div>
    ),
    visual: <BulkImportAnimatedVisual />,
    alt: "Animated CSV or scanner import interface and inventory dashboard mockup for Resellsync",
  },
  {
    title: "Full Control Over Every Phone",
    desc: "Bulk update statuses, check device details, track workflows, and view everything in one dashboard. Stay organized, move faster, and never lose track of a single phone.",
    visual: <DashboardPreview />,
    alt: "Phone Control Dashboard",
  },
  {
    title: "Sync Your Inventory Across Marketplaces",
    desc: (
      <>
        Resellsync keeps your stock levels updated in real time across every connected platform.<br />
        Avoid double-selling, manual edits, and inventory mistakes with one reliable system.
      </>
    ),
    visual: <InventorySyncVisual />,
    alt: "Marketplace Inventory Sync Mockup",
  },
  {
    title: "Centralized Order Management",
    desc: "View and fulfill orders from all your connected marketplaces in one streamlined dashboard.",
    // Keeping as icon because no dashboard/order asset provided
    icon: undefined,
    visual: (
      <div className="rounded-2xl shadow-md bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 flex flex-col items-center justify-center w-full max-w-[420px] aspect-[4/3]">
        <svg width="48" height="48" className="mx-auto text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="48" height="48" rx="8" fill="#0D94881A"/><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Z" stroke="#0D9488" strokeWidth="2" /><path d="M8 18v-6h8v6" stroke="#0D9488" strokeWidth="2" /></svg>
        <span className="sr-only">Order Management Illustration</span>
      </div>
    ),
    alt: "Order Management Illustration",
  },
];

const SectionFeatures = () => (
  <section className="container-section max-w-7xl mx-auto pb-20" aria-label="Resellsync features">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-heading">
      What You Can Do With Resellsync
    </h2>
    <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
      Discover how Resellsync simplifies inventory management, automates listings, and helps phone resellers grow faster by connecting every part of their sales workflow in one intuitive platform.
    </p>
    <div className="flex flex-col gap-32">
      {features.map((feat, idx) => (
        <div
          key={feat.title}
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} justify-center`}
        >
          {/* Visual / Table Panel */}
          <div className="flex-1 w-full min-w-0 flex items-center justify-center max-w-xl">
            {feat.visual &&
              <div
                className="w-full max-w-[420px] flex flex-col items-center justify-center aspect-[4/3]"
                aria-label={feat.alt}
                role="img"
              >
                {feat.visual}
                <span className="sr-only">{feat.alt}</span>
              </div>
            }
          </div>
          {/* Text Panel */}
          <div className="flex-1 w-full min-w-0 flex items-center justify-center max-w-xl">
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{feat.title}</h3>
              <p className="text-muted-foreground text-base">{feat.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-16">
      <div className="text-lg font-medium mb-3">
        Ready to streamline and scale your phone reselling business?
      </div>
      <button className="group bg-brand-blue text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-brand-teal transition-colors" aria-label="Try Resellsync Free">
        Try It Free
        <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" />
        </svg>
      </button>
    </div>
  </section>
);

export default SectionFeatures;
