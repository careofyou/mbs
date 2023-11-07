"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Element_1 from "@/components/contacts/contact_1";
import Element_2 from "@/components/contacts/contact_2";
export default function Contact() {


  return (
    <section id="contacts" className="scroll-mt-28 mb-28">
      
      <div>
          <React.Fragment>
            <Element_1/>
            <Element_2/>
          </React.Fragment>
      </div>
    </section>
  );
}
