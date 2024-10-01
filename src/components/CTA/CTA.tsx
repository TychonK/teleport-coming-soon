'use client'

import { usePathname } from "next/navigation";

import data from "../../../data/data";

export default function CTA() {
    const currentRoute = usePathname()

    const {
        ctaContactsText,
        ctaHomeText
    } = data;

  return (
    <a href={currentRoute == "/contacts" ? "/" : "contacts"} className="block rounded-[30px] text-3xl bg-main font-extralight text-white my-6 mx-auto p-6">
     {currentRoute == "/contacts" ? ctaContactsText : ctaHomeText}
    </a>
  );
}
