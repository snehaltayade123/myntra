import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import wishlist from '../assets/pin.png'
import bag from '../assets/parcel.png'
import Search from '../assets/search.png'

function navBar() {
  var navLinks = [
    // {
    //   "path": '/',
    //   "name": 'Home'
    // },
    // {
    //   "path": '/new',
    //   "name": 'new'
    // },
    {
      'path': '/Men',
      'name':'Men'
    },
    {
      "path": '/Women',
      "name": 'Women'
    },
    {
      "path": '/Kids',
      "name": 'Kids'
    },
    {
      "path": '/Home&Living',
      "name": 'Home&Living'
    },
    {
      "path": '/beauty',
      "name": 'beauty'
    },
    {
      "path": '/studio',
      "name": 'studio'
    }
  ]
  var profileLinks = [
    {
    "name": "Profile",
    img: User,
    "path":"/profile"
    
  },
  {
    "name": "Wishlist",
    img: wishlist,
    "path": "/wishlist"
  },
  {
    "name": "Bag",
    img: bag,
    "path": "/bag"
  }
  ]
  return (
    <>
      <header className='h-20 w-full bg-[black] shadow-md p-5 flex items-center justify-between fixed'>
        <div className='logo flex items-center justify-center'>
          {/* logo */}
          <div className='w-12'>
            <img src={Logo} className='w-full'></img>
          </div>
          {/* Links */}
          <div className='Links flex p-2.5'>
            {navLinks.map((route, index) => (
              <li key={index} className='list-none pl-4 pr-4 uppercase text-sm text-[#282c3f] font-bold tracking-normal'>
                <NavLink to={route.path}>{route.name}</NavLink>
                {
                  navLinks.length - 1 == index ? <sup className='text-[#ff3f6c] text-[10px] p-0.5'>new</sup>:''
                }
                {/* <sup>new</sup> */}
              </li>
            ))}
          </div>
        </div>
        <div className='flex items-center '>
          {/* Search input */}
          <div className='search w-full flex items-center justify-between '>
            <div className='bg-[#f5f5f6] h-[40px] w-[42px] border-r'>
              <img src={Search} className='p-2.5'/>
            </div>
            <input type="text" placeholder="Search for products, brands and more" className='rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none pt-2 pl-2.5 pr-2.5 pb-2.5 border-[#f5f5f6]  bg-[#f5f5f6] focus:border-blue-500 focus:bg-[#fff]'
            />
          </div>
          {/* Links */}
          <div>
            <ul className='flex'>
              {
                profileLinks.map((links,index) => (
                  <li className='pl-4 pr-4 flex items-center justify-center flex-col'>
                    <NavLink to={links.path} className='items-center justify-center'>< img src={links.img} alt="" className='w-6 h-6' />{links.name}</NavLink>                  {/* <p className='text-[#000] text-xs font-bold'>{links.name}</p> */}
                  </li>
                  ))
                }
                {/* < img src={User} alt="" className='w-6 h-6'/>
                <p className='text-[#000] text-xs font-bold'>Profile</p> */}
             
              {/* <li className='pl-4 pr-4 flex items-center justify-center flex-col'>
                < img src={wishlist} alt="" className='w-6 h-6' />
                <p className='text-[#000] text-xs font-bold'>Wishlist</p>
              </li>
              <li className='pl-4 pr-4 flex items-center justify-center flex-col'>
                < img src={bag} alt="" className='w-6 h-6' />
                <p className='text-[#000] text-xs font-bold'>Bag</p>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default navBar