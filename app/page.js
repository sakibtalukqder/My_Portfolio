'use client'

import Image from "next/image";
import imgProfile from '@/public/Profile.png'
import Typewriter from "@/src/Components/Typewriter";
import Link from "next/link";

export default function Home() {

  const textToType = 'This is Sakib Talukqder, \n welcome to my Portfolio....! \n I am a CSTean form Bangladesh; Learning Computer Science in, \n MoulviBazar Polytechnic Institute.';

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
          <figure className="flex items-center justify-center w-[450px] h-[450px] overflow-hidden">
            <Image src={imgProfile} className="rounded-lg shadow-2xl" alt="Profile Sakib Talukqder" />
          </figure>
        </div>
      </div>

    </main>
  )
}
