import React from 'react'
import ProductIcon from '../icons'

interface Props { }

function DollarCardSection(props: Props) {
    const { } = props

    const image_path = [
        {
            name: "/images/v1.svg",
            width: "48px",
            minWidth: "28px"
        },
        {
            name: "/images/v2.svg",
            width: "70px",
            minWidth: "41px"
        },
        {
            name: "/images/v3.svg",
            width: "52px",
            minWidth: "31px"
        },
        {
            name: "/images/v4.svg",
            width: "50px",
            minWidth: "40px"
        },
        {
            name: "/images/v5.svg",
            width: "84px",
            minWidth: "50px"
        },
        {
            name: "/images/v6.svg",
            width: "50px",
            minWidth: "28px"
        }
    ]

    return (
        <div className=' w-full relative bg-primary text-white rounded-[25px] lg:my-14 py-20 px-10 lg:px-16 ' >
            {/* @ts-ignore */}
            <img alt='abo' src='/images/vimage.png' className=' absolute top-0 h-[60%] lg:h-[90%] rounded-tr-[25px] right-0 ' />
            <div className=' w-full lg:w-fit grid lg:grid-cols-6 grid-cols-3 items-center gap-7 ' >
                {image_path?.map((item: any) => {
                    return (
                        <div key={item?.name} className=' w-[82px] h-[82px] lg:w-[122px] lg:h-[122px] bg-white rounded-full flex justify-center items-center ' style={{ boxShadow: "14.51139px -13.90675px 12.69747px 0px rgba(0, 0, 0, 0.25) inset", filter: "drop-shadow(0px 2.418565034866333px 78.60336303710938px rgba(0, 0, 0, 0.25))" }} >
                            <img className={` w-[60%] lg:w-[50%] `} src={item?.name} alt='image' key={item?.name} />
                        </div>
                    )
                })}
            </div>
            <div className=' w-full lg:w-[60%]  mt-12 ' >   
                <h1 className=' font-medium text-[28px] lg:text-[50px] ' >Zed Virtual Dollar Cards</h1>
                <p className=' text-sm leading-normal lg:text-[20px] mt-2  ' >Make very fast and secure payments on both local and international platforms with your Zed virtual card. Again, it's as seamless as it sound.</p>
            </div>
        </div>
    )
}

export default DollarCardSection
