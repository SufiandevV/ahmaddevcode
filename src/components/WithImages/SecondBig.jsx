import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

function SecondBig() {
  return (
    <div className='bg-[#F1F1F5] flexexpand flex-0 hover:flex-1'>
                    <div className='p-5'>
                    <img  className='exapnadimage' src="./Feature Image.png" alt="Feature Image.png" srcset="" />
                    <div>
                   <div class='space-y-2 mt-4'>
                   <p className="bring">
                        <span class="gradient-text">NFT Selection</span>
                    </p>
                    <p className="paracanvaslanding">
                        Enter the Opensea link connected to your NFT and click “generate preview”.                    </p>
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
                    </div>
                    </div>
                </div>
  )
}

export default SecondBig