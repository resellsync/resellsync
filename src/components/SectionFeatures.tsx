
import React from "react";
import { RefreshCw, Upload, Package, Inbox, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Sync Listings Across Marketplaces",
    desc: "Automatically sync your phone listings across platforms in real time, reducing manual work and preventing overselling.",
    icon: <RefreshCw className="w-16 h-16 text-brand-blue mx-auto" aria-hidden="true" />,
    alt: "Marketplace Sync Illustration",
    imgClass: "bg-gradient-to-br from-brand-blue/10 to-brand-teal/20",
  },
  {
    title: "Bulk Import Inventory",
    desc: "Upload large batches of devices with pricing, model details, and IMEIs in seconds — no spreadsheets required.",
    icon: <Upload className="w-16 h-16 text-brand-teal mx-auto" aria-hidden="true" />,
    alt: "Bulk Import Illustration",
    imgClass: "bg-gradient-to-br from-brand-teal/10 to-brand-blue/10",
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
              className={`rounded-2xl shadow-md ${feat.imgClass} flex flex-col items-center justify-center w-[300px] h-[200px] md:w-[360px] md:h-[230px]`}
              aria-label={feat.alt}
              role="img"
            >
              {feat.icon}
              {/* Use a visually hidden span for accessibility */}
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
