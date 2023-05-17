import React from "react";
import logo from "../public/IR-2nd-white.png";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Flex className="pt-7 text-xl items-center justify-between ">
      <Link href="/" className="w-[200px]">
      <Flex className=" justify-between items-center m-0 ">
        <img src={logo.src} className="h-9  w-9.5" alt="logo" />
      <Text className=" md:flex hidden font-medium text-2xl text-white font-inter">Ismael Rojas</Text>
      </Flex>
      </Link>

      <CgMenuRound className="md:hidden font-thin text-white h-12 w-12"  onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        isFullHeight={true}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className="text-right bg-slate-900">
            <Link href="/projects">
              <Text>Projects</Text>
            </Link>
            <Link href="/contact">
              <Text>Contact</Text>
            </Link>
            <Link href="/about">
              <Text>About me</Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div className="md:flex hidden text-white justify-between mr-10 w-[315px] font-[360px]">
        <Link href="/projects">
          <Text>Projects</Text>
        </Link>
        <Link href="/contact">
          <Text>Contact</Text>
        </Link>
        <Link href="/about">
          <Text>About me</Text>
        </Link>
      </div>
    </Flex>
  );
};

export default Navbar;
