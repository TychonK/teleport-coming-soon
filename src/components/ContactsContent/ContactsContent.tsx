'use client'

import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Paperplane from '../Paperplane/Paperplane';

import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";

function ContactsContent() {
    const specificEndDate = new Date('2024-12-31T23:59:59');

  return (
    <div>
        <Paperplane />
        <section className="relative z-10 text-white flex min-h-screen flex-col w-full items-center justify-between p-5 lg:p-12">
        <Header />
        <ul className="flex flex-col gap-y-4 md:gap-y-6 justify-center items-center">
          <li className="text-left w-[310px] lg:w-[350px] p-6 lg:px-8 rounded-[40px] bg-alarm group">
            <Link
              href="tel:+3806783058035"
              className="flex gap-2 md:gap-4 items-center"
            >
              <div className="w-fit h-fit rounded-full border-white border-2 p-2 md:p-4 group-hover:text-slate-900 group-hover:border-slate-900 transition duration-300">
                <FaPhoneAlt className="text-3xl md:text-4xl" />
              </div>
              <div className="group-hover:text-slate-900 transition duration-300 text-xl">
                <p className="font-bold">Phone:</p>
                <p>+3806783058035</p>
              </div>
            </Link>
          </li>
          <li className="text-left w-[310px] lg:w-[350px] p-6 lg:px-8 rounded-[40px] bg-main group">
            <Link
              href="mailto:example@domain.com"
              className="flex gap-2 md:gap-4 items-center"
            >
              <div className="w-fit h-fit rounded-full border-white border-2 p-2 md:p-4 group-hover:text-slate-900 group-hover:border-slate-900 transition duration-300">
                <FaEnvelope className="text-3xl md:text-4xl" />
              </div>
              <div className="group-hover:text-slate-900 transition duration-300 text-xl">
                <p className="font-bold">Email:</p>
                <p>teleport@teleport.com</p>
              </div>
            </Link>
          </li>
          <li className="text-left w-[310px] lg:w-[350px] p-6 lg:px-8 rounded-[40px] bg-accent group">
            <Link
              href="https://goo.gl/maps/example"
              passHref
              className="flex gap-2 md:gap-4 items-center"
            >
              <div className="w-fit h-fit rounded-full border-white border-2 p-2 md:p-4 group-hover:text-slate-900 group-hover:border-slate-900 transition duration-300">
                <FaHome className="text-3xl md:text-4xl" />
              </div>
              <div className="group-hover:text-slate-900 transition duration-300 text-xl">
                <p className="font-bold">Address:</p>
                <p>Kyiv, Ukraine</p>
              </div>
            </Link>
          </li>
        </ul>
          <Footer />
        </section>
    </div>
  )
}

export default ContactsContent