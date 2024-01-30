
import { Poppins } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Poor_Story } from "next/font/google";
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400"] }) as {
  className: string;
};
export const poor_story = Poor_Story({subsets:["latin"],weight:["400"]})

export const poppins = Poppins({subsets:["devanagari"],weight:["500"]})