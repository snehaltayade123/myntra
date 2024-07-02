import React from 'react'
import { NavLink } from 'react-router-dom'
import GooglePlayBtn from '../assets/playBtn.png'
import AppleStore from '../assets/appleStore.png'
import Insta  from '../assets/insta.png'
import Facebook from '../assets/faceBook.png'
import Twitter from '../assets/twitter.png'
import YouTube from '../assets/youTube.png'
import Orignal from '../assets/original.png'
import Return from '../assets/return.png'


function footer() {
    var onlineShopping = [{ "name": "men", "path": "/men" }, { "name": "women", "path": "/women" }, { "name": "kids", "path": "/kids" }, { "name": "home&livig", "path": "/home&livig" }, { "name": "beauty", "path": "beauty" }, {
        "name": "gift card", "path": "/giftcard"}, {"name": "myntra insiders","path":"/myntrainsiders"}]
    var custmorPolices = [{ "path": "/ContactUs", "name": "Contact Us" }, { "path": "/FAQ", "name": "FAQ" }, { "path": "/TermsOfUse", "name": "TermsOfUse" }, { "path": "/TrackOrders", "name": "Track Orders" }, { "path": "/Shipping", "name": "Shipping " }, { "path": "/Cancellation", "name": "Cancellation" }, { "path": "/Returns", "name": "Returns" }, { "path": "/PrivacyPolicy","name":"Privacy Policy"}]
    var usefulLinks = [{ "path": "/Blogs", "name": "Blogs" }, { "path": "/Careers", "name": "Careers" }, { "path": "/Site Maps", "name": "Site Maps" }, { "path": "/Corporate Information", "name": "Corporate Information" }, { "path": "/Whitehat", "name": "Whitehat" }, { "path":"/Claertrip","name":"Claertrip"}]
    var popularSearch = [{ "path": "/Nike", "name": "Nike" }, { "path": "/Puma", "name": "Puma" }, { "path": "/Adidas", "name": "Adidas" }, { "path": "/Fila", "name": "Fila" }, { "path": "/Lee", "name": "Lee" }, { "path": "/United", "name": "United" }, { "path": "/Colors of Benetton", "name": "Colors of Benetton" }, { "path": "/Wrangler", "name": "Wrangler" }, { "path": "/Fastrack", "name": "Fastrack" }, { "path": "/Woodland", "name": "Woodland" }, { "path": "/Yepme", "name": "Yepme" }, { "path": "/Levis", "name": "Levis" }, { "path": "/Tommy Hilfiger", "name": "Tommy Hilfiger" }, { "path": "/peter - england", "name": "peter - england" }, { "path": "/fabindia", "name": "fabindia" }, { "path": "", "name": "nike shoes" }, { "path": "/", "name": "tops" }, { "path": "/shirts", "name": "shirts" }, { "path": "/", "name": "jackets" }, { "path": "/ myntra coupons", "name": "myntra coupons" }, { "path": "/kurtis", "name": "kurtis" }, { "path": "/shoes", "name": "shoes" }, { "path": "/jackets", "name": "tunics" }, { "path": "/dresses", "name": "dresses" }, { "path": "/Watches", "name": "Watches" }, { "path": "/saree", "name": "saree" }, { "path": "/", "name": "kurtas  bags" }, { "path": "/T - shirts", "name": "T - shirts"}]
    return (
        <footer className='pt-8 pb-10 bg-[#FAFBFC]'>
            <div className='mr-2.5 ml-2.5'>
                <div className='flex mb-6'>
                    <div className='pr-5'>
                        <p className='uppercase text-[#282c3f] font-bold text-xs'>
                            <a >online Shopping</a>
                        </p>
                        {
                            onlineShopping.map((links, index) => (
                                <li className={`capitalize list-none text-[#696b79] text-sm pb-1.5 cursor-pointer ${index==0 ? 'pt-3.5':''}`} >
                                        <NavLink to={links.path}>{links.name}</NavLink>
                                </li>
                            ))
                        }
                        <p className='uppercase text-[#282c3f] font-bold text-xs mt-5'>
                            <a >useful Links</a>
                        </p>
                        {
                            usefulLinks.map((links, index) => (
                                <li className={`capitalize list-none text-[#696b79] text-sm pb-1.5 cursor-pointer ${index == 0 ? 'pt-3.5' : ''}`} >
                                    <NavLink to={links.path}>{links.name}</NavLink>
                                </li>
                            ))
                        }
                    </div>
                    <div className='w-[15%]'>
                        <p className='uppercase text-[#282c3f] font-bold text-xs'>Custmor Polices</p>
                        {
                            custmorPolices.map((Links, index) => (
                                <li className={`capitalize list-none text-[#696b79] text-sm pb-1.5 cursor-pointer ${index == 0 ? 'pt-3.5' : ''}`}>
                                    <NavLink to={Links.path}>{Links.name}</NavLink>
                                </li>
                            ))
                        }
                    </div>
                    <div className='pr-5 w-[360px]'>
                        <p className='uppercase text-[#282c3f] font-bold text-xs pb-6'>EXPERIENCE MYNTRA APP ON MOBILE </p>
                        <div className='flex'>
                            <a><img src={GooglePlayBtn} className='h-10 mr-2.5' /></a>
                            <a><img src={AppleStore} className='h-10' /></a>
                        </div>
                        <p className='uppercase text-[#282c3f] font-bold text-xs mt-5 mb-2.5'>Keep in touch</p>
                        <div className='flex'>
                            <a><img src={Facebook} className='h-5 mr-3.5' /></a>
                            <a><img src={Twitter} className='h-5 mr-3.5' /></a>
                            <a><img src={YouTube} className='h-5 mr-3.5'/></a>
                            <a><img src={Insta} className='h-5 mr-3.5' /></a>
                        </div>
                    </div>
                    <div>
                        <div className='flex mb-7'>
                            <img src={Orignal} className='h-10 mr-2.5' />
                            <p className='text-[#696b79]'><strong className='text-[#282c3f]'>100% ORIGINAL</strong> guarantee for all products at myntra.com </p>
                        </div>
                        <div className='flex'>
                            <img src={Return} className='h-10 mr-2.5' />
                            <p className='text-[#696b79]'><strong className='text-[#282c3f]'>Return within 14days</strong> of receiving your order</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <hr></hr>
                    <p className='text-[#282c3f] text-xs font-bold absolute top-[-8px] bg-[#fafbfc]'> POPULAR SEARCHES </p>
                    <div className='pt-8 popularSearchesDiv'>
                        {
                            popularSearch.map((links, index) => (
                                <NavLink to={links.path}  className="text-[#696b79] text-sm leading-6"> {links.name} </NavLink>
                                // <span>|</span>
                            ))
                        }
                    </div>
                </div>
                <div className='flex items-center justify-between pt-10'>
                    <p className='text-[#696b79]'>In case of any concern, <strong className='text-[#526cd0] font-bold'>Contact Us</strong></p>
                    <p className='text-[#696b79]'>© 2024 www.myntra.com. All rights reserved</p>
                    <p className='text-[#696b79]'>A Flipkart company</p>
                </div>
            </div>
        </footer>
        )
}

export default footer