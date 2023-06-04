import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const DrawerItem = (path: any) => {    
  return (
    <Link href={path.path}>
      <Flex className="justify-between items-center pr-[20px] pl-[20px] h-[60px] font-black font-inter">
        <Text>{path.text}</Text>
        <Icon color="#00C1B0" as={BsFillArrowRightCircleFill} />
      </Flex>
    </Link>
  );
};

export default DrawerItem;
