import Head from "next/head";
import { Inter } from "next/font/google";
import logo from "../../public/Changed_color_no_BG.png";
import patern from "../../public/patern.png";
import { Navbar, CAButton } from "../../components";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import style from "./index.module.css";
import perfil from "../../public/circulo_portfolio_borderless.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ismael Rojas - Home</title>
        <meta name="description" content="Full stack web developer portfolio" />
        <link rel="icon" href={logo.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <main>
        <Flex className="justify-center ">
          <Flex className="flex-col" h="100vh" w="83%">
            <Navbar />

            <Flex flexDir="column" className=" pt-20">
              

              <Flex flexDir="column" justifyContent="space-between">
                <Text
                  as="h2"
                  className={style.strokeText}
                  fontWeight="1000"
                  color="#272727"
                >
                  Full-Stack
                </Text>

                <Text
                  as="h2"
                  className={style.fillText}
                  fontWeight="800"
                  color="#272727"
                >
                  Developer
                </Text>

                <Text
                  className={`${style.Text} md:flex hidden`}
                  color="#272727"
                >
                  Passionate developer with strong commitment to innovation,
                  critical thinking
                </Text>

                <Text
                  className={`${style.Text} md:flex hidden`}
                  color="#272727"
                >
                  and lifelong learning
                </Text>

                <Text className={`${style.Text} md:hidden`} color="#272727">
                  Passionate developer with strong commitment to innovation,
                  critical thinking and lifelong learning
                </Text>

                <Flex className=" md:mt-16 mt-10">
                  <CAButton color="#222" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          className="bg-contain bg-no-repeat pt-28 md:pt-0 justify-center items-center h-[190vh] md:h-[95vh]"
          bgImage={patern.src}
          bgColor="#F2F2F2"
        >
          <Flex className="w-[67%] md:justify-between justify-center items-center md:pl-[8.5%]  md:flex-row flex-col">
            <Flex
              className=" flex-col text-center mb-10 justify-evenly items-center h-[450px] w-[250px]  md:h-[600px] md:w-[350px] rounded-3xl shadow-[1px_1px_4px_1px_rgba(0,0,0,0.2)]"
              bgColor="#f2f2f2"
            >
              <Flex className="flex-col items-center">
                <img
                  className="aspect-auto box-border mb-2 h-7 w-7 md:h-9 md:w-9"
                  src={logo.src}
                  alt="logo"
                />

                <Text className="text-xl font-extrabold font-sans ">
                  Web Designer
                </Text>
              </Flex>
              <Text className="font-inter text-3xl md:text-4xl font-extrabold">
                Your perfect design
              </Text>
              <img className="md:h-[190px] md:w-[190px]  h-[140px]  w-[140px]" src={perfil.src} alt="profile-photo" />
              <Text className=" font-inter pl-[40px] pr-[40px] text-xs md:text-lg text-[#616161]">
                Transform your vision into a stunning digital experience
              </Text>
              <CAButton color="#D33367" />
            </Flex>

            <Flex
              className="items-center h-[600px] font-inter "
              maxW="390px"
            >
              <Flex className="flex-col">
                <Heading className=" text-5xl font-bold mb-8 md:mb-10">
                  Do you need:
                </Heading>
                <ul className=" md:pl-6 md:pr-6 list-image-[url(../../public/dot-3.png)] ">
                  <li>
                    A Junior Full-stack Developer focused on technologies like
                    Next.js, React, Node.js, MySQL and Express?{" "}
                  </li>
                  <br />
                  <li>A Web designer focused on a good UI/UX design?</li>
                  <br />
                  <li>
                    A developer who focuses on high-quality, clean,
                    well-documented, and easily maintainable code?
                  </li>
                  <br />
                  <li>
                    A trustworthy, honest, and competent team member to
                    effectively complete your project on schedule and within
                    your projected budget?
                  </li>
                </ul>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex className="justify-center " m={0} h="30vh" bgColor="#222222">
          <Flex className="flex-col" h="30vh" w="83%"></Flex>
        </Flex>
      </main>
    </>
  );
}
