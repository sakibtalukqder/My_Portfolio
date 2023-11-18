"use client";
import React from 'react';
import bgImg from '@/public/pxfuel.jpg'
import Image from 'next/image';
import imgProfile from '@/public/sakib3.jpg'

const AboutMe = () => {
    return (
        <div className="hero my-5" style={{ backgroundImage: "url('/wpCst.jpg')" }}>
            <div className="hero-overlay bg-opacity-70 bg-black py-12">
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <Image src={imgProfile} alt='Sakib Talukqder' className="md:max-w-sm rounded-lg shadow-2xl" />
                            <div className=' text-left'>
                                <h1 className="text-3xl font-bold">There is all about me .... !!</h1>
                                <p className="py-6">
                                    <br />  I love lerning and sharing knowledge, About Programing and Computer Science.
                                    <br />
                                    <br />  ♥️  I enjoy programming and sharing knowledge
                                    <br />  💻  Most fevourite line of code &nbsp;
                                    <code className="text-sm text-gray-700 bg-slate-300 p-1 rounded">
                                        {`print("Hello, world!")`}
                                    </code>
                                    <br />  🤔  I’m looking for people who can help me to lern code.
                                    <br />  📧  How to reach me: sakibtalukqder07@gmail.com
                                </p>
                                <button className="btn btn-primary">More about me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;