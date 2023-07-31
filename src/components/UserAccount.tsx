"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";

const UserAccount = () => {
  const [isValueTrue, setIsValueTrue] = useState(false)
 
  useEffect(() => {
    localStorage.getItem('isLogged') ? setIsValueTrue(true) : setIsValueTrue(false)
  }, [])

  const signOut = () => {
      localStorage.setItem('isLogged', JSON.stringify(false))
      setIsValueTrue(false)
  }
  
  return (
    <div>
      {isValueTrue ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
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
            <DropdownMenuItem className="gap-2 cursor-pointer" onSelect={signOut}>
              <IoLogOut className="text-xl" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      )}
    </div>
  );
};

export default UserAccount;
