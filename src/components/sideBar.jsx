import React from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from '../assets/sideBar/play.png'
import Img1 from '../assets/sideBar/img1.jpg'
import Notifaction from '../assets/sideBar/bell.png'


function sideBar({ className }) {
    return (
        <>
            {/* <div className='sideBar flex w-4/5 h-72 fixed bottom-0 top-[50%] right-0 '>
                <div className='bg-[#535766] w-30'>
                    <div className='p-1 rotate-90'>
                        <p className='text-[#fcfcfc] font-bold text-2xl'>FLAT ₹300 OFF</p>
                    </div>
                </div>
                <div className='bg-zinc w-full'>
                    <p>sssssssssss</p>
                </div> */}
                {/* <div className='w-full flex px-10 pt-6'>
                    <div className='w-1/2'>
                        <p className='font-bold text-xs text-[#3e4152]'>Avail Flat</p>
                        <p className='text-5xl text-[#3e4152] font-bold'>300 OFF</p>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-36 h-28' src={Img1} />
                    </div> */}
                    {/* <div className='w-1/2'>
                        <img className='w-36 h-28' src={Img1} />
                    </div> */}
                {/* </div> */}
               
                {/* <div className='w-full flex px-10'>
                    <div className='w-1/2'>
                        <div className='flex items-center justify-center'>
                            <p className='text-base font-bold text-[#3e4152]'>Coupon Code:</p>
                            <p className='text-lg font-bold ml-3 text-[#3e4152]'> MYNTRA300</p>
                        </div>
                        <p className='text-xs mt-1'>Applicable on your first order</p>
                    </div>
                    <div className='w-1/2 '>
                        <div className='bg-[#ff3f6c] '>
                            <NavLink className='text-[#fff] '><p className='text-base font-semibold'>SIGN UP NOW </p></NavLink>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        {/* <div className={`absolute right-0 rotate-90 w-80 bg-[#535766] ${className}`}>
        <div className='p-2.5 flex items-center justify-around'>
            <img src={Arrow} className='rotate-90'></img>
            <p className='text-[#fcfcfc] font-bold text-2xl text-center rotate-180 tracking-wide'>FLAT ₹300 OFF</p>
        </div>
        </div>
            <p className='w-fit bg-[#ffb300] py-0.5 px-1 rounded-sm text-[#FFF] text-xs font-bold'>NEW</p> */}
            <div className='fixed bottom-0 top-[60%] right-1.5 '>
                <div className='bg-[#1D85FC] rounded-full w-12 h-12 flex items-center justify-center '>
                    <img className='w-10 h-10 p-2' src={Notifaction}></img>
                </div>
            </div>
          
           
        </>


  )
}

export default sideBar