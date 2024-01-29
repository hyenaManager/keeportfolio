import BLink from "@/components/blinkBtn";
import MyProvides from "@/components/intro/myProvides";
import ProfileCard from "@/components/intro/profileCard";

export default function Page() {
  return (
    <main className="flex justify-start items-center w-[100vw] h-[100vh] flex-col gap-4">
      <ProfileCard />
      <MyProvides />
      <BLink />
    </main>
  );
}
