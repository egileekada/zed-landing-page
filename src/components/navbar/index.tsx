import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props { }

function Navbar(props: Props) {
    const { } = props

    return (
        <div className=' w-full flex justify-center px-6 lg:px-10  ' > 
            <div className=' max-w-[1440px] w-full flex h-[100px] justify-between items-center ' >
                <div className=' w-fit flex gap-8 text-sm text-primary font-medium ' >
                    {/* @ts-ignore */}
                    <img className=' w-[92px] h-[24px] lg:w-[105px] lg:h-[27px] object-cover ' src={'/images/logo.svg'} alt={'logo'} />
                    <div className=' hidden lg:flex items-center ml-5 gap-8 ' >
                        <Link href={"#first"} >Identity</Link>
                        <Link href={"#second"} >Features</Link>
                        <Link href={"#third"} >Dollar Card</Link>
                        <Link href={"#forth"} >FAQ</Link>
                        <Link href={"#fifth"} >Whispers</Link>
                    </div>
                </div>
                <button className=' px-3 lg:px-6 h-[32px] lg:h-[48px] text-white font-medium text-xs lg:text-sm bg-primary rounded-[100px] ' >
                    Get Zed App
                </button>
            </div>
        </div>
    )
}

export default Navbar
