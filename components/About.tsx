import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col md:flex-row relative text-color md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        About Saurav
      </h3>

      <motion.img
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1600"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is a{' '}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo non
          porro in rem dolor distinctio, adipisci dolorum modi unde
          reprehenderit nisi praesentium minus ea neque officiis velit
          voluptatum? Quibusdam voluptate aspernatur similique iusto autem nulla
          dignissimos aperiam explicabo dolores facere voluptatum eligendi
          molestiae impedit laboriosam suscipit doloribus ipsum modi illo, sunt
          quas adipisci reiciendis quo culpa nisi? Rerum non itaque minus
          incidunt quo ipsum qui nihil eos sunt aliquid, deserunt iure
          asperiores nulla perferendis, et neque harum saepe nisi eaque aperiam
          laudantium optio blanditiis commodi possimus. Eum debitis delectus ad
          doloribus at sint eveniet minima dolore commodi asperiores doloremque,
          dolores non ipsam, optio provident assumenda illum a facere quas eius
          aut quod ducimus. Explicabo ducimus possimus magni amet, voluptatum
          voluptates.
        </p>
      </div>
    </motion.div>
  );
}
