
import { Poppins } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Poor_Story } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Yanone_Kaffeesatz } from "next/font/google";
import { Lobster } from "next/font/google";
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400"] }) as {
  className: string;
};
export const poor_story = Poor_Story({subsets:["latin"],weight:["400"]})

export const poppins = Poppins({subsets:["devanagari"],weight:["500"]})

export const bebas_neue = Bebas_Neue({subsets:["latin"],weight:["400"]})

export const lobster = Lobster({subsets:["cyrillic"],weight:["400"]})

export const yanone = Yanone_Kaffeesatz({subsets:["latin"],weight:["400"]})