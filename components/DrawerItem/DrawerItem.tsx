import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import "animate.css";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./DrawerItem.module.css";

const DrawerItem = (path: any) => {    
  return (
    <Link href={path.path}>
      <Flex className={`asu justify-between items-center pr-[20px]  pl-[20px] h-[60px] font-bold font-inter`}>
        <Text className="animate__animated animate__fadeInLeft1 animate__delay-1s" >{path.text}</Text>
        <Icon className="animate__animated animate__fadeInLeft2 animate__delay-1s" color="#00C1B0" as={BsFillArrowRightCircleFill} />
      </Flex>
    </Link>
  );
};

export default DrawerItem;
