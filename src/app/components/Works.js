"use client"

import gsap from "gsap";
import Card from "./Card"
import { easeOut } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function WorksSection() {

    let HeroSection, LeftSection, MyWorks, TittleItem, DescItem = useRef() 

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
            animateOnScroll([LeftSection, MyWorks], { opacity: 0, x: -50 });
            animateOnScroll([TittleItem, DescItem], { opacity: 0, y: 50 });
        };

        const animateOnMobile = () => {
            animateOnScroll(HeroSection, { opacity: 0 });
            animateOnScroll(LeftSection, { opacity: 0});
            animateOnScroll(MyWorks, { opacity: 0, x: -25 });
            animateOnScroll([TittleItem, DescItem], { opacity: 0, y: 50 });
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

    return (
        <section ref={el => {HeroSection = el}} id="Works" className="max-w-7xl lg:py-24 md:py-18 py-12 lg:p-0 p-6 relative mx-auto flex flex-col gap-14 lg:gap-0 lg:flex-row lg:justify-between justify-center lg:items-start items-center" style={{ fontFamily: "Futura Md"}}>

            <div ref={el => {LeftSection = el}} className="flex justify-center gap-6 md:gap-12 items-center max-w-xl">

                <div ref={el => {MyWorks = el}} className="flex flex-col justify-center items-center gap-4">

                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            {['S', 'K', 'R', 'O', 'W'].map((letter, index) => (
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

                        <h1 ref={el => {TittleItem = el}} className="lg:text-4xl md:text-2xl text-xl font-bold text-center lg:text-start text-black dark:text-white">See My Works</h1>
                        <h2 ref={el => {DescItem = el}} className="lg:text-md md:text-base text-center lg:text-start text-sm lg:w-1/2 text-black dark:text-white">See all my works in creating a website. From user interface to functional website.</h2>

                    </div>

            </div>

                <Card/>

        </section>
    )
}