import { faAt, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Logo from '@/public/Logo.png'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <div className="md:mx-16 mx-4 my-8">
                <section className="">
                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="md:w-3/4 w-full mt-5">

                            <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
                            <p className="mb-2 flex mt-1">
                                <FontAwesomeIcon icon={faHome} width={20} className='me-3' />   Mujib Sarak, Sirajganj Sadre, Sirajganj
                            </p>
                            <p className="mb-2 flex mt-1">
                                <FontAwesomeIcon icon={faPhone} width={20} className='me-3' />  + 880 1799 232 910
                            </p>
                            <p className="mb-2 flex mt-1">
                                <FontAwesomeIcon icon={faAt} width={20} className='me-3' />     sakibtalukqder07@gmail.com
                            </p> <br />

                            <Image src={Logo} width={250} height={250} alt="Profile Sakib Talukqder" />
                            <Link href={'/'} className="btn btn-ghost normal-case text-4xl My_Logo">
                                --- Sakib Talukqder ---
                            </Link>

                        </div>
                        <div className="mt-4 px-0 md:mb-0 w-full md:w-6/12 md:px-3 lg:px-6">
                            <form className="max-w-md mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-400 bg-gray-25"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-400 bg-gray-25"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-400 bg-gray-25"
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn-primary btn w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <br />
        </div>
    );
};
export default page;