import { FC } from "react";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { Command, CommandInput } from "./ui/command";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed top-0 inset-x-0 bg-zinc-100 h-fit border-b py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <div>Travel Planner</div>
        <Command className="relative rounded-lg border max-w-lg z-50 overflow-visible">
          <CommandInput placeholder="Type a place..." />
        </Command>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
