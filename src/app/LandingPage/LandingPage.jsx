"use client"

import FirstBig from '@/components/WithImages/FirstBig';
import FourthBig from '@/components/WithImages/FourthBig';
import SecondBig from '@/components/WithImages/SecondBig';
import FirstSmall from "../../components/Smallimg/FirstSmall.jsx"
import SecondSmall from "../../components/Smallimg/SecondSmall.jsx"

import ThirdSmall from "../../components/Smallimg/ThirdSmall.jsx"

import FourthSmall from "../../components/Smallimg/FourthSmall.jsx"

import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import ThirdBig from '@/components/WithImages/ThirdBig';



const Expandable = [{ Big: <FirstBig />, Small: <FirstSmall /> },
{ Big: <SecondBig />, Small: <SecondSmall /> },
{ Big: <ThirdBig />, Small: <ThirdSmall /> },
{ Big: <FourthBig />, Small: <FourthSmall /> }]


function LandingPage() {


    const [selected, setSelected] = useState(Expandable[0]);

    return (
        <div class="bg-cover h-[1420px]">
            <div class='flex w-[94%] mx-auto flex-col md:flex-row gap-y-4'>
                <div class='space-y-7 md:py-36 md:flex-1'>
                    <div className="randi flex items-center gap-x-2 w-fit">
                        <img className="ml-3" src="./Secured.png" alt="Secured.png" />
                        <p className="uppercasees uppercase pr-7 pl-2">verify your nft!</p>
                    </div>
                    <p className="bring">
                        Bring Your NFTs to <br />
                        Life with Verified<br /> Web3   <span class="gradient-text ">  Canvas Printing</span>
                    </p>
                    <p className="paracanvaslanding">
                        Transform your digital assets into stunning real-world <br /> artwork
                        while preserving authenticity and ownership
                    </p>
                    <div className="flex">
                        <button
                            type="button"
                            className="navbutton whitespace-nowrap flex items-center gap-x-3 mr-3"
                        >
                            create my canvas{" "}
                            <span>
                                <AiOutlineArrowRight className="text-white w-4 h-4 " />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='px-8 md:flex-1'>
                    <img src="./AllPosters.png" alt="AllPoster" srcset="" />
                </div>
            </div>
            <div class='space-y-4 mt-12 w-[94%] mx-auto '>
                <div className="randi flex items-center gap-x-2 w-fit">
                    <img className="ml-3" src="./Settings.png" alt="Settings.png" />
                    <p className="uppercasees uppercase pr-7 pl-2">how it works</p>
                </div>
                <p className="bring">
                    Effortless NFT Canvas <br /> Creation:
                    <span class="gradient-text"> A Seamless <br /> Web3 Experience</span>
                </p>
                <p className="paracanvaslanding">
                    Transform your digital assets into stunning real-world <br /> artwork
                    while preserving authenticity and ownership
                </p>
            </div>
            <div className='flex w-[94%] md:gap-x-12 mx-auto mt-11 py-12' >
                {Expandable.map((one, index) => (
                    <div className={`${selected.Small === one.Small ? "flex-1" : ""} `} onClick={() => setSelected(one)} key={index}  >
                        {selected.Small === one.Small ? one.Big : one.Small}
                    </div>
                ))}
            </div>

            <div class='w-[94%] lg:flex items-center  mx-auto'>
                <div class='space-y-7 flex-1'>
                    <div className="randi flex items-center gap-x-2 w-fit">
                        <img className="ml-3" src="./Rocket.png" alt="Settings.png" />
                        <p className="uppercasees uppercase pr-7 pl-2">Check our features</p>
                    </div>



                    <p className="bring">
                        Transform Your Digital <br /> Asset Into A :
                        <span class="gradient-text"> Physical <br /> Masterpiece</span>
                    </p>
                    <div className="mt-12 space-y-3 grid place-self-center place-content-center self-center	items-baseline	content-center	 md:grid-cols-2 gap-8">
                        <div className="web4 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692] flex gap-x-4 items-center">
                            <img className="ml-3" src="./Energy.png" alt="Energy.png" />
                            <p className="featurestext">Exclusive Web3 Focus</p>
                        </div>
                        <div className="web3 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692] flex gap-x-4 items-center">
                            <img className="ml-3" src="./Locked.png" alt="Locked.png" />
                            <p className="featurestext">Secure Shopping</p>
                        </div>
                        <div className="web3 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692] flex gap-x-4 items-center">
                            <img className="ml-3" src="./Palette.png" alt="Palette.png" />
                            <p className="featurestext">Customization Options</p>
                        </div>
                        <div className="web3 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692] flex gap-x-4 items-center">
                            <img className="ml-3" src="./Pin.png" alt="Pin.png" />
                            <p className="featurestext">Worldwide Shipping</p>
                        </div>
                        <div className="web3 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692] flex gap-x-4 items-center">
                            <img className="ml-3" src="./Tie.png" alt="Tie.png" />
                            <p className="featurestext">Quality Craftsmanship</p>
                        </div>
                        <div className="web3 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692] flex gap-x-4 items-center">
                            <img className="ml-3" src="./Star.png" alt="Star.png" />
                            <p className="featurestext">Satisfaction Guarantee</p>
                        </div>
                    </div>
                </div>

                <div class='flex-1'>
                    <img class='illustrationimage' src="./Illustration.png" alt="" srcset="" />
                </div>
            </div>

        </div>
    )
}

export default LandingPage