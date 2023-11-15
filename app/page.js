'use client'

import Image from "next/image";
import imgProfile from '@/public/Profile.jpg'
import Typewriter from "@/src/Components/Typewriter";

export default function Home() {

  const textToType = 'This is Sakib Talukqder, \n welcome to my Portfolio....! \n I am a CSTean form Bangladesh; Learning Computer Science in, \n MoulviBazar Polytechnic Institute.';

  return (
    <main className="">

      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <div className="w-full ms-3 md:ms-16 my-8">
          <h1 className="text-5xl font-bold">Hi there !</h1>
          <div className="text-lg w-full py-4">
            <Typewriter text={textToType} />
          </div>
          <button className="btn btn-primary ms-0 m-2">Download CV</button>
          <button className="btn btn-primary m-2">Contract Me</button>
        </div>
        <div className="w-full flex justify-center my-8 ">
          <Image src={imgProfile} className="max-w-sm rounded-lg shadow-2xl" alt="Profile Sakib Talukqder" />
        </div>
      </div>

    </main>
  )
}
