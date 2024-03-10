"use client"

import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { easeOut } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const formValue = { 
    name: "",
    email: "",
    message: "",}

const formData = {value: formValue}

export default function FormEmail() {
    
    const [ state, setState] = useState(formData);
    const [ touched, setTouched] = useState({});
    const [ error, setError ] = useState(null)
    const toast = useToast()

    const { value, isLoading} = state

    const onBlur = ({target}) => setTouched((prev) => ({...prev,
        [target.name]:true
    }));

    const handleChange = ({target}) => setState ((prev) => ({
        ...prev,
        value: {
            ...prev.value,
            [target.name]: target.value,
        }
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
    
        console.log('Email Request:', JSON.stringify(value));
    
        try {
            const response = await fetch("/api", {
                method: 'POST',
                body: JSON.stringify(value),
            });
    
            if (response.ok) {
                
                setState({
                    value: {
                        name: "",
                        email: "",
                        message: "",
                    },
                    isLoading: false,
                });

                setTouched({});

                setError(null);
                toast({
                    title: "Email Sent",
                    description: "Your email has been sent successfully.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                // Show error toast for non-successful responses
                throw new Error('Failed to send an email');
            }
        } catch (error) {
            console.error("Error processing request", error);
            setError("Failed to send email");
    
            // Show error toast
            toast({
                title: "Error",
                description: "Failed to send email.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }));
        }
    };

    let RightSection, FormItem = useRef() 

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const animateOnScroll = (element, { opacity, x, y }) => {
            gsap.fromTo(element, { opacity: 0, x, y }, {
                opacity: 1,
                x: 0,
                y: 0,
                stagger: 0.5,
                delay: 0.2,
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
            animateOnScroll(RightSection, { opacity: 0, x: 50 })
            animateOnScroll(FormItem, { opacity: 0, y: 50 })
        }

        const animateOnMobile = () => {
            animateOnScroll(RightSection, { opacity: 0, y: 50 })
            animateOnScroll(FormItem, { opacity: 0, y: 50 })
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches;

        isDekstop ? animateOnDekstop() : animateOnMobile()

    }, [])

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll("#form"),{
            reverse:        false,  // reverse the tilt direction
            max:            5,     // max tilt rotation (degrees)
            perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
            speed:          500,   // Speed of the enter/exit transition
            transition:     true,   // Set a transition on enter/exit.
            axis:           null,   // What axis should be disabled. Can be X or Y.
            reset:          true, 
        })
    })

    return (
        <section className="lg:w-1/3 w-full" ref={el => {RightSection = el}}>
            <div ref={el => {FormItem = el}} id="form" className="flex shadow-md shadow-black flex-col bg-white dark:bg-black md:p-6 p-3 rounded-md justify-center gap-2 items-center">
                <FormControl isRequired isInvalid={touched.name && !value.name}>
                    <FormLabel 
                    className="text-black dark:text-white"
                    fontSize='xs'>
                    Name</FormLabel>
                    <Input
                    errorBorderColor="#FF0000"
                    focusBorderColor="black"
                    backgroundColor='#D1D5DB'
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className="text-black dark:text-white bg-gray-300 dark:bg-[#1c1c1c] dark:border-none"/>
                    <FormErrorMessage color='#FF0000'>Required</FormErrorMessage>
                </FormControl>
            
                <FormControl isRequired isInvalid={touched.email && !value.email}>
                    <FormLabel 
                    className="text-black dark:text-white"
                    fontSize='xs'>
                    Email</FormLabel>
                    <Input
                    errorBorderColor="#FF0000"
                    focusBorderColor="black"
                    backgroundColor='#D1D5DB'
                    type="email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                    className="text-black dark:text-white bg-gray-300 dark:bg-[#1c1c1c] dark:border-none"/>
                    <FormErrorMessage color='#FF0000'>Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={touched.message && !value.message}>
                    <FormLabel 
                    className="text-black dark:text-white"
                    fontSize='xs'>
                    Message</FormLabel>
                        <Textarea
                        errorBorderColor="#FF0000"
                        focusBorderColor="black"
                        backgroundColor='#D1D5DB'
                        type="text"
                        rows={4}
                        name="message"
                        value={value.message}
                        onChange={handleChange}
                        onBlur={onBlur} 
                        className="text-black dark:text-white bg-gray-300 dark:bg-[#1c1c1c] dark:border-none"/>
                    <FormErrorMessage color='#FF0000'>Required</FormErrorMessage>
                </FormControl>


                <Button
                className="hover:text-black dark:text-black dark:hover:text-white bg-black hover:bg-gray-300 w-full dark:bg-white dark:hover:bg-[#1c1c1c]"
                variant='outline'
                fontSize='xs'
                textColor='white'
                isDisabled={!value.name || !value.email || !value.message}
                onClick={onSubmit}
                isLoading={isLoading}
                >
                Send
                </Button>
            </div>
        </section>
      );
}