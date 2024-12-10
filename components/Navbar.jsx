import Image from "next/image";
import Link from "next/link";

import { IoIosMenu } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

import logo from "@/assets/tabletop-tally-logo.svg";

const Navbar = () => {
  return (
    <div className="bg-terracotta text-peach py-3 justify-between grid grid-cols-6 justify-items-center place-items-center ">
      <IoIosMenu className="text-4xl" />
      <div className="flex items-center text-2xl font-medium tracking-widest gap-2 col-span-4">
        <Image src={logo} alt="Tabletop Tally Logo" className="w-8 hidden" />
        <p className="font-crimson text-white">Tabletop Tally</p>
      </div>
      <VscAccount className="text-2xl " />
    </div>
  );
};

export default Navbar;
