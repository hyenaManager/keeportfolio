import AsideNavbar from "@/components/navigation";
import { lusitana } from "../font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${lusitana.className} bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 flex flex-row`}
    >
      <AsideNavbar />
      {children}
    </div>
  );
}
