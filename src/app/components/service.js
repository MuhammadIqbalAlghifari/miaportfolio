"use client"

import MyServices from "./MyServices";
import BackgroundPortfolio from "./backgroundPortfolio";
import { Text } from "@chakra-ui/react";

export default function ServicesList() {

    return (
        <div className="relative">
          <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
            <BackgroundPortfolio />
    
            <section className="px-10 transition-all duration-500 relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
                  <div className="flex flex-col max-w-7xl h-full mx-auto justify-center items-center py-4">
                      <div className="flex flex-col max-w-3xl items-center justify-center text-center md:gap-4 gap-3 md:pt-24 pt-20">
                          <Text
                          className="lg:text-4xl md:text-2xl text-xl"
                          bgGradient="linear(to-r, #4eecda, #00da8e)"
                          bgClip="text"
                          fontWeight='extrabold'
                          >
                          My Service
                          </Text>
                          <Text
                          className="lg:text-6xl md:text-4xl text-2xl"
                          color='white'
                          fontWeight='extrabold'
                          >
                          What Do I Do
                          </Text>
                      </div>

                      <MyServices/>

                  </div>
            </section>
          </div>
        </div>
      );
}