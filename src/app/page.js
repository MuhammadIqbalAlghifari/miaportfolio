"use client"

import { NextUIProvider } from "@nextui-org/react";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import HomeSection from "./components/Home";
import SkillsSection from "./components/Skills";
import WorksSection from "./components/Works";
import NavBar from "./components/navbar";

export default function Landing() {
  return (
    <>
      <NextUIProvider>
        <NavBar/>
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <WorksSection/>
        <ContactSection/>
        <Footer/>
      </NextUIProvider>
    </>
  )
}
