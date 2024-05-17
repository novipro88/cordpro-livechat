import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="py-2">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
