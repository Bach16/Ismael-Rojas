import React from "react";
import logo from "../public/IR-2nd-white.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

const CAButton = (color: any) => {
  return (
    <Button bgColor="#222" className="md:w-44 md:h-10 md:text-[17] w-40 h-10 text-sm rounded-full ">
      <Flex className="justify-between items-center">
        <Image src={logo.src} className="aspect-auto mr-2 md:mr-5 box-border h-3  w-3.5" />
        <Text color="#f2f2f2"   fontWeight="645">See projects</Text>
      </Flex>
    </Button>
  );
};

export default CAButton;
