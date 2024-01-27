"use client"

import React, { useEffect, useRef } from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import Logo from "./Logo.js";
import { easeOut } from "framer-motion";
import gsap from "gsap";
import { usePathname } from "next/navigation.js";

const NavBar = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="220px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {

  const currentRoute = usePathname();

  const linkStyle = 'hover:text-white transition duration-300 ease'; 

  const activeStyle = linkStyle + ' text-white font-bold'; 
  const nonActiveStyle = linkStyle + ' text-[#4eecda] transition duration-500';

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      style={{fontFamily: 'Futura Md'}}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem className={currentRoute === '/Home' ? activeStyle : nonActiveStyle} to="/Home">Home</MenuItem>
        <MenuItem className={currentRoute === '/Services' ? activeStyle : nonActiveStyle} to="/Services">My Sevices </MenuItem>
        <MenuItem className={currentRoute === '/Projects' ? activeStyle : nonActiveStyle} to="/Projects">My Projects </MenuItem>
        <MenuItem className={currentRoute === '/Skills' ? activeStyle : nonActiveStyle} to="/Skills">My Skills </MenuItem>
        <MenuItem className={currentRoute === '/About' ? activeStyle : nonActiveStyle} to="/About">About Me </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {

  let NavbarElement = useRef(null)

  useEffect(() => {
    gsap.from(NavbarElement, { opacity: 0, y: -90, })
    gsap.to(NavbarElement, { opacity: 1, y: 0, ease: easeOut, duration: 1 })
  }, [])

  return (
      <Flex
        ref={el => {NavbarElement = el}}
        className="bg-opacity-70 backdrop-blur"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        zIndex={2}
        pos='fixed'
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
  );
};

export default NavBar;