import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import NavItems from "./Navbar/NavItems";

const Footer = () => {
  return (
    <footer className="w-[100%]">
      <Flex className="antialiased w-[100%] font-[10] text-[20px] text-[#222] font-[360px] justify-center md:justify-between md:pl-[100px] md:pr-[100px] h-[100px] items-center bg-[#e4e4e4]">
        <Flex className="items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="icon mr-2"
            data-v-01118a5d=""
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
            data-v-e3cbdf83=""
          >
            <path
              fill="currentColor"
              d="M256 48a208 208 0 1 1 0 416a208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512a256 256 0 1 0 0 512zm-56.6-199.4c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
            ></path>
          </svg>
          <Text>2023 Ismael Rojas</Text>
        </Flex>
          <NavItems />
      </Flex>
    </footer>
  );
};

export default Footer;
