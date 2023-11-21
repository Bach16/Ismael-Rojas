import React from "react";
import logo from "../public/IR-2nd-white.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const CAButton = (r: any) => {
  console.log(r.r);

  return (
    <Link
      href="https://dribbble.com/bach76"
      target="_blank"
      rel="noopener noreferrer"
      className={` ${r.r == true ? "md:hidden" : "md:flex"}`}
    >
      <Button
        border="1px solid #222"
        className="md:w-[14rem] md:h-[2.8rem] md:text-[17] w-[12rem] h-[2.2rem] text-[16px] tracking-wide antialiased rounded-full "
      >
        <Flex className="justify-between items-center">
          <Text color="#222" fontWeight="400">
            See all projects
          </Text>
        </Flex>
      </Button>
    </Link>
  );
};

export default CAButton;
