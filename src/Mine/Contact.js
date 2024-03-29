import React from "react";
import "./contact.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
const Contact = ({ }) => {
    return (

        <div>
            <Navbar />
            <section class=" bg-[#ffffff]" id="contact">
                <img src='https://ik.imagekit.io/mctozv7td/meena/2.jpg?updatedAt=1711471154963' alt="Hero Image" width="1600" height="900" className="md:mt-[0rem] mt-[4rem]" />

                <div class="mx-auto max-w-7xl px-4 py-16  sm:px-6 lg:px-8 lg:py-20">
                    <div class="mb-4">
                        <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p class="text-base font-semibold uppercase tracking-wide text-[#b1704b] md:mt-0 mt-[2rem]   dark:text-[#b1704b] ">
                                Contact
                            </p>
                            <h2
                                class="font-heading mb-4 font-bold tracking-tight text-[#b1704b]  dark:text-[#b1704b]  text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            {/* <p class="mx-auto mt-4 max-w-3xl text-xl text-black dark:text-black">In hac habitasse platea */}
                            {/* dictumst */}
                            {/* </p> */}
                        </div>
                    </div>
                    <div class="flex items-stretch justify-center">
                        <div class="grid md:grid-cols-2">
                            <div class="h-full pr-6">
                                <p class="mt-3 mb-12 text-lg text-black dark:text-black">
                                    <span className="font-semibold text-xl  text-[#b1704b]">Mirpur Jewellers UK</span>,we merge heritage with contemporary craftsmanship, offering timeless pieces that resonate with elegance and sophistication. Discover our curated collection, where every creation embodies the essence of beauty and tradition.
                                </p>
                                <ul class="mb-6 md:mb-0">
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
                                            <p class="text-black dark:text-black">1230 Maecenas Street Donec Road</p>
                                            <p class="text-black dark:text-black">New York, EEUU</p>
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
                                            <p class="text-black dark:text-black">Mobile: +1 (123) 456-7890</p>
                                            <p class="text-black dark:text-black">Mail: tailnext@gmail.com</p>
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
                            <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 class="mb-4 text-2xl font-bold dark:text-grey">Ready to Get Started?</h2>
                                <form id="contactForm">
                                    <div class="mb-6">
                                        <div class="mx-0 mb-1 sm:mb-4">
                                            <div class="mx-0 mb-1 sm:mb-4">
                                                <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                                            </div>
                                            <div class="mx-0 mb-1 sm:mb-4">
                                                <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                            </div>
                                        </div>
                                        <div class="mx-0 mb-1 sm:mb-4">
                                            <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="w-full bg-light text-black px-6 py-3 font-xl sm:mb-0">Send Message</button>
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
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    );
};

export default Contact;