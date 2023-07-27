import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Welcome to the Travel Planner</div>

      <Link href="/user-travel-plan">
        You can acces to a example if you Click Me
      </Link>
    </div>
  );
}
