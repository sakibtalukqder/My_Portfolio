import { faAt, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from 'next/link';
import Form from './Form';

const page = () => {
    return (
        <div>
            <div className="md:mx-16 mx-4 my-8">
                <section className="">
                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="md:w-3/4 w-full mt-5 textAnimation">

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

                            <div className=''>
                                <Link href={'/'} className="btn btn-ghost normal-case text-4xl My_Logo" > Sakib Talukqder </Link>
                            </div>

                        </div>
                        {/* Contract Form Here  */}
                        <Form />
                    </div>
                </section>
            </div>
            <br />
        </div>
    );
};
export default page;