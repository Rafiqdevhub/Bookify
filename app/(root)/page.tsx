import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/HeroSection";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Readora",
  description:
    "Readora is an AI-powered voice companion that lets you talk with your documents. Upload PDFs, books, or research papers and ask questions naturally using your voice.",
};

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const { query } = await searchParams;

  return (
    <>
      <main className="wrapper container">
        <HeroSection />
        <DocumentsSection query={query} />
      </main>
      <Footer />
    </>
  );
};

export default Page;
