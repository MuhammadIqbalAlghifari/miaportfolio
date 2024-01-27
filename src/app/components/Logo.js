"use client"

import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {

  return (
    <Box {...props}>
        <Text  
        bgGradient="linear(to-r, #4eecda, #00da8e)" bgClip='text' className="lg:text-4xl md:text-2xl text-xl" fontWeight="bold" style={{fontFamily: 'Druk WIde'}}>
          Portfolio
        </Text>
    </Box>
  );
}