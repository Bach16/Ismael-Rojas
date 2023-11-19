import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import logo from "../../../public/Icon-I.png";
import project from "../../../public/griffin-wooldridge-5_emZ2pRapU.jpg";
import { Navbar } from "../../../components";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Ismael Rojas - Projects</title>
        <meta name="description" content="Full stack web developer projects" />
        <link rel="icon" href={logo.src} />
        <link href="https://fonts.googleapis.com" rel="preconnect"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          content="Webdesigner, &amp; Full stack developer, I help you to perpetuate your brand image and to design a website adapted to your needs."
          name="description"
        ></meta>
        <meta
          content="Webdesigner, &amp; Full stack developer, I help you to perpetuate your brand image and to design a website adapted to your needs."
          property="og:description"
        ></meta>
        <meta property="og:type" content="website"></meta>
      </Head>

      <main>
        <Flex className="justify-center overflow-hidden">
          <Flex className="flex-col w-[80%] md:w-[90.7%] h-[67vh] md:h-[86vh]">

            <Flex className="min-h-[80px] w-[100%] justify-between md:justify-center ">
              <Navbar />
              </Flex>
            <Flex className="justify-center items-center h-[45%] md:h-[65%]">
              <Text className="text-[#222]  text-[82px] md:text-[130px] font-lobster">
                Projects
              </Text>
            </Flex>
          </Flex>
        </Flex>
        
      </main>
    </>
  );
};

export default Projects;
