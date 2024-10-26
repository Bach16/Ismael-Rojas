import Head from "next/head";
import logo from "../../public/Icon-I.png";
import { Navbar, CAButton, Footer, ProjectCard } from "../../components";
import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import style from "./index.module.css";
import "animate.css";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "700", "800"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ismael Rojas - Home</title>
        <meta name="facebook-domain-verification" content="7lhozap12xvwqvcui8m1d05uqsfkcc" />
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
      <main className={``}>
        <div
          className={` w-[100%] md:w-[100%] h-[310px] md:h-[920px] ${style.bgLogo} `}
        >
          <Flex
            className={`justify-around overflow-hidden md:items-center w-[100%] md:w-[100%] h-[310px] md:h-screen`}
          >
            <div className=" hidden md:flex flex-col  h-[200px] w-[20%] items-center justify-evenly text-[#222222]">
              <a
                href="https://dribbble.com/bach76"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={BsDribbble} boxSize={35} />
              </a>
              <a
                href="https://github.com/Bach16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={BsGithub} boxSize={35} />
              </a>
              <a
                href="https://www.linkedin.com/in/ismael-rojas-villacreses-583438252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={BsLinkedin} boxSize={35} />
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
                  <Text
                    className={`text-[#222] flex justify-center items-center relative top-[0.6rem] sm:top-[2rem] text-[1.3rem] sm:text-[1.7rem] ${montserrat.className} `}
                  >
                    Ismael Rojas
                  </Text>
                  <Flex className="justify-between ">
                    <Text className={`text-[#222] mr-[18px] `}>WEB</Text>
                    <Text className="text-[#07BEB8]">DESIGNER</Text>
                  </Flex>
                  <Flex className=" ">
                    <Text className=" uppercase mr-[18px] text-[#222]">&</Text>
                    <Text className="text-[#222]">FRONT END</Text>
                  </Flex>
                  <Flex className="">
                    <Text className="text-[#07BEB8]">DEVELOPER</Text>
                  </Flex>
                </Flex>
                {/*                 <CAButton color="#07BEB8" r={true} />
                 */}{" "}
              </Flex>
            </div>
          </Flex>
        </div>
        <div className="h-[15rem] sm:h-[20rem] flex flex-col justify-center items-center">
          <h2
            className={`${montserrat.className} font-bold text-[2.5rem] sm:text-[5rem] text-[#222222]`}
          >
            Projects
          </h2>
          <div className="mt-[1rem] sm:mt-[1.5rem]">
            <CAButton />
          </div>
        </div>
        <div className="min-h-[50vh] sm:min-h-screen">
         <ProjectCard
            link="https://ngold-goldenelf.vercel.app/goldenelf"
            img="/195.png"
            year="2024"
            name="Golden Elf"
            description="NFT DAPP"
            clas={"!bg-[length:100%_auto] !sm:bg-[length:100%_auto]"}
          />          
          <ProjectCard
            link="https://dulcina.org"
            img="/bg.png"
            year="2023"
            name="Dulcina"
            description="CHOCOLATE GIFTS E-COMMERCE"
            clas={"bg-[center_bottom_150px] md:bg-[center_bottom_-25rem]"}
          />          
          <ProjectCard
            link="https://dribbble.com/bach76"
            img="/griffin-wooldridge-5_emZ2pRapU.jpg"
            year="2023"
            name="Casual Couture"
            description="CLOTING E-COMMERCE"
            clas={"bg-[center_bottom_150px] md:bg-[center_bottom_-28rem]"}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
