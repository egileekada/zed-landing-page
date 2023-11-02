import Link from 'next/link'
import React from 'react'
import ProductIcon from '../icons'

interface Props { }

function Footer(props: Props) {
    const { } = props

    return (
        <div className=' w-full pb-20 pt-0 lg:pt-12 ' >
            <div className=' w-full lg:py-10 lg:border-b border-[#eee] flex justify-between px-8 items-center ' >
                <div className=' w-fit hidden lg:flex gap-8 text-sm text-primary font-medium ' >
                    {/* @ts-ignore */}
                    <img className=' w-[92px] h-[24px] lg:w-[105px] lg:h-[27px] object-cover ' src={'/images/logo.png'} alt={'logo'} />
                    <div className=' hidden lg:flex items-center gap-8 ' >
                        <Link href={""} >Identity</Link>
                        <Link href={""} >Features</Link>
                        <Link href={""} >Dollar Card</Link>
                        <Link href={""} >FAQ</Link>
                        <Link href={""} >Whispers</Link>
                    </div>
                </div>

                <div className=' w-full lg:justify-start justify-center lg:w-fit flex lg:flex-row flex-col gap-4 lg:gap-8 text-sm text-primary font-medium ' >
                    <div className=' w-full lg:justify-start justify-center lg:w-auto flex items-center lg:ml-5 gap-8 ' >
                        <Link href={""} >Privacy Policy</Link>
                        <Link href={""} >Terms of use</Link>
                        <p className=' lg:block hidden ' >
                            <Link href={""} >Follow Zed   ——</Link>
                        </p>
                    </div>
                    <div className=' w-full lg:justify-start justify-center lg:w-auto flex gap-2 ' >
                        <Link href={""}>
                            <div className=' w-6 h-6 bg-primary rounded-full flex justify-center items-center ' >
                                <ProductIcon name='facebook' />
                            </div>
                        </Link>
                        <Link href={""}>
                            <div className=' w-6 h-6 bg-primary rounded-full flex justify-center items-center ' >
                                <ProductIcon name='linkedin' />
                            </div>
                        </Link>
                        <Link href={""}>
                            <div className=' w-6 h-6 bg-primary rounded-full flex justify-center items-center ' >
                                <ProductIcon name='instagram' />
                            </div>
                        </Link>
                        <Link href={""}>
                            <div className=' w-6 h-6 bg-primary rounded-full flex justify-center items-center ' >
                                <ProductIcon name='twitter' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' pt-10 lg:text-start text-center w-full flex lg:flex-row flex-col justify-center gap-3 lg:gap-2 text-[#8B8B8B] text-xs ' >
                <p>© Pawa Systems Limited 2023 </p>
                <p className=' lg:block hidden  ' >——</p>
                <p>Zed is a financial platform, not a bank. The banking services/financial services offered on Zed are provided by CBN-licensed banks and financial institutions. </p>
            </div>
        </div>
    )
}

export default Footer
