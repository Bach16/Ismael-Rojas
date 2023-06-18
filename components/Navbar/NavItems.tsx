import { Link, Text } from "@chakra-ui/react";
import React from "react";

const NavItems = () => {
  return (
    <div className="hidden md:flex antialiased justify-between  w-[595px] font-[400] text-[20px] text-[#222] font-[360px]">
      <Link href="/">
        <Text>Home</Text>
      </Link>
      <Link href="/projects">
        <Text>Projects</Text>
      </Link>
      <Link href="/contact">
        <Text>Contact</Text>
      </Link>
      <Link href="/about">
        <Text>About</Text>
      </Link>
    </div>
  );
};

export default NavItems;
