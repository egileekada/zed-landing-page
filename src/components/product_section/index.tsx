import React, { useState } from 'react'
import ProductIcon from '../icons'

interface Props { }

function ProdutSection(props: Props) {
    const { } = props

    const [active, setActive] = useState("0")
    const product_list = [
        {
            img: "g1",
            name: "Money Transfer",
            body: "Our payment infrastructure allows for easy and seamless movement of money either locally or internationally."
        },
        {
            img: "g2",
            name: "Airtime & Data ",
            body: "Provide a streamlined platform that lets customers conveniently recharge their airtime and buy internet data packages."
        },
        {
            img: "g3",
            name: "Bill Payments",
            body: "Offer a user-friendly platform for customers to conveniently settle various bills such as electricity, television, and more."
        },
        {
            img: "g4",
            name: "Account Issuing",
            body: "Allows customers to efficiently generate bank account numbers to receive payments from different financial institutions."
        },
        {
            img: "g5",
            name: "Virtual Dollar Card",
            body: "Instantly manage and distribute virtual dollar cards with our powerful modern card issuance infrastructure for customers."
        },
        {
            img: "g6",
            name: "Fx",
            body: "Businesses benefit from our FX APIs for seamless currency conversion and liquidity access at competitive rates."
        }
    ]

    return (
        <div className=' w-full grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 ' >
            {product_list?.map((item: {
                name: string,
                body: string,
                img: string
            }) => {
                return (
                    <div key={item?.name} id={item?.img+"-box"} className=' relative rounded-3xl w-full h-[226px] lg:h-[320px] justify-center px-9 lg:px-14 bg-[#F3F3F3] flex flex-col gap-4 ' >
                        {/* <div style={{ background: "linear-gradient(122deg, #EA9E9E 0.94%, rgba(234, 158, 158, 0.00) 56.22%)" }} className=' absolute w-full top-0 left-0 h-[80%] rounded-3xl ' /> */}
                        {/* {active === item?.name && ( 
                            <img src={`/images/${item?.img}.png`} alt={item?.img} className=' absolute inset-0 z-10 h-full rounded-3xl ' />
                        )} */}
                        <div className=' z-10 w-[40px] h-[40px]' >
                            <ProductIcon name={item?.name} />
                        </div>
                        <h1 className=' z-10 font-medium text-[24px] lg:text-[30px] ' >{item?.name}</h1>
                        <p className=' z-10 text-sm lg:text-[16px] ' >{item?.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProdutSection
