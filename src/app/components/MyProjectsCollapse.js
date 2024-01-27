"use client"

import { ProjectsData } from "../libs/ProjectsData";
import Link from "next/link";
import { Button, Collapse } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { easeOut } from "framer-motion";

export default function CollapseProjects() {

    const [show, setShow] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleToggle = () => {
        setShow(!show);
        setHasAnimated(true);
    };

    let projectsContainerRef = useRef(null);

    useEffect(() => {
        if (!hasAnimated) {
        gsap.fromTo(
            projectsContainerRef.current.children,
            {
            opacity: 0,
            y: 1280,
            },
            {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: .2,
            ease: easeOut,
            }
        );
        setHasAnimated(true);
        }
    }, [hasAnimated]);

    return (
        <>
            <Collapse animateHeight startingHeight={280} in={show}>
                <div ref={projectsContainerRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:gap-4 gap-2 py-4 '>
                        {ProjectsData.map(({ Name, Description, Image, Href, index}) => (
                            <Link href={Href} key={index}>
                                <div className="bg-transparent text-white hover:bg-[black] hover:bg-opacity-50 backdrop-blur-sm flex flex-col gap-2 justify-center items-center rounded-b-lg duration-500">
                                    <img src={Image} className="bg-cover bg-no-repeat w-full h-full"/>
                                    <div className="flex flex-col justify-center items-center gap-2 px-6 py-4 text-center">
                                        <p className="text-base">{Name}</p>
                                        <p className="text-sm">{Description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </Collapse>
            <Button size='sm' onClick={handleToggle} my='20px'>
                Show {show ? 'Less' : 'More'}
            </Button>
        </>
    )
}