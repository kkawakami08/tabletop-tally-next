import Image from "next/image";
import Link from "next/link";

import { IoIosMenu } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

import logo from "@/assets/tabletop-tally-logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-terracotta text-peach py-3  flex items-center justify-between px-5">
      <IoIosMenu className="text-4xl " />
      <Link
        href="/"
        className="flex items-center text-2xl font-medium tracking-widest gap-2  "
      >
        <Image
          src={logo}
          alt="Tabletop Tally Logo"
          className="w-8 hidden md:block"
        />
        <p className="font-crimson text-white">Tabletop Tally</p>
      </Link>
      <VscAccount className="text-2xl " />
    </nav>
  );
};

export default Navbar;
