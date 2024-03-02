"use client"

import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {

  return (
    <Box {...props}>
        <Text  
        className="md:text-xl text-md text-black" fontWeight="bold" style={{fontFamily: 'Avant Garde'}}>
          Iqbal Alghifari
        </Text>
    </Box>
  );
}