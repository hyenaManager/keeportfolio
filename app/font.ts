
import { Poppins } from "next/font/google";
import { Lusitana } from "next/font/google";
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400"] }) as {
  className: string;
};

export const poppins = Poppins({subsets:["devanagari"],weight:["500"]})