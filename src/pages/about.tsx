"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Element_1 from "@/components/about/about_1";
import Element_2 from "@/components/about/about_2";
import Element_3 from "@/components/about/about_3";

export default function About() {


  return (
    <section id="about" className="scroll-mt-28 mb-28">
      <SectionHeading>О компании</SectionHeading>
      <div>
          <React.Fragment>
            <Element_1/>
            <Element_2/>
            <Element_3/>
          </React.Fragment>
      </div>
    </section>
  );
}
