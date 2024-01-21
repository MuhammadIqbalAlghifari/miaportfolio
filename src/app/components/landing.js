"use client"

import TypewriterComponent from "typewriter-effect";
import NameForm from './nameForm';
import { Text } from "@chakra-ui/react";
import BackgroundLanding from "./backgroundLanding";

export default function LandingPage() {

    return (
        <div className="relative">
            <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
                <BackgroundLanding />

            <section className="px-10 relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
                <div className="flex max-w-7xl mx-auto flex-col h-screen items-center justify-center text-center gap-4">
                    <Text
                    className="lg:text-6xl md:text-4xl text-2xl"
                    bgGradient="linear(to-r, #4eecda, #00da8e)"
                    bgClip="text"
                    fontWeight='extrabold'
                    >Hi! My Name Is Iqbal Alghifari
                    </Text>

                    <div className="text-white flex items-center justify-center gap-1.5 lg:text-4xl md:text-xl text-md">I'm An
                        <TypewriterComponent
                            options={{
                                strings: ['Front End Web Developer'],
                                autoStart: true,
                                loop: true,
                                cursor: "_",
                                delay: 150,
                                pauseFor: 999999999999999,
                            }}
                            />
                    </div>

                    <p className="text-white lg:text-lg md:text-base text-xs">Before you hire me on your project, insert your name below to see my portfolio.</p>
                    <NameForm/>
                </div>
            </section>
            </div>
        </div>
    );
}
