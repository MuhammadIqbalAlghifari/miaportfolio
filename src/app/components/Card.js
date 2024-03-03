"use client"
import { easeOut } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react"
import VanillaTilt from "vanilla-tilt"
import { Tooltip } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Card() {

    let RightSection, ProjectList = useRef() 

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const animateOnScroll = (element, { opacity, x, y }) => {
            gsap.fromTo(element, { opacity: 0, x, y }, {
                opacity: 1,
                x: 0,
                y: 0,
                ease: easeOut,
                duration: 0.7,
                stagger: 0.5,
                delay: 0.2,
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'center center'
                }
            });
        };
    
        const animateOnDesktop = () => {
            animateOnScroll(RightSection, { opacity: 0, x: 50 });
            animateOnScroll(ProjectList.current.children, { opacity: 0 });
        };

        const animateOnMobile = () => {
            animateOnScroll(RightSection, { opacity: 0});
            animateOnScroll(ProjectList.current.children, { opacity: 0 });
        };
    
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    
        isDesktop ? animateOnDesktop() : animateOnMobile();
    });

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll("#card"),{
            reverse:        false,  // reverse the tilt direction
            max:            10,     // max tilt rotation (degrees)
            perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
            speed:          500,   // Speed of the enter/exit transition
            transition:     true,   // Set a transition on enter/exit.
            axis:           null,   // What axis should be disabled. Can be X or Y.
            reset:          true, 
        })
    })

    return (

            <div ref={el => {RightSection = el}} className="w-full lg:w-[65%]">

                <div ref={ProjectList} className="flex flex-col md:flex-row justify-center md:items-start items-center gap-2">

                    <div id="card" className="shadow-md shadow-black w-full h-[380px] group transition-all duration-500 relative">

                        <img src="/Knockout Kings.png" className="absolute w-full h-full object-cover object-center -z-10"/>

                        <div className="w-full h-full group-hover:bg-black group-hover:bg-opacity-80 flex flex-col justify-center absolute inset-0">
                            <div className="opacity-0 group-hover:opacity-100 transition">
                                <div className="flex p-4 flex-col gap-2 justify-center items-center">
                                    <div className="text-md rounded-md text-white">Knockout Kings</div>
                                    <hr className="w-full bg-white"/>
                                    <div className="text-sm rounded-md text-white text-center">My first time creating a functional website that has E-commerce and payment gateway in it.</div>
                                        <div className="flex justify-center items-center gap-4">
                                            <Tooltip label='Demo' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                <a href="https://knockoutkings.vercel.app" rel="noopener noreferrer" target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </Tooltip>
                                            <Tooltip label='Github Repo' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                <a href="https://github.com/MuhammadIqbalAlghifari/knockoutkings" rel="noopener noreferrer" target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                </a>
                                            </Tooltip>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col h-full gap-2 justify-center items-center w-full">

                        <div id="card" className="shadow-md shadow-black h-[250px] w-full group transition-all duration-500 relative">

                            <img src="/manchester united.png" className="absolute object-cover object-center w-full h-full -z-10"/>

                            <div className="w-full h-full group-hover:bg-black group-hover:bg-opacity-80 flex flex-col justify-center absolute inset-0">
                                <div className="opacity-0 group-hover:opacity-100 transition">
                                    <div className="flex p-4 flex-col gap-4 justify-center items-center">
                                        <div className="text-md rounded-md text-white">Manchester United</div>
                                        <hr className="w-full bg-white"/>
                                        <div className="text-sm rounded-md text-white text-center">A Knockout Kings clone. This website is about my favourite club at english premier league, Manchester United.</div>
                                            <div className="flex justify-center items-center gap-4">
                                                <Tooltip label='Demo' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                    <a href="https://manchesterunited.vercel.app" rel="noopener noreferrer" target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </Tooltip>
                                                <Tooltip label='Github Repo' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                    <a href="https://github.com/MuhammadIqbalAlghifari/manchesterunited" rel="noopener noreferrer" target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="card" className="shadow-md shadow-black h-[200px] w-full group transition-all duration-500 relative">

                                <img src="/musikku.png" className="absolute w-full h-full object-cover object-center -z-10"/>

                                <div className="w-full h-full group-hover:bg-black group-hover:bg-opacity-80 flex flex-col justify-center absolute inset-0">
                                    <div className="opacity-0 group-hover:opacity-100 transition">
                                        <div className="flex p-4 flex-col gap-4 justify-center items-center">
                                            <div className="text-md rounded-md text-white">Musikku</div>
                                            <hr className="w-full bg-white"/>
                                            <div className="text-sm rounded-md text-white text-center">Musikku is a spotify clone but this website is under development.</div>
                                                <div className="flex justify-center items-center gap-4">
                                                    <Tooltip label='Demo' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                        <button disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip label='Github Repo' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                        <button disabled>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                            </svg>
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                        </div>

                    </div>

                    <div className="flex flex-col w-full justify-center gap-6 items-center">

                        <div id="card" className="shadow-md shadow-black w-full h-[320px] group transition-all duration-500 relative">

                            <div className="lg:flex lg:flex-col hidden justify-center h-full items-center absolute -z-10">
                                <img src="/anyer.png" className="w-full h-full object-cover object-center"/>
                                <img src="/admin.png" className="w-full h-full object-cover object-center"/>
                                <img src="/Platinum.png" className="w-full h-full object-cover object-center"/>
                            </div>

                            <img src="/admin.png" className="lg:hidden flex w-full h-full object-cover object-center"/>

                            <div className="w-full h-full group-hover:bg-black group-hover:bg-opacity-80 flex flex-col justify-center absolute inset-0">
                                <div className="opacity-0 group-hover:opacity-100 transition">
                                    <div className="flex p-4 flex-col gap-4 justify-center items-center">
                                        <div className="text-md rounded-md text-white">Intern Project's</div>
                                        <hr className="w-full bg-white"/>
                                        <div className="text-sm rounded-md text-white text-center">This is all my intern projects while im working on corporate company.</div>
                                            <div className="flex justify-center items-center gap-4">
                                                <Tooltip label='See Details' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                    <a href="/InternArticle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>

                                                    </a>
                                                </Tooltip>
                                                <Tooltip label='Github Repo LinkTree' fontSize='sm' className="bg-black dark:bg-slate-300 text-white dark:text-black">
                                                    <a href="/InternGithubRepo">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                </Tooltip>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


    )
}