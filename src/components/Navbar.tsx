import { Command, CommandInput } from "./ui/Command";
import { buttonVariants } from "./ui/Button";
import Link from "next/link";
import UserAccount from "./UserAccount";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-zinc-100 h-fit border-b py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link className="cursor-pointer" href="/">
          Travel Planner
        </Link>
        <Command className="relative rounded-lg border max-w-lg z-50 overflow-visible">
          <CommandInput placeholder="Type a place..." />
        </Command>

        <UserAccount />
      </div>
    </div>
  );
};

export default Navbar;
