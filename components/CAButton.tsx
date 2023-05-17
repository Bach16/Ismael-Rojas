import React from "react";
import logo from "../public/IR-2nd-white.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const CAButton = (color: any) => {
  return (
    <Link href="/projects">
      <Button
        bgColor={color.color}
        className=" font-['Inter'] md:w-44 md:h-10 md:text-[17] w-40 h-10 text-base rounded-full "
      >
        <Flex className="justify-between font-inter items-center">
          <Text color="#f2f2f2"  fontWeight="600">
            See projects
          </Text>
        </Flex>
      </Button>
    </Link>
  );
};

export default CAButton;
