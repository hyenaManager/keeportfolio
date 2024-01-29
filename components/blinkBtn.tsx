"use client";

import Link from "next/link";

export default function BLink() {
  return (
    <button className="fixed bottom-5 right-3">
      <Link
        href={"#header"}
        className="p-3 text-lg uppercase rounded-md bg-black text-white"
      >
        top
      </Link>
    </button>
  );
}
