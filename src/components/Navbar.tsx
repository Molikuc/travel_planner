import { FC } from "react";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { Command, CommandInput } from "./ui/Command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Button } from "./ui/Button";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed top-0 inset-x-0 bg-zinc-100 h-fit border-b py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link className="cursor-pointer" href="/">
          Travel Planner
        </Link>
        <Command className="relative rounded-lg border max-w-lg z-50 overflow-visible">
          <CommandInput placeholder="Type a place..." />
        </Command>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <FaUser className="text-lg" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <IoSettingsSharp className="text-lg" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <IoLogOut className="text-xl" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
