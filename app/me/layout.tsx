import AsideNavbar from "@/components/navigation";
import { lusitana } from "../font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${lusitana.className} bg-[#292C41] flex flex-row`}>
      <AsideNavbar />
      {children}
    </div>
  );
}
