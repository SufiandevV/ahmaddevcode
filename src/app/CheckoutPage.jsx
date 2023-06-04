"use client"
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CheckoutPage() {

  const [toggle, settoggle] = useState(true)
  const [toggle1, settoggle1] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState('')

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = value => {
    setValue(value)
  }

  return (
    <div class='w-[94%] mx-auto'>

      <div class='flex flex-col justify-center items-center '>
        <h1 className='cart-heading whitespace-nowrap'>Just One Step Away</h1>
        <h2 className='navlinks2'>HOME <span class='mx-2'>/</span> <span class='text-[#2B2592]'>Checkout</span ></h2>

      </div>


      <div class='lg:flex gap-x-12'>
        <div class='flex-1'>
          <div class='flex justify-between py-4 mt-5'>
            <p class='guest'>Guest User?</p>
            <p class='alreadyhave'>Already have an account? <span class='onecolor text-[#6D46FB]'>Log in</span></p>
          </div>
          <div class="mb-6">
            <label for="email" class="formcontact">Contact</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your email or Phone Number" required />
          </div>
          <div onClick={() => settoggle(!toggle)} class='flex justify-between items-center web13 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692]'>
            <p class='guest'>Delivery Address</p>
            <img class='object-contain w-[25px] h-[25px]' src="./arrow-down.png" alt="" srcset="" />
          </div>
          {toggle &&


            <form class='mt-6'>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 labellabel dark:text-white">First name</label>
                  <input type="text" id="first_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
                </div>
                <div>
                  <label class="block mb-2 labellabel dark:text-white">Last name</label>
                  <input type="text" id="last_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
                </div>



              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Phone Number</label>
                <input type="text" id="email" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
              </div>

              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">City</label>
                <Select options={options} value={value} onChange={changeHandler} />
              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Address</label>
                <input type="text" id="email" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Address (optional) </label>
                <input type="text" id="email" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Confirm password</label>
                <input type="password" id="confirm_password" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 labellabel">Postal Code</label>
                  <input type="text" id="first_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Postal Code" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 labellabel">State</label>
                  <input type="text" id="last_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
                </div>



              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" class="w-4 inputinput h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ml-2 formcontact">Use as Shipping Address  </label>
              </div>
            </form>

          }
          <div onClick={() => settoggle1(!toggle1)} class='flex mt-8 justify-between items-center web13 border border-l-4 border-r-0 border-t-0 border-b-0 border-[#2B2692]'>
            <p class='guest'>Shipping Address</p>
            <img class='object-contain w-[25px] h-[25px]' src="./arrow-down.png" alt="" srcset="" />
          </div>
          {toggle1 &&


            <form class='mt-6 pb-6'>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 labellabel dark:text-white">First name</label>
                  <input type="text" id="first_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
                </div>
                <div>
                  <label class="block mb-2 labellabel dark:text-white">Last name</label>
                  <input type="text" id="last_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
                </div>



              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Phone Number</label>
                <input type="text" id="email" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
              </div>

              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">City</label>
                <Select options={options} value={value} onChange={changeHandler} />
              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Address</label>
                <input type="text" id="email" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Address (optional) </label>
                <input type="text" id="email" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
              </div>
              <div class="mb-6">
                <label class="block mb-2 labellabel dark:text-white">Confirm password</label>
                <input type="password" id="confirm_password" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 labellabel">Postal Code</label>
                  <input type="text" id="first_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Postal Code" required />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 labellabel">State</label>
                  <input type="text" id="last_name" class="inputinput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
                </div>
              </div>
            </form>
          }
        </div>

        {/* Second div */}
        <div class='orderofsummarry p-4 mt-6 h-fit py-8'>
          <div>
            <p class='py-4 ordersummary'>Order Summary</p>
            <div class='flex justify-between'>
              <div class='flex gap-x-4'>
              <img src="./Thumbnail11111.png" alt="Thumbnail11111.png" srcset="" />
              <div>
                <p class='printcartcart'>NFT Canvas Print</p>
                <div class='flex gap-x-5 mt-1'>
                  <p class='printfirst'>Print type</p>
                  <p class='printfirst11'>Type 01</p>
                </div>
                <div class='flex gap-x-5'>
                  <p class='printfirst'>Print type</p>
                  <p class='printfirst11'>Type 01</p>
                </div>
              </div>
              </div>

              <div class='flex flex-col'>
                <p class='printfirst111 text-[#8C8CF6]'>Subtotals</p>
                <p class='printcartcart'>$250</p>
              </div>
            </div>
            <p class='py-3 ordersummary'>Have an Coupon?</p>
            <div class='flex gap-x-3'>
              <input type="text" class="codeinput flex-3 border-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter code" required />
              <button class="py-3 flex-0 payoutbutton uppercase px-10">Apply</button>


            </div>
            <p class='py-3 ordersummary'>Payment Method</p>

            <div class="flex items-center  gap-x-1">

              <label className="inline-flex items-center gap-x-1 py-3">
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
                <span className="ml-2 subtotal11">Local Price</span>

              </label>

            </div>
            <button class="py-2 flex justify-center items-center payoutbutton1111 uppercase w-full">I’m ready to Pay $250 <span class='ml-3'> <img src="./shopping-cart.png" alt="shopping-cart.png" srcset="" /> </span> </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage