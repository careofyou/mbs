"use client";

import React from "react";
import SectionHeading from "../section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { achivmentData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTheme } from "@/context/theme-context";

export default function About_3() {
 
  const { theme } = useTheme();

  return (
    <section id="ourachivment"  className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Наши достижения</SectionHeading>
      <VerticalTimeline lineColor="">
        {achivmentData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              iconStyle={{
                background:
                theme === "light" ? "white" : "rgba(0, 255, 255, 0.35)",
                fontSize: ".5rem",
              }}
            >
              <h3 className="font-semibold text-blue-400 capitalize">{item.title}</h3>
              <p className="font-normal opacity-0 !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal  text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
