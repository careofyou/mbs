"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Element_1 from "@/components/projects/project_1";


export default function Project() {


  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Наши разработки</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Element_1 {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
