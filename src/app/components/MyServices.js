"use client"

import ServicesData from "../libs/ServicesData";

export default function MyServices() {

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center w-full items-center md:gap-4 gap-2 py-4'>
                {ServicesData.map(({ Svg, Name, Description, index}) => (
                    <div className="group">
                        <div className="flex duration-500 flex-col md:gap-4 gap-3 backdrop-blur-md px-4 py-6 rounded-lg group-hover:bg-opacity-50 group-hover:bg-[black] text-center justify-center w-full items-center" key={index}>
                            <div dangerouslySetInnerHTML={{ __html:Svg}} className="mt-28 lg:w-14 lg:h-14 md:w-10 md:h-10 w-8 h-8 text-[#00da8e] group-hover:text-white"/>
                            <h2 className="lg:text-2xl md:text-xl text-md text-white">{Name}</h2>
                            <h2 className="lg:text-md md:text-base text-sm text-white">{Description}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}