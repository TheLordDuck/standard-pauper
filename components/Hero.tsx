"use client";
import { parseUrlCards } from "@/utils/ParseUrlCards";
import { useState } from "react";

export default function Hero() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    window.open(parseUrlCards(query)); //to open new page
  };

  const buttons = [
    { label: "All Cards", color: "all", style: "all" },
    { label: "White", color: "white", style: "white" },
    { label: "Blue", color: "blue", style: "blue" },
    { label: "Black", color: "black", style: "black" },
    { label: "Red", color: "red", style: "red" },
    { label: "Green", color: "green", style: "green" },
    { label: "Multicolor", color: "multi", style: "multi" },
    { label: "Colorless", color: "colorless", style: "colorless" },
    { label: "Lands", color: "lands", style: "lands" },
  ];

  const styles: Record<string, string> = {
    all: "bg-primary-100 text-primary-800 hover:bg-black-800 hover:text-black",
    white: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    blue: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    black: "bg-slate-800 text-white hover:bg-slate-700",
    red: "bg-red-100 text-red-800 hover:bg-red-200",
    green: "bg-green-100 text-green-800 hover:bg-green-200",
    multi: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    colorless: "bg-stone-200 text-stone-800 hover:bg-stone-300",
    lands: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  };

  return (
    <section className="text-center pt-20">
      <h1 className="text-4xl font-bold text-[var(--primary-color)]">
        How to Play
      </h1>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Pauper Standard is a variation of the original standard format.
        Therefore, the following rules simply aim to define the unique
        characteristics of this format. If you’re new to standard formats
        altogether, you can find the rules for regular standard here.
      </p>

      <h2 className="mt-14 text-xl font-semibold text-[var(--primary-color)]">
        Browse Cards by Color
      </h2>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={parseUrlCards("", btn.color)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition shadow-sm hover:shadow-md ${styles[btn.style]}`}
          >
            {btn.label}
          </a>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-semibold text-[var(--primary-color)]">
        Or search if a card is legal
      </h2>

      {/* 🔍 Search */}
      <form onSubmit={handleSearch} className="mt-10 flex justify-center">
        <div className="flex w-full max-w-md rounded-full shadow-md overflow-hidden border border-[var(--primary-color)]">
          <input
            type="text"
            placeholder="Search for a card..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-5 py-2 outline-none text-sm"
          />
          <button
            type="submit"
            className="px-5 bg-[var(--primary-color)] text-white font-medium hover:bg-[var(--primary-color)] transition"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
