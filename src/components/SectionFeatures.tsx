import React from "react";
import { FileInput, Database, RefreshCw, Package, Inbox, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BulkImportAnimatedVisual from "./BulkImportAnimatedVisual";
import { Card } from "./ui/card";

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
    icon: <BulkImportAnimatedVisual />,
    alt: "Animated CSV or scanner import interface and inventory dashboard mockup for Resellsync",
    imgClass: "",
  },
  {
    title: "Full Control Over Every Phone",
    desc: (
      <>
        <div className="space-y-3">
          <p>
            Bulk update statuses, check device details, track workflows, and view everything in one dashboard.
            Stay organized, move faster, and never lose track of a single phone.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            <Card className="p-2 bg-muted/50 border border-border/50">
              <div className="text-xs font-medium text-muted-foreground">Ready to Ship</div>
              <div className="text-lg font-semibold text-brand-blue">24</div>
            </Card>
            <Card className="p-2 bg-muted/50 border border-border/50">
              <div className="text-xs font-medium text-muted-foreground">In Review</div>
              <div className="text-lg font-semibold text-brand-teal">12</div>
            </Card>
            <Card className="p-2 bg-muted/50 border border-border/50">
              <div className="text-xs font-medium text-muted-foreground">Sold Today</div>
              <div className="text-lg font-semibold text-brand-green">8</div>
            </Card>
          </div>
          <div className="bg-card rounded-lg border border-border/50 p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">Recent Updates</div>
              <Button variant="outline" size="sm" className="h-7">Bulk Update</Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm p-1.5 rounded-md hover:bg-muted/50">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-brand-blue" />
                  <span>iPhone 13 Pro - A Grade</span>
                </div>
                <span className="text-xs bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full">Ready to Ship</span>
              </div>
              <div className="flex items-center justify-between text-sm p-1.5 rounded-md hover:bg-muted/50">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-brand-teal" />
                  <span>Samsung S21 - B Grade</span>
                </div>
                <span className="text-xs bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-full">In Review</span>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    icon: <Database className="w-16 h-16 text-brand-blue mx-auto" aria-hidden="true" />,
    alt: "Inventory Management Dashboard",
    imgClass: "bg-gradient-to-br from-brand-blue/10 to-brand-teal/10",
  },
  {
    title: "Sync Listings Across Marketplaces",
    desc: "Automatically sync your phone listings across platforms in real time, reducing manual work and preventing overselling.",
    icon: <RefreshCw className="w-16 h-16 text-brand-blue mx-auto" aria-hidden="true" />,
    alt: "Marketplace Sync Illustration",
    imgClass: "bg-gradient-to-br from-brand-blue/20 to-brand-teal/10",
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
          className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center md:gap-8 gap-6`}
        >
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
            <div
              className={`rounded-2xl shadow-md ${feat.imgClass ? feat.imgClass : ""} flex flex-col items-center justify-center w-[300px] h-[200px] md:w-[360px] md:h-[230px]`}
              aria-label={feat.alt}
              role="img"
            >
              {feat.icon}
              <span className="sr-only">{feat.alt}</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{feat.title}</h3>
            <div className="text-muted-foreground text-base">{feat.desc}</div>
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
