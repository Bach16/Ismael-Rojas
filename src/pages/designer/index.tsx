import Head from "next/head";
import React from "react";
import { Navbar } from "../../../components";
import { Flex } from "@chakra-ui/react";

const DesignerPage = () => {
  return (
    <>
      <Head>
        <title>Designer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Flex className="justify-center">
          <Flex className="flex-col" w="83%">
            <Navbar />
            <div>DesignerPage</div>
          </Flex>
        </Flex>
      </main>
    </>
  );
};

export default DesignerPage;
