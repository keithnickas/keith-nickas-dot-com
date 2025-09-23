import React from "react";
import { Block } from "./block";
import {
  ContinuousIntegration,
  HeadIcon,
  Notes,
  SpeechBubbleWithCog,
  Star2Lines,
  ThumbsUp,
} from "./icons";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12">
          {/* Section header */}
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
          >
            <h2 className="h2 mb-4 feature-title text-white">Who am I?</h2>
            <p className="text-xl text-gray-400 pb-5">
              As a senior software engineer I'm focused on way to push
              efficiency, innovation, and enhance collaboration. My experience
              spans full-stack development, system modernization, and cloud
              migration, with a track record of reducing project turnaround
              time, cutting development costs, and improving code quality. I
              tend to be closely worth with stakeholders and teams to provide
              scalable deliverables to raise internal and external satisfaction.
            </p>
            <p className="text-xl text-gray-400 pb-5">
              My average day could consist of writing TDDs, develop and
              integrate new features, bug fixes, code optimizations, and lead
              mission-critical projects. Whether modernizing legacy systems,
              mentoring developers, or driving adoption of new technologies, my
              goal is the same—build solutions that last and teams that thrive.
            </p>
          </div>

          {/* Items */}
          <div
            className="py-12 md:py-20 max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <Block
              title="Libraries"
              icon={<Star2Lines invert backgroundColor="#164d37" />}
            >
              <p className="text-lg text-gray-400 text-center">
                Javascript, Typescript, React, NextJS, Node, Webpack, Babel,
                Playwright, Jest
              </p>
            </Block>

            {/* 2nd item */}
            <Block
              title="Analytical"
              icon={<HeadIcon backgroundColor="#164d37" />}
            >
              <p className="text-lg text-gray-400 text-center">
                Performance Tuning, Browser Testing & Compatibility,
                Prototyping, Proof of Concept
              </p>
            </Block>
            {/* 3rd item */}
            <Block
              title="CI/CD"
              icon={
                <ContinuousIntegration
                  backgroundColor="#164d37"
                  stroke="#fff"
                  fill="#fff"
                />
              }
            >
              <p className="text-lg text-gray-400 text-center">
                Jenkins, Codefresh, Bitbucket, Github, Gitlab, Azure Cloud,
                VMware Cloud Foundry, Applitools Visual Regression AI
              </p>
            </Block>
            {/* 4th item */}
            <Block
              title="Soft Skills & Leadership"
              icon={<Notes backgroundColor="#164d37" />}
            >
              <p className="text-lg text-gray-400 text-center">
                Agile/Scrum, Project Management, Team Leadership, Collaboration,
                and Mentorship
              </p>
            </Block>
            {/* 5th item */}
            <Block
              title="Tooling"
              icon={<ThumbsUp backgroundColor="#164d37" />}
            >
              <p className="text-lg text-gray-400 text-center">
                VS Code, Intellij, Automation Testing Strategies, Deployment
                Automation, Visual Regression, Lighthouse
              </p>
            </Block>
            {/* 6th item */}
            <Block
              title="General"
              icon={<SpeechBubbleWithCog backgroundColor="#164d37" />}
            >
              <p className="text-lg text-gray-400 text-center">
                Shell scripting, REST APIs, Customer Identity and Access
                Management (CIAM), Photoshop, Illustrator, Figma, Adobe XD
              </p>
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}
