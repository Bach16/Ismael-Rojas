import React from "react";
import logo from "../public/Changed_color_no_BG.png";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { CgMenuRound } from "react-icons/cg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DrawerItem from "./DrawerItem";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex className="pt-7 text-xl items-center justify-between  ">
      <Link href="/" className="w-[140px]">
        <Flex className=" justify-between items-center m-0 ">
          <img src={logo.src} className="h-9  w-9.5" alt="logo" />
        </Flex>
      </Link>

      <CgMenuRound
        className="md:hidden font-thin text-[#f2f2f2] h-12 w-12"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        isFullHeight={true}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent color="#f2f2f2" backgroundColor="#222">
          <Flex className="justify-between p-[20px]">
          <img src={logo.src} className="h-9  w-9.5" alt="logo" />

          <DrawerCloseButton />
          </Flex>
          <DrawerBody className="text-[30px]">
            
            <Divider bgColor="#00C1B0" color="#00C1B0" h="2px"/>
            <DrawerItem path="/about" text="About"/>
            <Divider bgColor="#00C1B0" color="#00C1B0" h="2px"/>
            <DrawerItem path="/projects" text="Projects"/>
            <Divider bgColor="#00C1B0" color="#00C1B0" h="2px"/>
            <DrawerItem path="/contact" text="Contact"/>
            <Divider bgColor="#00C1B0" color="#00C1B0" h="2px"/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div className="md:flex hidden antialiased justify-between mr-[10px] w-[470px] font-[10] text-[20px] text-[#f2f2f2] font-[360px]">
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
      <div className="md:flex hidden justify-between mr-[60px] w-[60px]  text-[#f2f2f2] font-[10]">
          <Text>ES</Text>
          <Text borderBottom="1px solid #00C1B0" color="#00C1B0">EN</Text>
      </div>
    </Flex>
  );
};

export default Navbar;
