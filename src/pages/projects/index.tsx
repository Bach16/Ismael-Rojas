import Head from "next/head";
import React from "react";
import logo from "../../../public/Changed_color_no_BG.png";
import { Navbar } from "../../../components";
import { Flex } from "@chakra-ui/react";

const projectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo.src} />
      </Head>

      <main>
        <Flex className="justify-center">
          <Flex className="flex-col" w="83%">
            <Navbar />
            <div>projectsPage</div>
          </Flex>
        </Flex>
      </main>
    </>
  );
};

export default projectsPage;
