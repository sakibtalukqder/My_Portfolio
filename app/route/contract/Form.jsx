"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_gs5o044', 'template_ugqqp2l', form.current, 'NNWZ0KD_CFJ8bJ6Rx')
            .then((result) => {
                console.log(result.text);
                toast.success("Email Sent Successfully");
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });

            }, (error) => {
                console.log(error.text);
                toast.error("Error detected while senting Email .......!!");
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <div className="mt-4 px-0 md:mb-0 w-full md:w-6/12 md:px-3 lg:px-6">
            <form ref={form} className="max-w-md mx-auto" onSubmit={sendEmail}>
                {/* ... rest of your form code ... */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-400 bg-gray-25"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
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
                        value={formData.subject}
                        onChange={handleInputChange}
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
                        value={formData.message}
                        onChange={handleInputChange}
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
    );
};

export default Form;