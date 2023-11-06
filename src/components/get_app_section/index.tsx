import React from 'react'

interface Props { }

function GetAppSection(props: Props) {
    const { } = props

    return (
        <div className=' w-full flex lg:flex-row flex-col justify-between gap-4 lg:gap-10 py-8 lg:py-12 ' >
            <div className=' w-full flex justify-start' >
                <p className=' text-[30px] lg:text-[65px] font-semibold w-full lg:w-[70%] leading-[120%] ' >Peek into the DNA of Zed's identity</p>
            </div>
            <div className=' w-full ' >
                <p className=' text-sm lg:text-[20px] leading-[23px] lg:leading-[26px] ' >We're here to redefine business expansion and financial inclusion with our advanced platform—complete with APIs, SDKs, and white-labeled solutions. Say goodbye to traditional limitations and embrace branchless expansion.</p>
                <button className=' px-6 lg:px-6 mt-4 lg:mt-10 h-[48px] lg:h-[48px] text-white font-medium text-xs lg:text-sm bg-primary rounded-[100px] ' >
                    Get Zed App
                </button>
            </div>
        </div>
    )
}

export default GetAppSection
