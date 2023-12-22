'use client'

import imgProfile from '@/public/Profile.png'
import Typewriter from "@/src/Components/Typewriter";
import Link from "next/link";

export default function Home() {

  const textToType = 'const Sakib_Talukqder = () => { \n\n     I am a CSTean form Bangladesh; \n     Learning (Computer_Science) => ({ \n         MoulviBazar Polytechnic Institute; \n         matarkapun, Moulvibazar;\n         Department of Computer Technology; \n     })\n     [...Assalamulaikum,Wlcome To My Portfolio]\n\n} \nSakib_Talukqder(); ';

  return (
    <main className="m-4">

      <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-between">


        
      <div className="md:w-1/2 w-full flex md:justify-end justify-center md:my-8">
          <figure className="flex items-center justify-center w-[500px] h-[500px] overflow-hidden">

            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stop-color="rgba(45, 255, 196, 1)" offset="0%"></stop>
                  <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <mask id="profile" mask-type="alpha">
                <path className="transition" fill="url(#sw-gradient)" d="M21.3,-30.8C27.3,-24.9,31.8,-18.3,34.1,-11.1C36.4,-3.9,36.5,4,35.2,12.5C34,21.1,31.3,30.3,25.2,34.8C19.1,39.4,9.6,39.3,0.8,38.2C-8,37.1,-16,35,-23.5,30.9C-30.9,26.8,-37.9,20.7,-41.2,12.9C-44.4,5,-43.9,-4.5,-40.3,-12.3C-36.7,-20,-29.9,-26,-22.7,-31.5C-15.4,-37.1,-7.7,-42.3,-0.1,-42.2C7.6,-42.1,15.2,-36.7,21.3,-30.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
              </mask>
              <g mask="url(#profile)">
                <path className="transition animation-svg glow" fill="url(#sw-gradient)" d="M21.3,-30.8C27.3,-24.9,31.8,-18.3,34.1,-11.1C36.4,-3.9,36.5,4,35.2,12.5C34,21.1,31.3,30.3,25.2,34.8C19.1,39.4,9.6,39.3,0.8,38.2C-8,37.1,-16,35,-23.5,30.9C-30.9,26.8,-37.9,20.7,-41.2,12.9C-44.4,5,-43.9,-4.5,-40.3,-12.3C-36.7,-20,-29.9,-26,-22.7,-31.5C-15.4,-37.1,-7.7,-42.3,-0.1,-42.2C7.6,-42.1,15.2,-36.7,21.3,-30.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
                <image href={imgProfile.src} x="0" y="0" width="100" height="100" className="rounded-lg shadow-2xl" alt="Profile Sakib Talukqder" />
              </g>
            </svg>

          </figure>
        </div>

        <div className='md:w-1/2 w-full mb-8'>
          <div className=" ms-1 md:ms-16 md:p-6 py-3 rounded glow glassMorphism md:me-8 ">
            <div className="w-full pe-3 flex justify-end">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="md:text-md text-sm w-full p-4 pb-5 flex items-center textAnimation">
              <Typewriter text={textToType} />
            </div>
            <div className='w-full pe-3 flex justify-end'>
              <button className="btn-sm btn btn-primary ms-0 m-2">Download CV</button>
              <Link href={'/route/contract'} className="btn-sm btn btn-primary m-2">Contract Me</Link>
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}
