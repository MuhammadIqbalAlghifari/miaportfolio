"use client"
import { Tooltip } from "@chakra-ui/react"
import { SkillsData } from "../libs/Data"
import VanillaTilt from "vanilla-tilt"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { easeOut } from "framer-motion"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

export default function ContactSection() {

    let HeroSection, LeftSection, MySkills, TittleItem, DescItem, SkillItem = useRef() 

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const animateOnScroll = (element, { opacity, x, y }) => {
            gsap.fromTo(element, { opacity: 0, x, y }, {
                opacity: 1,
                x: 0,
                y: 0,
                ease: easeOut,
                duration: 0.7,
                stagger: 0.2,
                delay: 0.5,
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'center center'
                }
            });
        };
    
        const animateOnDesktop = () => {
            animateOnScroll(HeroSection, { opacity: 0 });
            animateOnScroll([LeftSection, MySkills], { opacity: 0, x: -50 });
            animateOnScroll([TittleItem, DescItem], { opacity: 0, y: 50 });
            animateOnScroll(SkillItem.current.children, { opacity: 0 });
        };

        const animateOnMobile = () => {
            animateOnScroll(HeroSection, { opacity: 0 });
            animateOnScroll(LeftSection, { opacity: 0 });
            animateOnScroll(MySkills, { opacity: 0, x: 25 });
            animateOnScroll([TittleItem, DescItem], { opacity: 0, y: 50 });
            animateOnScroll(SkillItem.current.children, { opacity: 0, y: 15 });
        };
    
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    
        isDesktop ? animateOnDesktop() : animateOnMobile();
    }, []);

    useEffect(() => {
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill();
          });
        };
      }, []);


    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll("#skillList"),{
            reverse:        false,  // reverse the tilt direction
            max:            25,     // max tilt rotation (degrees)
            perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
            speed:          500,   // Speed of the enter/exit transition
            transition:     true,   // Set a transition on enter/exit.
            axis:           null,   // What axis should be disabled. Can be X or Y.
            reset:          true,
        })
    })

    return (
        <section ref={el => {HeroSection = el}} id="Skills" className="max-w-7xl lg:py-24 md:py-18 py-12 lg:p-0 p-6 relative mx-auto flex flex-col gap-14 lg:gap-0 lg:flex-row lg:justify-between justify-center lg:items-start items-center" style={{ fontFamily: "Futura Md"}}>

            <div ref={el => {LeftSection = el}} className="flex flex-row-reverse lg:flex-row gap-6 md:gap-12 justify-center items-center max-w-xl">

                <div ref={el => {MySkills = el}} className="flex flex-col justify-center items-center gap-4">

                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            {[ 'S', 'L', 'L', 'I', 'K', 'S'].map((letter, index) => (
                                <p key={index} className="md:text-sm text-xs text-black h-3 dark:text-white rotate-[270deg]">{letter}</p>
                                ))}
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            {['Y', 'M'].map((letter, index) => (
                                <p key={index} className="md:text-sm text-xs text-black h-3 dark:text-white rotate-[270deg]">{letter}</p>
                                ))}
                        </div>
                    </div>

                    <hr className="border border-black dark:border-white md:h-12 h-9"/>

                </div>

                <div className="flex flex-col w-full justify-center lg:items-start items-center">

                    <h1 ref={el => {TittleItem = el}} className="lg:text-4xl md:text-2xl text-xl font-bold text-center lg:text-start text-black dark:text-white">My Skills</h1>

                    <h2 ref={el => {DescItem = el}} className="lg:text-md md:text-base text-center lg:text-start text-sm text-black dark:text-white">Here are all my skills to provide the best projects resulting quality works for you.</h2>

                </div>


            </div>

            <div ref={SkillItem} className="grid grid-cols-5 lg:justify-items-end md:gap-y-8 gap-y-6 justify-items-center w-full md:w-[80%] lg:w-1/2">

                {SkillsData.map(({index, svg, name}) => (
                    <Tooltip label={name} fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                        <div key={index} id="skillList" dangerouslySetInnerHTML={{__html : svg}} className="md:w-14 md:h-14 w-8 h-8"/>
                    </Tooltip>
                ))}

            </div>

        </section>
    )
}