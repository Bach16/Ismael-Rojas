import Head from "next/head";
import logo from "../../public/Icon-I.png";
import headless from "../../public/headless.png";
import { Navbar, CAButton, Footer } from "../../components";
import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import style from "./index.module.css";
import perfil from "../../public/circulo_portfolio_borderless.png";
import "animate.css";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
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
      <main className={`text-clip overflow-hidden `}>
        <Flex className={`justify-around overflow-hidden md:items-center w-[100%] md:w-[100%] h-[310px] md:h-screen ${style.bgLogo} `}>
            <div className=" hidden md:flex flex-col  h-[200px] w-[20%] items-center justify-evenly text-[#222222]" >
              <a href="https://github.com/Bach16" target="_blank" rel="noopener noreferrer">                
              <Icon as={BsGithub} boxSize={35} />
              </a>
              <a href="https://www.linkedin.com/in/ismael-rojas-villacreses-583438252/" target="_blank" rel="noopener noreferrer">                
              <Icon as={BsLinkedin} boxSize={35} />
              </a>
              <a href="https://dribbble.com/bach76" target="_blank" rel="noopener noreferrer">                
              <Icon as={BsDribbble} boxSize={35} />
              </a>
            </div>
            <div className=" grid md:flex justify-between flex-col w-[80%] md:w-[100%] h-[310px] md:h-screen ">
              <Flex className="h-[80px] w-[100%] justify-between">
              <Navbar />
              </Flex>

              <Flex className="justify-start items-center w-[100%]  leading-[47px] md:leading-[120px] font-anton font-[100] md:pb-[210px] justify-self-center">
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  className={`text-[47px] md:text-[115px]  `}
                >
                  <Flex className="justify-between ">
                    <Text className={`text-[#222] mr-[18px] `}>WEB</Text>
                    <Text className="text-[#07BEB8]">DESIGNER</Text>
                  </Flex>
                  <Flex className=" ">
                    <Text className=" uppercase mr-[18px] text-[#222]">&</Text>
                    <Text className="text-[#222]">FULL STACK</Text>
                  </Flex>
                  <Flex className="">
                    <Text className="text-[#07BEB8]">DEVELOPER</Text>
                  </Flex>
                </Flex>
{/*                 <CAButton color="#07BEB8" r={true} />
 */}              </Flex>
            </div>
        </Flex>

        <Flex className="justify-center items-center max-w-[100%] text-clip overflow-hidden h-[400px] md:h-screen">
          <Flex className="max-w-[100%] justify-center text-clip overflow-hidden items-center">
              <p className={`text-[#e4e4e4] absolute text-[150px] md:text-[688px] leading-none text-clip overflow-hidden  z-[-1] font-lobster`}>
                Hello
              </p>
            <Flex className="flex-col justify-center items-center">
              <Text className="text-[#07BEB8] font-normal antialiased tracking-wide text-[20px]">
                Hi, I’m Ismael Rojas
              </Text>
              <Text className="text-[#222] text-[35px] md:text-[60px] font-bold w-[300px] md:w-[900px] h-[110px] md:h-[125px] leading-none text-center font-inter">
                Developer specialized in modern designs
              </Text>
              <div className="mt-[30px]">
                <CAButton color="#07BEB8" r={false} />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </main>
      <Footer />
    </>
  );
}
