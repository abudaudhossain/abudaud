import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import './ContactUs.css';
// import fiverIcon from "../../../fiverr_icon.svg";

const ContactUs = () => {
    console.log()
    return (
        <section id="contact" className='container mx-auto md:p-8 p-3'>
            <h1 className="text-4xl sm:text-6xl font-bold text-white pb-2">Contacts Me.</h1>
            <p className="max-w-[1000px] text-xl">If I can be of assistance, please do not hesitate to contact me <br/>
And I will give you my best.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 pt-8'>
                <div className='pb-4 col-span-2'>
                    <form action="https://formsubmit.co/dbf74f829bccac24fc1b8f59a048d6e9 " method="POST">
                        <div>

                            <input type="hidden" name="_next" value="https://abudaud.vercel.app/" />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="name" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className='w-full'>

                            <input className="py-3 mt-5 w-[100%] text-sm font-medium text-center text-white rounded-lg bg-[#05C89A]  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 " type="submit" />
                        </div>
                    </form>
                </div>
                <div className=''>
                    <div>
                        <h1 className='font-bold'>Email</h1>
                        <p className='text-gray-500 dark:text-gray-400 font-semibold pb-2'>abudaud.web@gmail.com</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>Phone</h1>
                        <p className='text-gray-500 dark:text-gray-400 font-semibold pb-2'>01994589676</p>
                    </div>
                    <div>
                        <h1 className='font-bold'>Address</h1>
                        <p className='text-gray-500 dark:text-gray-400 font-semibold pb-2'>Dhaka, Bangladesh</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;