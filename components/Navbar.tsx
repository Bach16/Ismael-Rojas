import React from "react";
import logo from "../public/Changed_color_no_BG.png";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex className="pt-7 text-xl items-center justify-between  ">
      <Link href="/" className="w-[200px]">
        <Flex className=" justify-between items-center m-0 ">
          <img src={logo.src} className="h-9  w-9.5" alt="logo" />
          
        </Flex>
      </Link>

      <CgMenuRound
        className="md:hidden font-thin text-[#00C1B0] h-12 w-12"
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody className="text-right bg-slate-900">
            <Link href="/developer">
              <Text>Developer</Text>
            </Link>
            <Link href="/designer">
              <Text>Designer</Text>
            </Link>
            <Link href="/contact">
              <Text>Contact</Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div className="md:flex hidden justify-between mr-10 w-[315px]  text-[#00C1B0] font-[360px]">
        <Link href="/developer">
          <Text>Developer</Text>
        </Link>
        <Link href="/designer">
          <Text>Designer</Text>
        </Link>
        <Link href="/contact">
          <Text>Contact</Text>
        </Link>
      </div>
    </Flex>
  );
};

export default Navbar;
