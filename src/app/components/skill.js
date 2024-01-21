"use client"

import BackgroundPortfolio from "./backgroundPortfolio";
import { Text } from "@chakra-ui/react";
import MySkills from "./MySkills";

export default function SkillList() {

    return (
        <div className="relative">
          <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
            <BackgroundPortfolio />
    
            <section className="px-10 transition-all relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
                  <div className="flex flex-col max-w-7xl h-full mx-auto justify-center items-center py-4">
                      <div className="flex flex-col max-w-3xl items-center justify-center text-center md:gap-4 gap-3 md:pt-24 pt-20">
                          <Text
                          className="lg:text-4xl md:text-2xl text-xl"
                          bgGradient="linear(to-r, #4eecda, #00da8e)"
                          bgClip="text"
                          fontWeight='extrabold'
                          >
                          Favourite Skills
                          </Text>
                          <Text
                          className="lg:text-xl md:text-md text-sm"
                          color='white'
                          fontWeight='extrabold'
                          >
                          See fully what skills i have and perform, to develop the projects for you.
                          </Text>
                      </div>

                      <MySkills/>

                  </div>
            </section>
          </div>
        </div>
      );
}