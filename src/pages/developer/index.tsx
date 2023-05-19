import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import logo from "../../../public/Changed_color_no_BG.png";
import React from "react";
import { Navbar } from "../../../components";

const DeveloperPage = () => {
  return (
    <>
      <Head>
        <title>Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href={logo.src} />
      </Head>

      <main>
        <Flex className="justify-center">
          <Flex className="flex-col" w="83%">
            <Navbar />
            <div>DeveloperPage</div>
          </Flex>
        </Flex>
      </main>
    </>
  );
};

export default DeveloperPage;