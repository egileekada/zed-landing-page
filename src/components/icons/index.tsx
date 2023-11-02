import React from 'react'

interface Props {
    name: string,
    size?: any
}

function ProductIcon(props: Props) {
    const {
        name,
        size
    } = props

    return (
        <>
            {name === "Airtime & Data " && (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="network_wifi_1_bar">
                        <mask id="mask0_1565_25" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                            <rect id="Bounding box" width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1565_25)">
                            <path id="network_wifi_1_bar_2" d="M20 33.814L1.186 15C3.72517 12.6375 6.59641 10.7968 9.79971 9.47808C13.003 8.15936 16.4031 7.5 20 7.5C23.6026 7.5 27.0037 8.15936 30.2035 9.47808C33.4032 10.7968 36.2734 12.6375 38.814 15L20 33.814ZM14.6977 25.5908C15.4448 25.0267 16.2683 24.5851 17.1683 24.266C18.0682 23.9469 19.0121 23.7873 20 23.7873C20.9879 23.7873 21.9318 23.9469 22.8318 24.266C23.7317 24.5851 24.5552 25.0267 25.3023 25.5908L35.7308 15.1623C33.4402 13.4066 30.9781 12.0397 28.3445 11.0614C25.711 10.0831 22.9295 9.59396 20 9.59396C17.0705 9.59396 14.289 10.0831 11.6555 11.0614C9.02191 12.0397 6.55984 13.4066 4.26925 15.1623L14.6977 25.5908Z" fill="#13150F" />
                        </g>
                    </g>
                </svg>
            )}
            {name === "Money Transfer" && (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1565_5" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                        <rect width="40" height="40" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1565_5)">
                        <path d="M5.83337 32.0832V7.91675L34.5191 20L5.83337 32.0832ZM7.92733 28.8803L29.0983 20L7.92733 11.0577V17.7757L17.0106 20L7.92733 22.1795V28.8803Z" fill="#13150F" />
                    </g>
                </svg>
            )}
            {name === "Bill Payments" && (
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="receipt_long">
                        <mask id="mask0_1565_113" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect id="Bounding box" y="0.189941" width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1565_113)">
                            <path id="receipt_long_2" d="M9.63888 36.0233C8.56163 36.0233 7.64774 35.648 6.89721 34.8975C6.14669 34.147 5.77142 33.2356 5.77142 32.1634V27.893H10.9125V4.67725L13.2167 6.66441L15.553 4.67725L17.8893 6.66441L20.2257 4.67725L22.562 6.66441L24.9017 4.67725L27.2414 6.66441L29.5812 4.67725L31.9209 6.66441L34.2286 4.67725V32.1558C34.2286 33.2331 33.8533 34.147 33.1028 34.8975C32.3523 35.648 31.4384 36.0233 30.3611 36.0233H9.63888ZM30.3665 33.9293C30.8764 33.9293 31.2986 33.7621 31.633 33.4277C31.9674 33.0933 32.1346 32.6694 32.1346 32.1558V8.11733H13.0064V27.893H28.5983V32.1558C28.5983 32.6694 28.7655 33.0933 29.0999 33.4277C29.4343 33.7621 29.8565 33.9293 30.3665 33.9293ZM15.2586 14.3225V12.2285H24.7137V14.3225H15.2586ZM15.2586 19.6152V17.5212H24.7137V19.6152H15.2586ZM28.4402 14.5468C28.0962 14.5468 27.7983 14.4209 27.5465 14.1692C27.2947 13.9174 27.1688 13.6195 27.1688 13.2755C27.1688 12.9315 27.2947 12.6336 27.5465 12.3818C27.7983 12.13 28.0962 12.0041 28.4402 12.0041C28.7842 12.0041 29.0821 12.13 29.3338 12.3818C29.5856 12.6336 29.7115 12.9315 29.7115 13.2755C29.7115 13.6195 29.5856 13.9174 29.3338 14.1692C29.0821 14.4209 28.7842 14.5468 28.4402 14.5468ZM28.4402 19.7327C28.0962 19.7327 27.7983 19.6068 27.5465 19.355C27.2947 19.1033 27.1688 18.8054 27.1688 18.4614C27.1688 18.1173 27.2947 17.8194 27.5465 17.5677C27.7983 17.3159 28.0962 17.19 28.4402 17.19C28.7842 17.19 29.0821 17.3159 29.3338 17.5677C29.5856 17.8194 29.7115 18.1173 29.7115 18.4614C29.7115 18.8054 29.5856 19.1033 29.3338 19.355C29.0821 19.6068 28.7842 19.7327 28.4402 19.7327ZM9.61417 33.9293H26.5043V29.987H7.86538V32.1558C7.86538 32.6694 8.03398 33.0933 8.37117 33.4277C8.70834 33.7621 9.12267 33.9293 9.61417 33.9293Z" fill="#13150F" />
                        </g>
                    </g>
                </svg>
            )}
            {name === "Account Issuing" && (
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="account_balance">
                        <mask id="mask0_1565_91" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect id="Bounding box" y="0.189941" width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1565_91)">
                            <path id="account_balance_2" d="M9.83128 29.3181V15.6172H11.9252V29.3181H9.83128ZM19.0321 29.3181V15.6172H21.126V29.3181H19.0321ZM4.61545 34.3394V32.2455H35.3845V34.3394H4.61545ZM28.0747 29.3181V15.6172H30.1687V29.3181H28.0747ZM4.61545 12.6899V10.8651L20 2.76904L35.3845 10.8651V12.6899H4.61545ZM9.63457 10.5959H30.3654L20 5.15571L9.63457 10.5959Z" fill="#13150F" />
                        </g>
                    </g>
                </svg>
            )}
            {name === "Virtual Dollar Card" && (
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="credit_card">
                        <mask id="mask0_1565_123" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect id="Bounding box" y="0.379883" width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1565_123)">
                            <path id="credit_card_2" d="M4.16672 32.8798V7.87988H35.8333V32.8798H4.16672ZM6.26068 14.5722H33.7393V9.97384H6.26068V14.5722ZM6.26068 30.7858H33.7393V16.8314H6.26068V30.7858Z" fill="#13150F" />
                        </g>
                    </g>
                </svg>
            )}
            {name === "Fx" && (
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="candlestick_chart">
                        <mask id="mask0_1565_15" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect id="Bounding box" y="0.379883" width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1565_15)">
                            <path id="candlestick_chart_2" d="M12.5001 32.8798V29.3435H9.16672V11.4162H12.5001V7.87988H14.594V11.4162H17.9273V29.3435H14.594V32.8798H12.5001ZM11.2607 27.2495H15.8334V13.5102H11.2607V27.2495ZM25.406 32.8798V24.664H22.0727V14.5893H25.406V7.87988H27.5V14.5893H30.8333V24.664H27.5V32.8798H25.406ZM24.1666 22.5701H28.7393V16.6833H24.1666V22.5701Z" fill="#13150F" />
                        </g>
                    </g>
                </svg>
            )}
            {name === "facebook" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M8.78584 15.4998C12.5698 15.1069 15.5202 11.9081 15.5202 8.02017C15.5202 3.8669 12.1533 0.5 8.00003 0.5C3.84675 0.5 0.479858 3.8669 0.479858 8.02017C0.479858 11.5506 2.91264 14.5128 6.19324 15.3219V9.94009H4.86072V7.81525H6.19324V6.50093C6.19324 4.70064 7.03937 3.69224 9.16378 3.69224C9.90186 3.69224 10.4421 3.80029 11.1441 3.94434L10.8204 5.97894C10.4603 5.90691 9.97388 5.8531 9.66797 5.8531C8.83965 5.8531 8.78584 6.21324 8.78584 6.78947V7.81525H10.8564L10.676 9.94009H8.78584V15.4998Z" fill="white" />
                </svg>
            )}
            {name === "linkedin" && (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Vector">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.00159 1.78089C4.00159 2.58054 3.39273 3.22767 2.44057 3.22767C1.52551 3.22767 0.916641 2.58054 0.935484 1.78089C0.916641 0.942379 1.52549 0.314087 2.45881 0.314087C3.39271 0.314087 3.98334 0.942379 4.00159 1.78089ZM1.01204 13.6849V4.37061H3.90678V13.6843L1.01204 13.6849Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.22754 7.34293C6.22754 6.18115 6.18926 5.19072 6.15099 4.37164H8.66534L8.799 5.64766H8.85613C9.23711 5.05705 10.1893 4.1626 11.732 4.1626C13.6364 4.1626 15.0649 5.41978 15.0649 8.16142V13.6859H12.1701V8.52415C12.1701 7.3235 11.7515 6.50501 10.7039 6.50501C9.90368 6.50501 9.4279 7.05735 9.23771 7.59025C9.16116 7.78103 9.12347 8.04719 9.12347 8.31452V13.6859H6.22871V7.34293H6.22754Z" fill="white" />
                    </g>
                </svg>
            )}
            {name === "instagram" && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M0.0289917 3.2645C0.0289917 1.47758 1.47758 0.0289917 3.2645 0.0289917H10.7355C12.5224 0.0289917 13.971 1.47758 13.971 3.2645V10.7355C13.971 12.5224 12.5224 13.971 10.7355 13.971H3.2645C1.47758 13.971 0.0289917 12.5224 0.0289917 10.7355V3.2645ZM9.90528 7.00016C9.90528 8.60432 8.60485 9.90475 7.00069 9.90475C5.39653 9.90475 4.0961 8.60432 4.0961 7.00016C4.0961 5.396 5.39653 4.09557 7.00069 4.09557C8.60485 4.09557 9.90528 5.396 9.90528 7.00016ZM11.3574 3.51494C11.8387 3.51494 12.2288 3.12481 12.2288 2.64356C12.2288 2.16232 11.8387 1.77219 11.3574 1.77219C10.8762 1.77219 10.4861 2.16232 10.4861 2.64356C10.4861 3.12481 10.8762 3.51494 11.3574 3.51494Z" fill="white" />
                </svg>
            )}
            {name === "twitter" && (
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M15.0863 1.60446C14.5653 1.83593 14.0045 1.99181 13.4164 2.0622C14.0168 1.70224 14.4779 1.13254 14.6947 0.453722C14.1335 0.787227 13.5104 1.02862 12.8486 1.15947C12.3181 0.594495 11.5618 0.24115 10.7262 0.24115C9.12052 0.24115 7.81863 1.54305 7.81863 3.14869C7.81863 3.37638 7.84461 3.5984 7.89421 3.81144C5.47748 3.69051 3.33521 2.5327 1.90104 0.773529C1.65068 1.20293 1.50755 1.70224 1.50755 2.2351C1.50755 3.24364 2.02009 4.13362 2.80094 4.65513C2.32383 4.64002 1.87601 4.50916 1.48345 4.29139V4.32776C1.48345 5.73689 2.48633 6.91172 3.81563 7.17956C3.57187 7.24569 3.3149 7.2816 3.04989 7.2816C2.86235 7.2816 2.68001 7.26317 2.50239 7.22916C2.87227 8.38414 3.94648 9.225 5.21861 9.24861C4.22377 10.0281 2.97005 10.4934 1.60769 10.4934C1.37244 10.4934 1.14098 10.4796 0.913757 10.4522C2.20054 11.277 3.72871 11.7589 5.37072 11.7589C10.7186 11.7589 13.6432 7.32836 13.6432 3.48644C13.6432 3.36031 13.6408 3.23466 13.6347 3.11043C14.2034 2.69945 14.6966 2.18738 15.0863 1.60446Z" fill="white" />
                </svg>
            )}
        </>
    )
}

export default ProductIcon