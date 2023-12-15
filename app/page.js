'use client'

import Image from "next/image";
import imgProfile from '@/public/Profile.png'
import Typewriter from "@/src/Components/Typewriter";
import Link from "next/link";

export default function Home() {

  const textToType = 'This is, Sakib Talukqder, \n welcome to my Portfolio....! \n I am a CSTean form Bangladesh; \n Learning Computer Science in, MoulviBazar Polytechnic Institute. \n Somser Nagre road, matarkapun, Moulvibazar \n Thanks at all ......!';

  return (
    <main className=" m-4">

      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <div className="w-full ms-3 md:ms-16 my-8">
          <h1 className="text-5xl font-bold">Hi there !</h1>
          <div className="text-lg w-full py-4">
            <Typewriter text={textToType} />
          </div>
          <button className="btn btn-primary ms-0 m-2">Download CV</button>
          <Link href={'/route/contract'} className="btn btn-primary m-2">Contract Me</Link>
        </div>
        <div className="w-full flex justify-center my-8 ">
          <figure className="flex items-center justify-center w-[500px] h-[500px] overflow-hidden">

            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                  <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <mask id="profile" mask-type="alpha">
                <path className="transition" fill="url(#sw-gradient)" d="M21.3,-30.8C27.3,-24.9,31.8,-18.3,34.1,-11.1C36.4,-3.9,36.5,4,35.2,12.5C34,21.1,31.3,30.3,25.2,34.8C19.1,39.4,9.6,39.3,0.8,38.2C-8,37.1,-16,35,-23.5,30.9C-30.9,26.8,-37.9,20.7,-41.2,12.9C-44.4,5,-43.9,-4.5,-40.3,-12.3C-36.7,-20,-29.9,-26,-22.7,-31.5C-15.4,-37.1,-7.7,-42.3,-0.1,-42.2C7.6,-42.1,15.2,-36.7,21.3,-30.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
              </mask>
              <g mask="url(#profile)">
                <path className="transition animation-svg" fill="url(#sw-gradient)" d="M21.3,-30.8C27.3,-24.9,31.8,-18.3,34.1,-11.1C36.4,-3.9,36.5,4,35.2,12.5C34,21.1,31.3,30.3,25.2,34.8C19.1,39.4,9.6,39.3,0.8,38.2C-8,37.1,-16,35,-23.5,30.9C-30.9,26.8,-37.9,20.7,-41.2,12.9C-44.4,5,-43.9,-4.5,-40.3,-12.3C-36.7,-20,-29.9,-26,-22.7,-31.5C-15.4,-37.1,-7.7,-42.3,-0.1,-42.2C7.6,-42.1,15.2,-36.7,21.3,-30.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>

                {/* Use the <image> element to embed the image */}
                <image href={imgProfile.src} x="0" y="0" width="100" height="100" className="rounded-lg shadow-2xl" alt="Profile Sakib Talukqder" />
              </g>
            </svg>

          </figure>
        </div>
      </div>

    </main>
  )
}
