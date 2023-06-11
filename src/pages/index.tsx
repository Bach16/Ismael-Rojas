import Head from "next/head";
import logo from "../../public/IR-2nd.png";
import headless from "../../public/headless.png";
import { Navbar, CAButton, Footer } from "../../components";
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
      </Head>
      <main className="text-clip overflow-hidden">
        <Flex className="justify-center overflow-hidden">
          <Flex className="flex-col w-[80%] md:w-[90.7%] h-screen md:h-screen ">
            <Navbar />

            <Flex
              flexDir="column"
              w="100%"
              className="leading-[26px] md:leading-[56px] font-anton font-[100] mt-[26vh] items-center md:pt-[28px] sm:pt-22"
            >
              <Flex
                flexDir="column"
                justifyContent="space-between"
                className={`text-left text-[26px] md:text-[56px] ${style.strechText}  mb-[23vh]`}
              >
                <Flex>
                  <Text className={`text-[#222]`}>WEB</Text>
                </Flex>
                <Flex className="justify-between">
                  <Text className="text-[#D33367]">DESIGNER</Text>
                  <Text className=" uppercase text-[#222]">&</Text>
                </Flex>
                <Flex>
                  <Text className="text-[#222]">FULL STACK</Text>
                </Flex>
                <Flex>
                  <Text className="text-[#D33367]">DEVELOPER</Text>
                </Flex>
              </Flex>
              <CAButton color="#D33367" r={true} />
            </Flex>
          </Flex>
        </Flex>

        <Flex className="justify-center items-center max-w-[100%] text-clip overflow-hidden h-[70vh] md:h-screen">
          <Flex className="max-w-[100%] justify-center text-clip overflow-hidden items-center">
              <p className={`text-[#e4e4e4] absolute text-[150px] md:text-[750px] leading-none text-clip overflow-hidden  z-[-1] font-lobster`}>
                Hello
              </p>
            <Flex className="flex-col justify-center items-center">
              <Text className="text-[#D33367] font-normal antialiased tracking-wide text-[20px]">
                Hi, I’m Ismael Rojas
              </Text>
              <Text className="text-[#222] text-[35px] md:text-[60px] font-bold w-[300px] md:w-[900px] h-[110px] md:h-[125px] leading-none text-center font-inter">
              Developer specialized in modern designs
              </Text>
              <div className="mt-[30px]">

              <CAButton color="#D33367" r={false} />
              </div>

            </Flex>
          </Flex>
        </Flex>
      </main>
      <Footer/>
    </>
  );
}
