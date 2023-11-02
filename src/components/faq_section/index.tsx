import React, { useState } from 'react'

interface Props { }

function FAQSection(props: Props) {
    const { } = props

    const [openData, setOpenData] = useState([] as any)

    const faq_list = [
        {
            title: "What does Facility management system do?",
            body: "A facility management system streamlines estate processes, offering features for managers, owners, and residents such as: Guest management, Energy consumption, Expenses and services, Diesel monitoring, (Gas and solar), Service request, Payment management, Billing management and Notice board.",
        },
        {
            title: "Does FMS have energy and diesel management system?",
            body: "FMS has energy consumption, diesel/gas and solar management.",
        },
        {
            title: "How do I become a vendor on FMS?",
            body: <p>FMS has a bill payment feature which enables user to pay their bills directly on the platform by navigating through the following steps:<br /><br /> 1. After the estate manager/facility manger has generated a bill for a resident. <br /> 2. The resident will selects payment on the side bar. <br /> 3. Then click on the payment that they want to make and follow the prompt steps.</p>,
        },
        {
            title: "What is the cost of FMS?",
            body:  <p>FMS has a bill payment feature which enables user to pay their bills directly on the platform by navigating through the following steps:<br /><br /> 1. After the estate manager/facility manger has generated a bill for a resident. <br /> 2. The resident will selects payment on the side bar. <br /> 3. Then click on the payment that they want to make and follow the prompt steps.</p>,
        },
        {
            title: "Can I pay bills directly on FMS?",
            body:  <p>FMS has a bill payment feature which enables user to pay their bills directly on the platform by navigating through the following steps:<br /><br /> 1. After the estate manager/facility manger has generated a bill for a resident. <br /> 2. The resident will selects payment on the side bar. <br /> 3. Then click on the payment that they want to make and follow the prompt steps.</p>,
        },
        {
            title: "Does FMS have visitor management feature?",
            body:  <p>FMS has a bill payment feature which enables user to pay their bills directly on the platform by navigating through the following steps:<br /><br /> 1. After the estate manager/facility manger has generated a bill for a resident. <br /> 2. The resident will selects payment on the side bar. <br /> 3. Then click on the payment that they want to make and follow the prompt steps.</p>,
        },
        {
            title: "Can FMS manage estates expenses and track bill payment?",
            body:  <p>FMS has a bill payment feature which enables user to pay their bills directly on the platform by navigating through the following steps:<br /><br /> 1. After the estate manager/facility manger has generated a bill for a resident. <br /> 2. The resident will selects payment on the side bar. <br /> 3. Then click on the payment that they want to make and follow the prompt steps.</p>,
        },
        {
            title: "Which payment platform is integrated into FMS and is the secured?",
            body: <p>The payment platform integrated to FMS is paystack, it is safe, secured and has a very high success rate.<br />
            Paystack is directly integrated into some of Nigeria largest banks ensuring a near-100% success rates for many card transactions.</p>,
        },
    ]

    const clickHandler = (item: string) => {
        if (openData?.includes(item)) {

            const clone = [...openData]
            const index = clone.indexOf(item);
            clone.splice(index, 1);

            // const newList = selectedFiles.filter((item: any) => item !== id);
            // const clone = [...imageFiles];
            // const index = clone.indexOf(file); 
            // clone.splice(index, 1); 
            // setImageFiles(clone); 
            setOpenData(clone)
        } else {
            setOpenData([...openData, item])
        }
    }

    return (
        <div className=' py-10 w-full ' >
            <p className=' text-sm ' >Frequently Asked Question</p>
            <p className=' text-[24px] leading-[110%] lg:text-[35px] mt-2 font-medium ' >With cutting-edge fintech expertise, we drive growth and inclusion. Explore the Terrah advantage now.</p>
            <div className=' border rounded-[25px] w-full mt-8 border-[#eee] ' >
                {faq_list?.map((item: any, index: number) => {
                    return (
                        <div role='button' onClick={() => clickHandler(item?.title)} className=' font-medium pb-6 flex flex-col w-full gap-4 ' >
                            <div key={index} className={` w-full pt-6 px-4 lg:px-9 gap-9 flex items-center justify-between ${index !== 0 ? "border-t" : ""} `} >
                                <p className=' font-semibold lg:text-lg ' >{item?.title}</p>
                                <div className=' w-fit ' >
                                    <svg className={openData?.includes(item?.title) ? "rotate-180" : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="chevron-down">
                                            <path id="Vector" d="M18 15L12 9L6 15" stroke="#13150F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            {openData?.includes(item?.title) && (
                                <div className=' w-full  px-4 lg:px-9 ' >
                                    <span className=' font-normal ' >{item?.body}</span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FAQSection
