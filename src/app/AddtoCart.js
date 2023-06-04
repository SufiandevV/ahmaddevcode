"use client"
import React, { useState } from 'react'
import StarRatings from "react-star-ratings";
import ShippingCard from '../components/ShippingCard/ShippingCard.jsx'

const AddtoCart = () => {
    const [rating, setRating] = useState(2);
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const changeRating = (newRating, name) => {
        setRating(newRating);
    };
    return (
        <div class="w-[94%] mx-auto">

            <h1 className='cart-heading' style={{ margin: '0px auto', textAlign: 'center', fontSize: '15px' }}>My Cart</h1>
            <h2 className='mx-auto mt-5 text-center navlinks2'>HOME <span class='px-2'>/</span> <span class='text-[#2B2592]'>MY CART</span ></h2>

            <div class="container mx-auto ">
                <div class="flex my-10 mx-auto flex-wrap gap-x-3 flex-col lg:flex-row ">
                    <div class="wwww flex-1">

                        <div class="flex  mb-5 cart-topheadings px-2">
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5 titlehd">Products</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 titlehd pl-[61px]">Quantity</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 titlehd pl-[84px]">Total</h3>
                        </div>


                        <ShippingCard />
                        <ShippingCard />

                        <div class='flex py-2 bgcon'>

                            <p class='continueshopping px-2'>Continue Shopping</p>
                            <img src="./Trailing Icon Wrapper.png" alt="Trailing Icon Wrapper.png" srcset="" />

                        </div>
                    </div>

                    <div id="summary" class="w-[100%] lg:w-fit mt-6 px-8 py-10 paycard h-fit">
                        <h1 class="cartnft">Cart Total</h1>
                        <div class="flex justify-between mt-5 mb-5">
                            <span class="font-semibold text-sm uppercase subtotal11">Sub Total</span>
                            <span class="font-semibold text-sm subtotal11">590$</span>

                        </div>

                        <div class="flex justify-between mb-5 border-t border-b mt-8 py-5">
                            <span class="font-semibold text-sm uppercase subtotal11">Shipping Fee</span>
                            <div>

                                <div class="flex items-center mb-4 justify-between gap-x-1">
                                    <label className="inline-flex items-center gap-x-1">
                                        <span className="ml-2 subtotal11 whitespace-nowrap">Flat Rate : $245</span>

                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isChecked}
                                            onChange={toggleCheckbox}
                                        />
                                        <span className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                                            {isChecked && (
                                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                            )}
                                        </span>
                                    </label>
                                </div>
                                <div class="flex items-center justify-between gap-x-1">
                                    <span className="ml-2 subtotal11">Local Price</span>

                                    <label className="inline-flex items-center gap-x-1">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isChecked}
                                            onChange={toggleCheckbox}
                                        />
                                        <span className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                                            {isChecked && (
                                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                            )}
                                        </span>
                                    </label>
                                </div>


                            </div>

                        </div>


                        <p class='mt-8 copen'>Have a coupon?</p>

                        <div class="">
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span class='tottall'>Total</span>
                                <span class='tottall'>$600</span>
                            </div>
                            <button class="py-3 payoutbutton uppercase w-full">Proceed to Pay</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default AddtoCart