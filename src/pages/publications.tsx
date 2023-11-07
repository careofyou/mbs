"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Element_1 from "@/components/publications/publication_1";

export default function Publication() {


  return (
    <section id="publications" className="scroll-mt-28 mb-28">
     
      <div>
          <React.Fragment>
            <Element_1/>
          </React.Fragment>
      </div>
    </section>
  );
}
