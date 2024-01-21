"use client"

import { Button, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const formValue = { 
    name: "",
    email: "",
    subject: "",
    message: "",}

const formData = {value: formValue}

export default function ContactMe() {
    
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
                        subject: "",
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

    return (
        <>    
          <section className="px-10 py-10 transition-all duration-500 relative" style={{ fontFamily: 'Futura Hv', zIndex: 1 }}>
                <div className="flex flex-col max-w-7xl h-full mx-auto justify-center items-center py-4">
                    <div className="flex flex-col w-full items-center justify-center text-center md:gap-4 gap-3">

                        <Text
                        className="lg:text-4xl md:text-2xl text-xl"
                        bgGradient="linear(to-r, #4eecda, #00da8e)"
                        bgClip="text"
                        fontWeight='extrabold'
                        >
                        Get In Touch
                        </Text>
                        <Text
                        className="lg:text-6xl md:text-4xl text-2xl"
                        color='white'
                        fontWeight='extrabold'
                        >
                        Contact Me
                        </Text>

                        <div className="flex flex-col w-full md:gap-4 gap-2 justify-center items-center">

                            <div className="flex flex-col md:flex-row w-full justify-center lg:gap-6 md:gap-4 gap-2 items-center">
                                {error && (
                                    <Text color="red.500" mt={2}>
                                    {error}
                                    </Text>
                                )}
                                <FormControl isRequired isInvalid={touched.name && !value.name}>
                                    <FormLabel color='white'>Name</FormLabel>
                                    <Input
                                    errorBorderColor="#4eecda" 
                                    focusBorderColor="#00da8e" 
                                    type="text"
                                    name="name"
                                    value={value.name}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                    className="text-white focus:bg-black focus:bg-opacity-50 duration-500 backdrop-blur-md"/>
                                    <FormErrorMessage color='#00da8e'>Required</FormErrorMessage>
                                </FormControl>
                            
                                <FormControl isRequired isInvalid={touched.email && !value.email}>
                                    <FormLabel color='white'>Email</FormLabel>
                                    <Input
                                    errorBorderColor="#4eecda" 
                                    type="email"
                                    name="email"
                                    value={value.email}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                    focusBorderColor="#00da8e" 
                                    className="text-white focus:bg-black focus:bg-opacity-50 duration-500 backdrop-blur-md"/>
                                    <FormErrorMessage color='#00da8e'>Required</FormErrorMessage>
                                </FormControl>
                            </div>

                            <FormControl isRequired isInvalid={touched.subject && !value.subject}>
                                <FormLabel color='white '>Subject</FormLabel>
                                    <Input
                                    errorBorderColor="#4eecda" 
                                    type="text"
                                    name="subject"
                                    value={value.subject}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                    focusBorderColor="#00da8e" 
                                    className="text-white focus:bg-black focus:bg-opacity-50 duration-500 backdrop-blur-md"/>
                                <FormErrorMessage color='#00da8e'>Required</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={touched.message && !value.message}>
                                <FormLabel color='white'>Message</FormLabel>
                                    <Textarea
                                    errorBorderColor="#4eecda" 
                                    type="text"
                                    rows={4}
                                    name="message"
                                    value={value.message}
                                    onChange={handleChange}
                                    onBlur={onBlur}
                                    focusBorderColor="#00da8e" 
                                    className="text-white focus:bg-black focus:bg-opacity-50 duration-500 backdrop-blur-md"/>
                                <FormErrorMessage color='#00da8e'>Required</FormErrorMessage>
                            </FormControl>


                                <Button
                                textColor='white'
                                _hover={{borderColor: '#4eecda', backgroundColor: 'black'}}
                                borderColor='white'
                                variant='outline'
                                isDisabled={!value.name || !value.email || !value.subject || !value.message}
                                onClick={onSubmit}
                                isLoading={isLoading}
                                >
                                Submit
                                </Button>

                        </div>


                    </div>
                </div>
          </section>
        </>
      );
}