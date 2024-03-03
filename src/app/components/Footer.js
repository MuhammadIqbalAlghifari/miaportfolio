"use client"

import { easeOut } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Footer() {

    let Footer, TextItem = useRef()

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const animateOnScroll = (element, { opacity, x, y }) => {
            gsap.fromTo(element, { opacity: 0, x, y }, {
                opacity: 1,
                x: 0,
                y: 0,
                stagger: 0.7,
                delay: 0.2,
                duration: 1,
                ease: easeOut,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "center center"
                }
            })
        }

        const animateOnDekstop = () => {
            animateOnScroll(Footer, { opacity: 0, y: 15 })
            animateOnScroll(TextItem, { opacity: 0 })
        }

        const animateOnMobile = () => {
            animateOnScroll(Footer, { opacity: 0, y: 15 })
            animateOnScroll(TextItem, { opacity: 0 })
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches

        isDekstop ? animateOnDekstop() : animateOnMobile();

    }, [])

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            })
        }
    }, [])

    const Year = new Date().getFullYear();

    return (
        <section ref={el => {Footer = el}} className="mt-10 md:mt-16 flex justify-center items-center bg-white dark:bg-black transition md:p-10 p-8" style={{fontFamily: 'Futura Md'}}>
            <p ref={el => {TextItem = el}} className="lg:text-base md:text-sm text-xs text-black dark:text-white">© {Year} Portfolio. All Rights Reserved</p>
        </section>
    )
}