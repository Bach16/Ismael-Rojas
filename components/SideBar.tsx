import React from "react";
import logo from "../public/logo2.png";
import { Flex, Image,Icon,Box } from "@chakra-ui/react";
import { BsGithub,BsLinkedin } from "react-icons/bs"

const SideBar = () => {
  return (
    <Flex w="7.5%" flexDir="column" minH="95vh" justifyContent="space-between" bgColor="#272727" borderRadius="0 0 50px 0" p={30}>
      <Image src={logo.src} alt="logo" boxSize={35}/>
      <Flex flexDir="column">
        <Icon as={BsGithub} color="#59BDB1" mb={20} boxSize={35}/>
        <Icon as={BsLinkedin} color="#59BDB1" mb={10} boxSize={35}/>
      </Flex>
    </Flex>
  );
};

export default SideBar;
