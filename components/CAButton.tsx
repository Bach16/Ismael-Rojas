import React from "react";
import logo from "../public/IR-2nd-white.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const CAButton = (r: any) => {
  console.log(r.r);
  
  return (
    <Link href="/projects" className={` ${r.r == true? "md:hidden" : "md:flex" }`}>
      <Button
        border="1px solid #222"
        className="md:w-44 md:h-10 md:text-[17] w-40 h-10 text-[19px] tracking-wide antialiased rounded-full "
      >
        <Flex className="justify-between items-center">
          <Text color="#222"  fontWeight="500">
            Projects
          </Text>
        </Flex>
      </Button>
    </Link>
  );
};

export default CAButton;
