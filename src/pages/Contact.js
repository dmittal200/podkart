import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("78phCnoDw_SI66GeM");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_r8pow69', // Replace with your EmailJS service ID
        'template_8wk3byg', // Replace with your EmailJS template ID
        formData
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent!");
          window.location.reload();
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send the message. Please try again.");
          window.location.reload();
        }
      );
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-10 text-center max-w-xl mx-auto">
          We’re here to help! If you have any questions or feedback, please reach out to us.
        </p>

        <form className="bg-white shadow-lg rounded-lg p-10" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      <footer className="mt-10 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} The Podkart. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Contact;
