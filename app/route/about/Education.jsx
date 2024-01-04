"use client";
import React from 'react';
import imgProfile from '@/public/Profile.png'
import Image from 'next/image';
import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";


const Education = () => {
    return (
        <div className=" bg-blue-50 md:p-12">
            <div className='text-xl bg-orange-600 text-center p-3'>My Education </div>
            <div className="flex flex-col lg:flex-row-reverse items-center">
                <div className='flex items-center justify-center w-[30%] rounded bg-gradient-to-r from-blue-900 to-green-500'>
                    <Image placeholder='blur' quality={100} src={imgProfile} alt='Sakib Talukqder' className="max-w-sm rounded-lg shadow-2xl my-3" />
                </div>
                <div className='my-8 me-0 mx-0 md:me-16 md:w-[70%]'>
                    <Accordion
                        openIcon={<CaretUp />}
                        closeIcon={<CaretDown />}
                        iconPosition="right"
                        flush={true}
                        color='black'
                    >
                        <Accordion.Panel>
                            <Accordion.Title className='text-black'>
                                Diploma in Engineering 20-21
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className='text-gray-100'>
                                    <br />  Institute: <span className='font-bold text-5xl text-black'>Moulvibazar Polytechnic Institute</span>
                                    <br /> Somser Nogre road, Matarkapun, Moulvibazar
                                    <br />
                                    <br />Current Semester : <span className=' bg-emerald-300 px-2 rounded text-black'> 6th  ♥️ </span>
                                    <br />Department of, <span className=' bg-emerald-300 px-2 rounded text-black'>
                                        Computer and Science Technology 💻
                                    </span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='text-black'>
                                Secondary School Certificate 19-20
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className='text-gray-100'>
                                    <br />  Institute: <span className='font-bold text-5xl text-black'>Sabuj Kanan School & College</span>
                                    <br /> Mujib Sarak, Sirajganj
                                    <br />
                                    <br />Board : <span className=' bg-emerald-300 px-2 rounded text-black'> Rajshahi </span>
                                    <br />Group : <span className=' bg-emerald-300 px-2 rounded text-black'>Science </span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='text-black'>
                                Junior   School Certificate 2018
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className='text-gray-100'>
                                    <br />  Institute: <span className='font-bold text-5xl text-black'>Sabuj Kanan School & College</span>
                                    <br /> Mujib Sarak, Sirajganj
                                    <br />
                                    <br />Board : <span className=' bg-emerald-300 px-2 rounded text-black'> Rajshahi </span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Education;