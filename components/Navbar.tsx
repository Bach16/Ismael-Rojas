import React from 'react'
import logo from "../public/IR-2nd.png"
import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Flex className='pt-7 text-xl items-center justify-between'>
        <Link href="/">
          <img src={logo.src} className='aspect-auto box-border h-9  w-9.5'/>
        </Link>
        <Flex className='text-white justify-between mr-10' fontWeight="360" w={315}>
            <Link href="/projects">
              <Text>Projects</Text>
            </Link>
            <Link href="/contact">
              <Text>Contact</Text>
            </Link>
            <Link href="/about">
              <Text>About me</Text>
            </Link>
        </Flex>
    </Flex>
  )
}

export default Navbar