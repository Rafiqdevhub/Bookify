import type { Metadata } from "next";
import { PricingTable } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Pricing & Plans - Choose Your Subscription",
  description:
    "Upgrade to unlock more documents, longer voice sessions, and advanced AI features. Choose the perfect plan for your learning needs.",
  keywords: [
    "readora pricing",
    "subscription plans",
    "premium features",
    "AI voice plans",
    "document limits",
  ],
  openGraph: {
    title: "Readora Pricing - Unlock Premium Features",
    description:
      "Choose the perfect plan for your AI-powered learning journey. More documents, longer sessions, advanced features.",
    type: "website",
  },
};

export default function SubscriptionsPage() {
  return (
    <div className="container wrapper py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl font-bold font-serif mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground max-w-2xl">
          Upgrade to unlock more documents, longer voice sessions, and advanced
          features.
        </p>
      </div>

      <div className="clerk-pricing-container">
        <PricingTable />
      </div>
    </div>
  );
}
