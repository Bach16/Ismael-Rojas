import React from "react";
import logo from "../public/IR-2nd-white.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

const CAButton = (color: any) => {
  return (
    <Button bgColor="#222" className="w-44 h-10 rounded-full p-2 pl-4.5 pr-4.5">
      <Flex className="justify-between items-center">
        <Image src={logo.src} className="aspect-auto mr-5 box-border h-3  w-3.5" />
        <Text color="#f2f2f2" fontSize="17px" fontWeight="645">See projects</Text>
      </Flex>
    </Button>
  );
};

export default CAButton;
