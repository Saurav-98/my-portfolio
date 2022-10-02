import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10  hover:opacity-100 opacity-40 cursor-pointer transition-all duration-300 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] 
        xl:h-[200px] object-cover object-center"
        src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="experience Photo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://camo.githubusercontent.com/1364570cdc57f47f2e9a3cf5ee757ea5ed4348dd0136af2e05fb4e6d35f2f423/68747470733a2f2f6b756e616c736f6c616e6b652e6769746875622e696f2f506f7274666f6c696f2f6173736574732f6a732e6a7067"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://camo.githubusercontent.com/1364570cdc57f47f2e9a3cf5ee757ea5ed4348dd0136af2e05fb4e6d35f2f423/68747470733a2f2f6b756e616c736f6c616e6b652e6769746875622e696f2f506f7274666f6c696f2f6173736574732f6a732e6a7067"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full "
            src="https://camo.githubusercontent.com/1364570cdc57f47f2e9a3cf5ee757ea5ed4348dd0136af2e05fb4e6d35f2f423/68747470733a2f2f6b756e616c736f6c616e6b652e6769746875622e696f2f506f7274666f6c696f2f6173736574732f6a732e6a7067"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full "
            src="https://camo.githubusercontent.com/1364570cdc57f47f2e9a3cf5ee757ea5ed4348dd0136af2e05fb4e6d35f2f423/68747470733a2f2f6b756e616c736f6c616e6b652e6769746875622e696f2f506f7274666f6c696f2f6173736574732f6a732e6a7067"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            obcaecati?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            obcaecati?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            obcaecati?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            obcaecati?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            obcaecati?
          </li>
        </ul>
      </div>
    </article>
  );
}
