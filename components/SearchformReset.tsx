"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchformReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button onClick={reset} type="reset">
      <Link href={"/"} className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchformReset;
