"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/subscriptions" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full fixed z-50 bg-(--bg-primary) shadow-sm">
      <div className="wrapper navbar-height py-4 flex items-center justify-between relative">
        {/* Logo - Left on mobile, center on desktop */}
        <Link
          href="/"
          className="flex gap-0.5 items-center z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
        >
          <Image
            src="/assets/logo.png"
            alt="Readora-AI"
            width={42}
            height={26}
          />
          <span className="logo-text">Readora-AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex w-fit gap-7.5 items-center">
          {navItems.map(({ label, href }) => {
            const isActive =
              pathName === href || (href !== "/" && pathName.startsWith(href));

            return (
              <Link
                href={href}
                key={label}
                className={cn(
                  "nav-link-base",
                  isActive ? "nav-link-active" : "text-black hover:opacity-70",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden lg:flex ml-auto gap-7.5 items-center">
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-2 text-sm font-medium text-[#212a3b] hover:opacity-70 transition-opacity"
            >
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="nav-user-link">
              <UserButton />
              {user?.firstName && (
                <Link href="/subscriptions" className="nav-user-name">
                  {user.firstName}
                </Link>
              )}
            </div>
          </SignedIn>
        </div>

        {/* Mobile Menu Button & Auth */}
        <div className="flex lg:hidden items-center gap-4 ml-auto">
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-3 py-1.5 text-sm font-medium text-[#212a3b] hover:opacity-70 transition-opacity"
            >
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-black hover:opacity-70 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-(--bg-primary) border-t border-gray-200">
          <nav className="wrapper py-4 flex flex-col gap-4">
            {navItems.map(({ label, href }) => {
              const isActive =
                pathName === href ||
                (href !== "/" && pathName.startsWith(href));

              return (
                <Link
                  href={href}
                  key={label}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "nav-link-base py-2",
                    isActive
                      ? "nav-link-active"
                      : "text-black hover:opacity-70",
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <SignedIn>
              {user?.firstName && (
                <Link
                  href="/subscriptions"
                  className="nav-user-name py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {user.firstName}
                </Link>
              )}
            </SignedIn>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
