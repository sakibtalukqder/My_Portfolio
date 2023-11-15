"use client";
import React from 'react';
import imgProfile from '@/public/sakib2.jpg'
import Image from 'next/image';
import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";


const Education = () => {
    return (
        <div className="bg-cyan-25 md:p-12">
            <div className='text-xl bg-orange-600 text-center p-3'>My Education </div>
            <div className="flex flex-col lg:flex-row-reverse items-center ">
                <div className='flex items-center justify-center w-[30%] my-8'>
                    <Image src={imgProfile} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='my-8 me-0 mx-0 md:me-16 md:w-[70%] text-white'>
                    <Accordion
                        openIcon={<CaretUp />}
                        closeIcon={<CaretDown />}
                        iconPosition="right"
                        flush={true}
                        color='white'
                    >
                        <Accordion.Panel>
                            <Accordion.Title>
                                Diploma in Engineering 20-21
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className=''>
                                    <br />  Institute: <span className='font-bold text-xl text-black'>Moulvibazar Polytechnic Institute</span>
                                    <br /> Somser Nogre road, Matarkapun, Moulvibazar
                                    <br />
                                    <br />Current Semester : <span className=' bg-emerald-300 text-black px-2 rounded'> 6th  ♥️ </span>
                                    <br />Department of, <span className=' bg-emerald-300 text-black px-2 rounded'>
                                        Computer and Science Technology 💻
                                    </span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Secondary School Certificate 19-20
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className=''>
                                    <br />  Institute: <span className='font-bold text-xl text-black'>Sabuj Kanan School & College</span>
                                    <br /> Mujib Sarak, Sirajganj
                                    <br />
                                    <br />Board : <span className=' bg-emerald-300 text-black px-2 rounded'> Rajshahi </span>
                                    <br />Group : <span className=' bg-emerald-300 text-black px-2 rounded'>Science </span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Junior   School Certificate 2018
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className=''>
                                    <br />  Institute: <span className='font-bold text-xl text-black'>Sabuj Kanan School & College</span>
                                    <br /> Mujib Sarak, Sirajganj
                                    <br />
                                    <br />Board : <span className=' bg-emerald-300 text-black px-2 rounded'> Rajshahi </span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>



            {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
    );
};

export default Education;