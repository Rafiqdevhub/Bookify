import React from "react";
import BookCard from "@/components/BookCard";
import Search from "@/components/Search";
import { getAllBooks } from "@/lib/actions/book.actions";

type DocumentItem = {
  _id: string;
  title: string;
  author: string;
  coverURL: string;
  slug: string;
};

interface DocumentsSectionProps {
  query?: string;
}

const DocumentsSection = async ({ query }: DocumentsSectionProps) => {
  // Intentionally not auth-scoped: this section is public and shows all uploads.
  const bookResults = await getAllBooks(query);
  const books: DocumentItem[] = bookResults.success
    ? ((bookResults.data ?? []) as DocumentItem[])
    : [];

  return (
    <section className="documents-shell mb-10 md:mb-12">
      <div className="documents-header">
        <div className="documents-header-copy">
          <p className="documents-eyebrow">Document Library</p>
          <h2 className="documents-title">Your Knowledge Shelf</h2>
          <p className="documents-subtitle">
            Explore every uploaded document in one place, then reopen and
            continue your AI conversations instantly.
          </p>
        </div>

        <div className="documents-header-actions">
          <span className="documents-count-pill">
            {books.length} {books.length === 1 ? "document" : "documents"}
          </span>
          <Search />
        </div>
      </div>

      {books.length === 0 ? (
        <div className="library-empty-card text-center">
          <h3 className="text-xl font-serif font-semibold text-[#212a3b]">
            Your shelf is waiting for its first document
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#3d485e]">
            Upload a PDF, report, or book to start building your personal
            document library.
          </p>
        </div>
      ) : (
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
      )}
    </section>
  );
};

export default DocumentsSection;
