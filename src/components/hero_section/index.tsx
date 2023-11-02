import React from 'react'

interface Props { }

function HeroSection(props: Props) {
    const { } = props

    return (
        <div className=' rounded-[30px] w-full bg-primary h-[380px] lg:h-[600px] px-10 lg:px-20 flex relative items-center justify-between ' >
            <div className=' max-w-[290px] lg:max-w-[440px] text-white flex flex-col gap-5 lg:gap-8 ' >
                <h1 className=' text-[40px] md:text-[70px] leading-[110%] lg:leading-[100%] font-medium ' >Premier finance app for Africans.</h1>
                <p className=' font-normal text-sm lg:text-lg leading-[140%] lg:leading-[180%] ' >Spearheading the future of finance through speed, customer happiness and rewards.</p>
                <button style={{background: "linear-gradient(81deg, #C1D643 22.69%, #F9FFD7 88.41%), #C4D94C"}} className=' w-fit rounded-[200px] h-[40px] lg:h-[48px] flex items-center px-4 lg:px-8 gap-2 lg:gap-6 text-primary text-[12px] lg:text-sm font-semibold ' >
                    Try Zed App
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_1505_16551" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1505_16551)">
                            <path d="M11 19V13H2V11H11V5L22 12L11 19ZM13 15.35L18.275 12L13 8.65V15.35Z" fill="#13150F" />
                        </g>
                    </svg>
                </button>
            </div>
            {/* @ts-ignore */}
            <img src='/images/herosection.png' alt='hero-image' className=' absolute w-[40%] lg:block hidden bottom-0 right-11 ' />
        </div>
    )
}

export default HeroSection
