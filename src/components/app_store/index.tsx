import React from 'react'

interface Props { }

function AppStore(props: Props) {
    const { } = props

    return (
        <div className=' my-11 w-full flex lg:flex-row flex-col justify-around gap-3 items-center rounded-3xl bg-[#F8F8F8] px-8 lg:px-9 pt-8 lg:pt-12 ' >
            <div className=' max-w-[470px] lg:pb-12 ' >
                <p className=' text-[20px] lg:text-[45px] lg:text-start text-center font-semibold leading-[120%] ' >Find us on your favourite App stores</p>
            </div>
            {/* @ts-ignore */}
            <img alt='a1' src='/images/a1.png' className=' lg:block hidden ' />
            <div className=' max-w-[420px] pb-8 lg:pb-12 flex flex-col gap-3 lg:gap-8 ' >
                <p className=' text-sm lg:text-[20px] font-medium lg:text-start text-center ' >You can find and explore our offerings, as well as receive updates, by searching for us in your preferred app store.</p>
                <div className=' w-full flex justify-center lg:justify-start gap-4 ' > 
                    <button className=' px-5 lg:px-6 h-[45px] lg:h-[48px] text-white font-medium text-xs lg:text-sm bg-primary rounded-[100px] ' >
                        Get Zed App
                    </button>
                    <button className=' px-5 lg:px-6 h-[45px] lg:h-[48px] text-white font-medium text-xs lg:text-sm bg-primary rounded-[100px] ' >
                        Get Zed App
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppStore
