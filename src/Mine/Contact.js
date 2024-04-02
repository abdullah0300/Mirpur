import React, { useState } from "react";
import "./contact.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import WhatsAppButton from "../Whatsapp";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mkndqqnr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data); // Handle success or error response
            setSubmissionSuccess(true);
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="">
                <section className="bg-[#ffffff] " id="contact">
                    <div className="h-[4rem] md:h-[0rem]"></div>
                    <img src='https://ik.imagekit.io/mctozv7td/meena/Beige%20Aesthetic%20Handmade%20Accessories%20Etsy%20Shop%20Cover%20(1).png?updatedAt=1712051781033' alt="Hero Image" width="1600" height="900" className="" />

                    <div className="mx-auto  max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="mb-4">
                            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                {/* <p className="text-base font-semibold uppercase tracking-wide text-[#b1704b] md:mt-0 dark:text-[#b1704b] ">
                                    Contact
                                </p> */}
                                <h2 className="font-heading mb-4 font-bold tracking-tight text-[#b1704b] dark:text-[#b1704b] text-3xl sm:text-5xl">
                                    Get in Touch
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-stretch justify-center">
                            <div className="grid md:grid-cols-2">
                                <div className="h-full pr-6">
                                    <p className="mt-3 mb-12 text-lg text-black dark:text-black md:w-[30rem] w-[15rem] ml-[3rem]">
                                        <span className="font-semibold md:text-2xl text-xl text-center items-center  text-[#a58b26]">Mirpur Jewellers Derby</span>, we merge heritage with contemporary craftsmanship, offering timeless pieces that resonate with elegance and sophistication. Discover our curated collection, where every creation embodies the essence of beauty and tradition.
                                    </p>
                                    <ul class="mb-6 md:mb-0 ml-[3rem]">
                                        <li class="flex">
                                            <div class="flex h-10 w-10 mt-4 items-center justify-center rounded bg-[#b1704b] text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="h-6 w-6">
                                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                    <path
                                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div class="ml-4 mb-4">
                                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                                </h3>
                                                <p class="text-black dark:text-black">12 Pear Tree Road, </p>
                                                <p class="text-black dark:text-black">Derby, United Kingdom</p>
                                            </div>
                                        </li>
                                        <li class="flex">
                                            <div class="flex h-10 mt-4 w-10 items-center justify-center rounded bg-[#b1704b] text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="h-6 w-6">
                                                    <path
                                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                    </path>
                                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                                </svg>
                                            </div>
                                            <div class="ml-4 mb-4">
                                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                                </h3>
                                                <p class="text-black dark:text-black">Mobile: <a href="tel:+441332200205">+44 133 2200205</a></p>
                                                <p class="text-black dark:text-black">Mail: <a href="mailto:frazmohammed241283@hotmail.com"> frazmohammed241283@hotmail.com</a></p>
                                            </div>
                                        </li>
                                        <li class="flex">
                                            <div class="flex h-10 mt-4 w-10 items-center justify-center rounded bg-[#b1704b]  text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="h-6 w-6">
                                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                    <path d="M12 7v5l3 3"></path>
                                                </svg>
                                            </div>
                                            <div class="ml-4 mb-4">
                                                <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                                    hours</h3>
                                                <p class="text-black dark:text-black">Monday - Friday: 08:00 - 17:00</p>
                                                <p class="text-black dark:text-black">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card h-fit max-w-6xl md:mt-5 p-5 md:p-10" id="form">
                                    <h2 className="mb-3 text-2xl font-bold dark:text-grey">Ready to Get Started?</h2>
                                    <form id="contactForm" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm dark:text-gray-300 sm:mb-0" name="name" value={formData.name} onChange={handleChange} />
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm dark:text-gray-300 sm:mb-0" name="email" value={formData.email} onChange={handleChange} />
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <label htmlFor="phone" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        autoComplete="tel"
                                                        placeholder="Your phone number"
                                                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm dark:text-gray-300 sm:mb-0"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                <textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-1 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm dark:text-gray-300 sm:mb-0" value={formData.message} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" disabled={isSubmitting} className="w-full bg-light text-black px-6 py-2 font-xl sm:mb-0">
                                                {isSubmitting ? "Submitting..." : "Send Message"}
                                            </button>
                                            {submissionSuccess && <p className="text-green-500 mt-2">Thank you for your message!</p>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="map_sec mb-4 ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <div class="map_inner">
                                    <div class="map_bind">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.291153042052!2d-1.4789788855769126!3d52.90862577110699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f0dfebe8cdf5%3A0x4860f580183079af!2sMirpur%20Jewellers!5e0!3m2!1sen!2suk!4v1648645326090!5m2!1sen!2suk" width="100%" height="450" allowfullscreen="100" loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Contact;
