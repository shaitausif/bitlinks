"use client"
import React from 'react'
import Link from 'next/link'
import { ToastContainer,toast } from 'react-toastify'
import { Bounce } from 'react-toastify'


const Navbar = () => {
  const handleClick= () => {
    toast("This Page is under construction", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    <nav className='h-14 bg-purple-600 text-white flex justify-around items-center'>
        <div className="logo font-bold text-xl">
            <Link href={"/"}>BitLinks</Link>
        </div>
        <ul className='flex justify-center items-center gap-4'>
            <Link href="/"><li>Home</li></Link>
            <Link onClick={handleClick} href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link onClick={handleClick} href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                <Link href="/shorten"><button className='font-bold rounded-xl px-3 py-1 bg-purple-500 shadow-2xl'>Try Now</button></Link>
                <Link href="/github"><button className='font-bold rounded-xl px-3 py-1 bg-purple-500 shadow-2xl'>Github</button></Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
