import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed top-0 inset-x-0 bg-zinc-100 h-fit border-b py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <div>ICON</div>
        <div>SEARCHBAR</div>
        <div>SESSION</div>
      </div>
    </div>
  );
};

export default Navbar;
