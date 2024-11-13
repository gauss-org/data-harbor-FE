import { cn } from "@/lib";
import Welcome from "./_components/Welcome";

export default async function Home() {
  return (
    <main className={cn("h-full min-h-screen w-full bg-slate-100/10 p-4")}>
      <Welcome />
    </main>
  );
}
