import Head from "next/head";
import logo from "../../public/Changed_color_no_BG.png";
import headless from "../../public/headless.png";
import { Navbar, CAButton } from "../../components";
import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import style from "./index.module.css";
import perfil from "../../public/circulo_portfolio_borderless.png";
import "animate.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ismael Rojas - Home</title>
        <meta name="description" content="Full stack web developer portfolio" />
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
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        ></Script>
      </Head>
      <main>
        <Flex className="justify-center ">
          <Flex className="flex-col w-[80%] md:w-[90.7%]" h="100vh">
            <Navbar />

            <Flex
              flexDir="column"
              w="100%"
              className="leading-[31px] md:leading-[50px] font-anton font-[100] h-100% mt-[26vh] items-center  md:pt-[28px] sm:pt-22"
            >
              <Flex
                flexDir="column"
                justifyContent="space-between"
                className={`text-left text-[30px] md:text-[52px] ${style.strechText}  mb-[23vh]`}
              >
                <Flex>
                  <Text className={`text-[#f2f2f2]`}>WEB</Text>
                </Flex>
                <Flex className="justify-between">
                  <Text className="text-[#00C1B0]">DESIGNER</Text>
                  <Text className=" uppercase text-[#f2f2f2]">&</Text>
                </Flex>
                <Flex>
                  <Text className="text-[#f2f2f2]">FULL STACK</Text>
                </Flex>
                <Flex>
                  <Text className="text-[#00C1B0]">DEVELOPER</Text>
                </Flex>

              </Flex>
              <CAButton color="#D33367" />
            </Flex>
          </Flex>
        </Flex>

        <Flex
          className="justify-center items-center h-[190vh] md:h-[95vh]"
        >
          <Flex className="flex-col items-center">
            <Text className="text-[#00C1B0] text-[80px] font-anton">Designer</Text>
            <Text>Product designer specialising in UI design and design systems.</Text>
          </Flex>
          <img src={headless.src} className="h-[500px]" alt="portrait"></img>
          <Flex className="flex-col items-center">
          <Text className="text-[#00C1B0] text-[80px] font-anton">Developer</Text>
            <Text>Front end developer who writes clean, elegant and efficient code.</Text>

          </Flex>
        </Flex> 
      </main>
    </>
  );
}
