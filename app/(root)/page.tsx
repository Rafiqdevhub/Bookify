import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import { getAllBooks } from "@/lib/actions/book.actions";
import Search from "@/components/Search";

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

  const bookResults = await getAllBooks(query);
  const books = bookResults.success ? (bookResults.data ?? []) : [];

  return (
    <>
      <main className="wrapper container">
        <HeroSection />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#212a3b]">
            Your Documents
          </h2>
          <Search />
        </div>
        <div className="library-books-grid">
          {books.map((book) => (
            <BookCard
              key={book._id}
              title={book.title}
              author={book.author}
              coverURL={book.coverURL}
              slug={book.slug}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
