"use client"

import { useEffect, useRef } from "react";
import FormEmail from "./Form"
import gsap from "gsap";
import { easeOut } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function ContactSection() {

    let HeroSection, LeftSection, Contact, FirstTittleItem, SecondTittleItem, DescItem = useRef() 

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const animateOnScroll = (element, { opacity, x, y }) => {
            gsap.fromTo(element, { opacity: 0, x, y }, {
                opacity: 1,
                x: 0,
                y: 0,
                stagger: 0.2,
                delay: 0.5,
                duration: 0.7,
                ease: easeOut,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "center center"
                }
            })
        }

        const animateOnDekstop = () => {
            animateOnScroll(HeroSection, {opacity: 0})
            animateOnScroll([LeftSection, Contact], {opacity: 0, x: -50})
            animateOnScroll([FirstTittleItem, SecondTittleItem, DescItem], {opacity: 0, y: 50})
        };

        const animateOnMobile = () => {
            animateOnScroll(HeroSection, {opacity: 0})
            animateOnScroll(LeftSection, {opacity: 0})
            animateOnScroll(Contact, {opacity: 0, x: 25})
            animateOnScroll([FirstTittleItem, SecondTittleItem, DescItem], {opacity: 0, y: 50})
        };

        const isDekstop = window.matchMedia("(min-width: 768px)").matches;

        isDekstop ? animateOnDekstop() : animateOnMobile()

    }, [])

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            })
        }
    })

    return (
        <section ref={el => {HeroSection = el}} id="Contact" className="max-w-7xl lg:py-24 md:py-18 py-11 lg:p-0 p-6 relative mx-auto flex flex-col gap-14 lg:gap-0 lg:flex-row lg:justify-between justify-center lg:items-start items-center" style={{ fontFamily: "Futura Md"}}>

            <div ref={el => {LeftSection = el}} className="flex flex-row-reverse lg:flex-row gap-6 md:gap-12 justify-between w-full lg:justify-center items-center md:max-w-xl">

                <div ref={el => {Contact = el}} className="flex flex-col justify-center items-center gap-4">

                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            {[ 'T', 'C', 'A', 'T', 'N', 'O', 'C'].map((letter, index) => (
                                <p key={index} className="md:text-sm text-xs text-black h-3 dark:text-white rotate-[270deg]">{letter}</p>
                                ))}
                        </div>
                    </div>

                    <hr className="border border-black dark:border-white md:h-12 h-9"/>

                </div>

                    <div className="flex flex-col w-full justify-center lg:items-start items-center">

                        <h1 ref={el => {FirstTittleItem = el}} className="lg:text-4xl md:text-2xl text-xl font-bold text-center lg:text-start text-black dark:text-white">You Have Any Project?</h1>
                        <h1 ref={el => {SecondTittleItem = el}} className="lg:text-4xl md:text-2xl text-xl font-bold text-center lg:text-start text-black dark:text-white">Please drop a message</h1>
                        <h2 ref={el => {DescItem = el}} className="lg:text-md md:text-base text-center lg:text-start text-sm text-black dark:text-white">Contact me by filling the form to hire me on your project</h2>

                    </div>

            </div>

            <FormEmail/>

        </section>
    )
}
