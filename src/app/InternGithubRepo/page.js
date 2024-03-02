"use client"

import { Accordion, AccordionButton, AccordionPanel, AccordionItem, Box, AccordionIcon, Tooltip } from "@chakra-ui/react"
import { easeOut } from "framer-motion"
import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function GithubRepoLinkTree() {

    let LinkTree,
    TittleItem,
    Button = useRef()

    const AccordionMapping = useRef()


    useEffect(() => {

        const animateOnScroll = (element, {opacity, x, y}) => {
            gsap.fromTo(element, {opacity: 0, x, y}, {
                opacity: 1,
                x: 0,
                y: 0,
                stagger: 0.2,
                delay: 0.5,
                duration: 0.7,
                ease: easeOut,
            })
        }

        animateOnScroll(LinkTree, {opacity: 0})
        animateOnScroll([TittleItem, (AccordionMapping.current.children)], {opacity: 0, y: 15})
        animateOnScroll(Button, {opacity: 0, y: 15})

    })

    const InternProjectList = [
        {
            nameAccordion: 'Admin Office (UI Only)',
            Description: 'This is my first intern project that i create User Interface using HTML, CSS, Bootstrap, TailwindCSS and JavaScript. This project is used for content management content on Platinum site.',
            HrefDemo: 'https://muhammadiqbalalghifari.github.io/backofficeplatinum.co.io/page-sub-domain/backoffice-home.html',
            HrefGithubRepo: 'https://github.com/MuhammadIqbalAlghifari/backofficeplatinum.co.io',
        },
        {
            nameAccordion: 'Anyer Wonderland (Only Animation)',
            Description: 'This is my first intern project that i create animation using JavaScript to make a site look beautiful',
            HrefDemo: 'https://anyerwonderland.com/',
            HrefGithubRepo: '#',
        },
        {
            nameAccordion: 'Platinum (Only Animation)',
            Description: 'This is my first intern project that i create animation using JavaScript to make a site look beautiful',
            HrefDemo: 'https://muhammadiqbalalghifari.github.io/platinum.git.io/',
            HrefGithubRepo: 'https://github.com/MuhammadIqbalAlghifari/platinum.git.io',
        },
    ]

    return (
        <body className="bg">
            <div className="flex flex-col p-10 justify-center gap-4 items-center h-screen">

                <div ref={el => {LinkTree = el}} className="bg-transparent backdrop-blur border-white border transition-all text-white shadow-md rounded-lg p-8 flex flex-col gap-6 justify-center items-center" style={{fontFamily: 'Futura Md'}}>

                    <h3 ref={el => {TittleItem = el}} className=" lg:text-5xl md:text-3xl text-xl text-center">All My Intern Demo and Github Repo Project's</h3>

                    <Accordion ref={AccordionMapping} allowToggle textColor='white'>
                        {InternProjectList.map(({nameAccordion, HrefDemo, Description, HrefGithubRepo}, index) => {
                            return (
                                <AccordionItem key={index} border='none'>
                                    <h2>
                                    <AccordionButton flex='1' justifyContent='center' alignItems='center' gap='2rem'>
                                        <Box as="span" textAlign='left'>
                                        {nameAccordion}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} flex='1' textAlign='center' flexDirection='column' justifyContent='center' alignItems='center' className="max-w-4xl">
                                        {Description}
                                        <div className="flex justify-center items-center gap-4 py-2">
                                            <Tooltip label='Demo' fontSize='sm' className="bg-black">
                                                <a href={HrefDemo} target="_blank" rel='noopener noreferrer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ">
                                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </Tooltip>
                                            <Tooltip label='Github Repo' fontSize='sm' className="bg-black">
                                                <a href={HrefGithubRepo}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                </a>
                                            </Tooltip>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>

                </div>
                
                    <a href="/" ref={el => {Button = el}} className="text-white lg:text-md md:text-base text-sm text-center font-medium p-2 hover:border-white hover:border rounded-md transition duration-500">Back To Portfolio</a>
            
            </div>
        </body>
    )
}