"use client"

import { easeOut } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function InternArticlePage() {

    const [isOpen, setOpen] = useState(false)

    let TittleText, 
    CategoryItem, 
    PublishedDate, 
    FirstParagraphTittle, 
    FirstParagraphDescription, 
    SecondParagraphDescription, 
    FirstParagraphImage, 
    SecondParagraphTittle, 
    SecondParagraphDescriptionOne, 
    SecondParagraphDescriptionTwo, 
    SecondParagraphImageFirst, 
    SecondParagraphImageSecond, 
    SecondParagraphImageThird,
    Button = useRef()


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const animateOnScroll = (element, {opacity, x, y}) => {
            gsap.fromTo(element, {opacity: 0, x, y}, {
                opacity: 1,
                x: 0,
                y: 0,
                stagger: 0.2,
                delay: 0.5,
                duration: 0.7,
                ease: easeOut,
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'center center'
                }
            })
        }

        animateOnScroll([TittleText, CategoryItem, PublishedDate], {opacity: 0})
        animateOnScroll(FirstParagraphTittle, {opacity: 0})
        animateOnScroll([FirstParagraphDescription, SecondParagraphDescription, FirstParagraphImage], {opacity: 0, y: 15})
        animateOnScroll(SecondParagraphTittle, {opacity: 0})
        animateOnScroll([SecondParagraphDescriptionOne, SecondParagraphDescriptionTwo, SecondParagraphImageFirst, SecondParagraphImageSecond, SecondParagraphImageThird], {opacity: 0, y: 15})
        animateOnScroll(Button, {opacity: 0, y: 15})

    }, [])

    return (
        <section id="gallery" className="w-full flex flex-col justify-center items-center py-2 transition duration-500">

            <div className="flex flex-col-reverse items-center justify-center gap-32 px-6 py-2 max-w-7xl mx-auto">

                <div className="flex justify-start w-full text-black dark:text-white transition duration-500 tersembunyi-hero" id="hero-landing-left">

                    <div className="flex flex-col justify-start gap-4 py-8">
                        <h3 ref={el => {TittleText = el}} className="dark:text-white transition duration-500 text-black text-center uppercase lg:text-6xl text-4xl py-8" style={{fontFamily: 'Druk Text Wide'}}>INTERNSHIP IN CORPORATE COMPANY</h3>

                        <div className="flex justify-center items-center gap-6 max-w-xl mx-auto text-center py-2" style={{fontFamily: 'Futura Hv'}}>
                            <h3 ref={el => {CategoryItem = el}} className="dark:text-white transition duration-500 px-4 py-2 bg-black text-white text-center uppercase lg:text-xl md:text-md text-sm">INTERNSHIP</h3>
                            <h3 ref={el => {PublishedDate = el}} className="dark:text-white transition duration-500 text-black text-center uppercase lg:text-xl md:text-md text-sm">Published : 26 February 2024</h3>
                        </div>


                        <h3 ref={el => {FirstParagraphTittle = el}} className="lg:text-3xl text-xl lg:text-left text-center font-bold leading-relaxed" style={{fontFamily: 'Druk Wide'}}>My First Intern Experience</h3>
                        <p ref={el => {FirstParagraphDescription = el}} className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Futura Md'}}>When i graduated from highschool, i have no idea what should i do, should i go to college? or should i work?. And i decided to attend a college in my city, Tasikmalaya. Before attending a college there is a couple month of holiday between graduated from highschool and attending college, I used my holiday to learn about Programming from a youtube channel called "Sanhika Galih", and i decided to be a programmer in the future whether to be a web developer or an app developer.</p>
                        <p ref={el => {SecondParagraphDescription = el}} className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Futura Md'}}>As the time goes by i have an old friend who worked at the corporate company, My friend asked me if i want to worked in his company as an internship for an experience and i said "PUT ME IN!!!", and i asked about his company and how he managed his money when he moved out of town because im curious about it. And this company is REALLY BIG and it makes me really nervous because i have no experience in working field and this is my first time worked in a big company. Shortly after chatting i decided to go worked for his company as intern for a month and moved out from of my town, Tasikmalaya, to the big city, Bekasi.</p>
                        <img ref={el => {FirstParagraphImage = el}} onClick={() => setOpen(true)} src="/kantor.jpeg" className="w-full h-full object-center object-cover py-4" alt="" />
                        <h3 ref={el => {SecondParagraphTittle = el}} className="lg:text-3xl text-xl lg:text-left text-center font-bold leading-relaxed" style={{fontFamily: 'Druk Wide'}}>Worked As A Front End Web Developer</h3>
                        <p ref={el => {SecondParagraphDescriptionOne = el}} className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Futura Md'}}>After i arrived in Bekasi and the next day i came to the office, i met a manager that told me about what i need to do. First he told me that i should create an admin website or a website that has user interface only using HTML, CSS, TailwindCSS, Bootstrap, and JavaScript to make a content management system for primary site called Platinum. It takes about a month to finish one project because im so nervous.</p>
                        <div ref={el => {SecondParagraphDescriptionTwo = el}} className="lg:text-base text-sm lg:text-left text-justify leading-relaxed" style={{fontFamily: 'Futura Md'}}>After the Admin Panel project is done the manager told me again to animate 2 website using JavaScript to make them look beautiful, it takes only 2 days to finish the animation and my internship on a big company is done. Its only take a month but the experience is really precious. I began my intership from 8 August 2023 to 8 September 2023. And that's my first experience worked as an intern on a corporate company. If you wanna see all my intern project <a href="/InternGithubRepo" className="font-bold hover:underline">click here</a>.</div>
                            <div className="flex md:flex-row flex-col max-w-7xl md:h-[500px] justify-center gap-6 py-4 items-center">
                                <img ref={el => {SecondParagraphImageFirst = el}} onClick={() => setOpen(true)} src="/admin office.png" className="md:w-1/5 w-full h-full object-cover object-top" alt="" />
                                <div className="flex flex-col w-full md:justify-between justify-center gap-4 h-full items-center">
                                    <img ref={el => {SecondParagraphImageSecond = el}} onClick={() => setOpen(true)} src="/anyer.png" className="w-full md:h-1/2 h-full object-cover object-top" alt="" />
                                    <img ref={el => {SecondParagraphImageThird = el}} onClick={() => setOpen(true)} src="/Platinum.png" className="w-full md:h-1/2 h-full object-cover object-top" alt="" />
                                </div>
                            </div>
                    </div>

                </div>

            </div>


            <a href="/" ref={el => {Button = el}} className="p-2 hover:border-black hover:border transition duration-500 rounded-md my-4 lg:text-base text-sm text-black" style={{fontFamily: 'Futura Md'}}>

                Back To Portfolio 

            </a>

            <Lightbox
                open={isOpen}
                close={() => setOpen(false)}
                slides={[
                {
                    src: "/kantor.jpeg",
                    alt: "kantor",
                    width: 3840,
                    height: 2560,
                },
                {
                    src: "/admin office.png",
                    alt: "admin",
                    width: 3840,
                    height: 2560,
                },
                {
                    src: "/anyer.png",
                    alt: "anyer",
                    width: 3840,
                    height: 2560,
                },
                {
                    src: "/Platinum.png",
                    alt: "anyer",
                    width: 3840,
                    height: 2560,
                },
                // ...
                ]}
            />

        </section>
    )
}