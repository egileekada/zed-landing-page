import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {}

function Navbar(props: Props) {
    const {} = props

    return (
        <div className=' w-full flex h-[100px] px-6 lg:px-14 justify-between items-center ' >
            <div className=' w-fit flex gap-8 text-sm text-primary font-medium ' > 
            @ts-ignore
                <img className=' w-[92px] h-[24px] lg:w-[105px] lg:h-[27px] object-cover ' src={'/images/logo.png'} alt={'logo'} />
                <div className=' hidden lg:flex items-center ml-5 gap-8 ' >
                    <Link href={""} >Identity</Link>
                    <Link href={""} >Features</Link>
                    <Link href={""} >Dollar Card</Link>
                    <Link href={""} >FAQ</Link>
                    <Link href={""} >Whispers</Link> 
                </div>
            </div>
            <button className=' px-3 lg:px-6 h-[32px] lg:h-[48px] text-white font-medium text-xs lg:text-sm bg-primary rounded-[100px] ' >
                Get Zed App
            </button>
        </div>
    )
}

export default Navbar
