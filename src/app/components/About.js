"use client"
import { easeOut } from "framer-motion"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react"
import ChevronDownIcon from "./ChevronDownIcon"

export default function AboutSection() {

    let HeroSection, LeftSection, AboutMe, TittleItem, DescItem, RightSection, AboutItem, ButtonCv = useRef() 

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const animateOnScroll = (element, { opacity, x, y }) => {
            gsap.fromTo(element, { opacity: 0, x, y }, {
                opacity: 1,
                x: 0,
                y: 0,
                stagger: 0.2,
                delay: 0.5,
                ease: easeOut,
                duration: 0.7,
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'center center'
                }
            });
        };
    
        const animateOnDesktop = () => {
            animateOnScroll(HeroSection, { opacity: 0 });
            animateOnScroll([LeftSection, AboutMe], { opacity: 0, x: -50 });
            animateOnScroll(RightSection, { opacity: 0, x: 50 });
            animateOnScroll([TittleItem, DescItem], { opacity: 0, y: 50 });
            animateOnScroll([AboutItem, ButtonCv], { opacity: 0, y: 50 });
        };
    
        const animateOnMobile = () => {
            animateOnScroll(HeroSection, { opacity: 0 });
            animateOnScroll(LeftSection, { opacity: 0 });
            animateOnScroll(AboutMe, { opacity: 0, x: -25 });
            animateOnScroll(RightSection, { opacity: 0 });
            animateOnScroll([TittleItem, DescItem], { opacity: 0, y: 50 });
            animateOnScroll([AboutItem, ButtonCv], { opacity: 0, y: 50 });
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
        <section ref={el => {HeroSection = el}} id="About" className="max-w-7xl lg:py-24 md:py-18 py-11 lg:p-0 p-6 relative mx-auto flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between justify-center lg:items-start items-center" style={{ fontFamily: "Futura Md"}}>

            <div ref={el => {LeftSection = el}} className="flex md:justify-between justify-center lg:justify-center gap-6 lg:gap-12 items-center lg:max-w-xl w-full">

                <div ref={el => {AboutMe = el}} className="flex flex-col justify-center items-center gap-4">

                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            {['E', 'M'].map((letter, index) => (
                                <p key={index} className="md:text-sm text-xs text-black h-3 dark:text-white rotate-[270deg]">{letter}</p>
                                ))}
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            {['T', 'U', 'O', 'B', 'A'].map((letter, index) => (
                                <p key={index} className="md:text-sm text-xs text-black h-3 dark:text-white rotate-[270deg]">{letter}</p>
                                ))}
                        </div>
                    </div>

                    <hr className="border border-black dark:border-white md:h-12 h-9"/>

                </div>

                <div className="flex flex-col w-full justify-center lg:items-start items-center">

                    <h1 ref={el => {TittleItem = el}} className="lg:text-4xl md:text-2xl text-xl font-bold text-center lg:text-start text-black dark:text-white">Who Am I?</h1>
                    <h2 ref={el => {DescItem = el}} className="lg:text-md md:text-base text-center lg:text-start text-sm text-black dark:text-white">I am a front end web developer with couple years of experience and working on several projects.</h2>

                </div>

            </div>

            <div ref={el => {RightSection = el}} className="flex flex-col w-full lg:max-w-xl md:gap-4 gap-2 justify-center lg:items-start items-center">
                
                <h2 ref={el => {AboutItem = el}} className="md:text-md lg:text-base text-justify md:text-center lg:text-justify text-sm text-black dark:text-white">Hi! I'm <text className="font-extrabold">Iqbal Alghifari</text>, and I'm a web developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always curious about learning new skills, tools, and conceps in addition to working on various solo front end projects. I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.</h2>

                {/* <button ref={el => {Button = el}} id="Button" className="bg-black shadow-md shadow-black dark:bg-white md:text-base text-sm px-4 py-2 rounded-lg font-bold text-white dark:text-black">DOWNLOAD CV</button> */}

                <Menu>
                    <MenuButton bgColor='#1c1c1c' textColor='white' _hover={false} _active={false} ref={el => {ButtonCv = el}} className="bg-black shadow-md shadow-black dark:bg-[#f5f5f5] md:text-base text-xs px-4 py-2 rounded-lg font-bold text-white dark:text-black" as={Button} rightIcon={<ChevronDownIcon/>}>
                        DOWNLOAD CV
                    </MenuButton>
                    <MenuList bgColor='#1c1c1c' textColor='white' className="dark:bg-[#f5f5f5] transition-all">
                        <MenuItem bgColor='#1c1c1c' border='none' textColor='white' className="dark:bg-[#f5f5f5] dark:text-black"><a href="/CV ATS MUHAMMAD IQBAL ALGHIFARI - INDONESIA VERSION.pdf" download={true}>Indonesia Version</a></MenuItem>
                        <MenuItem bgColor='#1c1c1c' border='none' textColor='white' className="dark:bg-[#f5f5f5] dark:text-black"><a href="/CV ATS MUHAMMAD IQBAL ALGHIFARI - ENGLISH VERSION.pdf" download={true}>English Version</a></MenuItem>
                    </MenuList>
                </Menu>

            </div>

        </section>
    )
}
