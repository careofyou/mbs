"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";

export default function About_1() {
  
  return (
    <motion.section
      
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <Image
          src="@/public/image002.png"
          alt="Project I worked on"
          quality={95}
          width={640}
              height={640}
          className="h-auto max-w-full w-[28.25rem] rounded-t-lg shadow-2xl"
        /> */}
        {/* <Image
              src="/public/image002.png"
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="h-auto max-w-full w-[28.25rem] rounded-t-lg shadow-2xl"
              width={640}
              height={640}
            /> */}
     
         
          <h2 className="mt-2 text-lg text-gray-700">
          Группа компаний «Медико-биологический Союз» - одна из первых частных биотехнологических компаний в России - создана в 1992 году.

Миссия группы компаний - Разработка и реализация наукоемких проектов в области биотехнологии и медицины.

Сферы деятельности: 

    Лабораторная диагностика
    Изделия медицинского назначения
    Фармацевтика
    Персонализированная и теле-медицина.

Количество сотрудников – более 150 человек.

Количество проектов в портфеле – более 20.
          </h2>
        

    
    </motion.section>
  );
}
