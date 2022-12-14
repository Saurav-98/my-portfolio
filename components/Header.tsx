import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0  p-5 flex items-start justify-between  max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          scale: 0.3,
          visibility: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          visibility: 1,
        }}
        transition={{ duration: 2 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://youtube.com/sonnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/sonnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/sonnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/sonnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contactme">
        <motion.div
          initial={{
            x: 500,
            scale: 0.3,
            visibility: 0,
          }}
          animate={{
            x: 0,
            scale: 1,
            visibility: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-gray-400 text-sm">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
