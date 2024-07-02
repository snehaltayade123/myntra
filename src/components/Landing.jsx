import React from 'react'
import FirstPurchase from '../assets/LandingPageImages/firstPurchase.png'
import Sale from '../assets/LandingPageImages/sale.png'
import Coupon from '../assets/LandingPageImages/cooponsCorner.png'
import Flat100Off from '../assets/LandingPageImages/flat100Off.png'
import Flat200Off from '../assets/LandingPageImages/flat200Off.png'
import CrazyDeals from '../assets/LandingPageImages/crazyDeals.png'
// import Footer from './footer'
import Carousal from './carousal'
import ShopByCatgory from '../assets/categoryImg/shopByCategory.png'
import SideBar from './sideBar'

function Landing() {
return (
    <main className='w-full pt-2'>
        <div className='mt-[10%] bg-[#ffffff]'>
            <img src={FirstPurchase} />
            <img src={Sale} />
            <img src={Coupon} />
            <div className='flex'>
                <div className='w-1/2'>
                    <img src={Flat100Off} />
                </div>
                <div className='w-1/2'>
                    <img src={Flat200Off} />
                </div>
            </div>
            <div className='w-full'>
                <img src={CrazyDeals} />
            </div>
            <div>
                <Carousal/>
            </div>
            <div>
                <img src={ShopByCatgory} />
            </div>
            <div>
                <SideBar className='' />
            </div>
        </div>
    </main>
)
}

export default Landing