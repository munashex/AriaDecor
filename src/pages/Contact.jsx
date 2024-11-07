import ContactCarousel from "../components/ContactCarousel";
import { IoMdArrowRoundForward } from "react-icons/io";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

const Contact = () => {
  const form = useRef();
  const { theme } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_ID,
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log(error);
          toast.error('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className="mt-10 md:mt-14 lg:mt-16">
      <ContactCarousel />
      <div className="text-center mt-10 md:mt-12 lg:mt-14">
        <h1 className="text-2xl md:text-3xl font-bold">Get in Touch</h1>
        <p className="mt-2 md:mt-3">Fill out the form and we'll get back to you as soon as possible.</p>
      </div>
      <form className="max-w-2xl mx-auto mt-10 md:mt-12 lg:mt-14 space-y-6 lg:max-w-4xl" ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              className={`w-full p-3 rounded-md border ${theme === 'dark' ? 'bg-[#2E2D2D] border-[#242323]' : 'border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-1 focus:ring-blue-500`}
              placeholder="Enter your name"
              name="user_name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium  mb-1">Email</label>
            <input
              type="email"
              id="email"
              className={`w-full p-3 rounded-md border ${theme === 'dark' ? 'bg-[#2E2D2D] border-[#242323]' : 'border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-1 focus:ring-blue-500`}
              placeholder="Enter your email"
              name="user_email"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">Message</label>
          <textarea
            id="message"
            className={`w-full p-3 rounded-md border ${theme === 'dark' ? 'bg-[#2E2D2D] border-[#242323]' : 'border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-1 focus:ring-blue-500`}
            placeholder="Enter your message"
            rows="5"
            required
            name="message"
          ></textarea>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="inline-flex items-center text-white font-medium bg-blue-500 hover:bg-blue-600 p-3 px-6 rounded-md transition-colors duration-300"
          >
            <IoMdArrowRoundForward size={20} className="mr-2" />
            Submit
          </button>
        </div>
      </form>
      <ToastContainer limit={1} />
    </div>
  );
};

export default Contact;
