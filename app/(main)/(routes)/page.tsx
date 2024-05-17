import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-2">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
