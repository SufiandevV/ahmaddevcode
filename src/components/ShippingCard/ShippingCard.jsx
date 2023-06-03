"use client"
import React, { useState } from 'react'
import StarRatings from "react-star-ratings";

function ShippingCard() {
    const [rating, setRating] = useState(2);
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const changeRating = (newRating, name) => {
        setRating(newRating);
    };
    return (
        <div class="flex items-center flex-col  lg:flex-row pr-8 py-5"> 
                            <div class="flex flex-col  lg:flex-row">
                                <div class="w-[12rem]">
                                    <img class="h-[100%] w-[100%]" src="./Thumbnail1.png" alt="Thumbnail1.png" />
                                </div>
                                <div class="flex flex-col gap-y-2 ml-4 mr-[51px] flex-grow">
                                    <span class="cartnft">NFT Canvas Print</span>
                                    <div className="flex gap-x-3 items-center">
                                        <div className="flex gap-x-1 whitespace-nowrap items-baseline">
                                            <StarRatings
                                                rating={rating}
                                                starRatedColor="#6B43FB"
                                                // changeRating={changeRating}
                                                numberOfStars={5}
                                                name="rating"
                                                isSelectable={false}
                                                starDimension="13px" // Set the size of the stars
                                                starSpacing="2px" // Set the spacing between the stars
                                                className="text-sm" // Apply a smaller font size to the stars
                                            />{" "}
                                            <p className="stars">4.5</p>
                                        </div>
                                        <p className="happy whitespace-nowrap">300+ happy customers</p>
                                    </div>
                                    <div class="flex flex-row cart-item-subheading">
                                        <span class='subtotal'>Print Type</span> <span className='cart-subheading-bold ml-[20px] subtotal11'>TYPE 01</span>
                                    </div>
                                    <div class="flex flex-row cart-item-subheading">
                                        <span class='subtotal'>Canva Size</span> <span className='cart-subheading-bold ml-[20px] subtotal11'>210 X 297</span>
                                    </div>
                                    <div class="mt-3 subtotal">Subtotal</div>
                                    <div class="flex flex-row">
                                        <div className='subtotal-price'>$250</div>
                                    </div>

                                </div>
                            </div>
                        
                            
                            <div class="flex justify-center flex-col lg:flex-row ">
                                <div class='inputnumber flex p-3 items-center justify-center'>
                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>

                                    <input placeholder='1' class="mx-2 text-center w-8 bg-[#EBEBEE]" type="text" />

                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                            </div>
                           <div class='w-[100%] mt-3 space-y-3'>
                           
                           <span class="text-center w-[100%] justify-center items-center flex fourhun">$400.00</span>
                            
                           </div>
                           <div class='flex dust p-2 justify-center items-center px-6'>
                                <img src="./Delete.png" alt="" srcset="" />
                                <span class="text-center subtotal11 ">Remove</span>

                            </div>
                        </div>
    )
}

export default ShippingCard