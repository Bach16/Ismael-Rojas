import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  link: string;
  img: string;
  year: string;
  name: string;
  description: string;
  clas?:any;
}

const ProjectCard: FC<Props> = ({ link, img, year, name, description,clas}) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Flex
        bgImage={img}
        className={`transition text-left whitespace-pre justify-center pl-[7%] text-[#fff] leading-none flex-col w-[100%] h-[140px]  md:h-[320px] bg-cover md:bg-cover bg-no-repeat bg-center hover:bg-[#00000040] cursor-pointer bg-[#00000066] duration-300 bg-blend-multiply ${clas}`}
      >
        <Text className="text-[15px] md:text-[19px] font-light">{year}</Text>
        <Text className="text-[35px] md:text-[55px] font-extrabold mb-[5px]">
          {name}
        </Text>
        <Text className="text-[15px] md:text-[20px] font-light">
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default ProjectCard;
