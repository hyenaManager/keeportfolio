import AsideNavbar from "@/components/lgNavigation";
import { lusitana } from "../font";
import SmSideBar from "@/components/smNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${lusitana.className} flex flex-col md:flex-row bg-[#D9A404]`}
    >
      <AsideNavbar />
      <SmSideBar />
      {children}
    </div>
  );
}
