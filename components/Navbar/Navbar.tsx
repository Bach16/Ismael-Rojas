import React from "react";
import logo from "../../public/IR-2nd.png";
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
import DrawerItem from "../DrawerItem/DrawerItem";
import style from "./Navbar.module.css";
import NavItems from "./NavItems";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex className=" pt-3 md:pt-7 text-xl items-center justify-between  ">
      <Link href="/" className="w-[140px]">
        <Flex className=" justify-between items-center m-0 ">
          <img src={logo.src} className="h-9  w-9.5" alt="logo" />
        </Flex>
      </Link>

      <CgMenuRound
        className="md:hidden font-thin text-[#222] h-12 w-12"
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
        <DrawerContent color="#222" backgroundColor="#f2f2f2">
          <Flex className="justify-between p-[20px]">
            <img src={logo.src} className="h-9  w-9.5" alt="logo" />

            <DrawerCloseButton />
          </Flex>
          <DrawerBody className="text-[30px]">
            <div className={style.diva} />
            <DrawerItem path="/about" text="About" />
            <div className={style.diva2} />
            <DrawerItem path="/projects" text="Projects" />
            <div className={style.diva3} />
            <DrawerItem path="/contact" text="Contact" />
            <div className={style.diva4} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <NavItems />
      <div className="md:flex hidden justify-between mr-[60px] w-[60px]  text-[#222] font-[400]">
        <Text>ES</Text>
        <Text borderBottom="1px solid #D33367" color="#D33367">
          EN
        </Text>
      </div>
    </Flex>
  );
};

export default Navbar;
