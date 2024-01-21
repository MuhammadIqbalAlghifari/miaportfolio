"use client"

import SkillsData from "../libs/SkillsData";
import { Progress } from "@chakra-ui/react";

export default function MySkills() {

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center w-full items-center md:gap-6 gap-4 py-4'>
                {SkillsData.map(({ Name, Percentage, Value, index}) => (
                    <div key={index} className="text-white flex w-full gap-2 justify-center items-center rounded-b-lg duration-500">
                        <div className="flex flex-col w-full items-center justify-center gap-2">
                            <div className="flex justify-between w-full items-center">
                                <h2 className="lg:text-lg md:text-base text-sm">{Name}</h2>
                                <h2 className="lg:text-lg md:text-base text-sm">{Percentage}</h2>
                            </div>
                            <Progress hasStripe isAnimated colorScheme='green' value={Value} className="w-full h-10"/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}