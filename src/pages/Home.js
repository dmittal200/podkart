import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaBullhorn, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail('');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main className="p-6 bg-gray-50">
      {/* Welcome Section */}
      <section className="mb-8">
        <div className="relative mb-6">
          <Slider {...sliderSettings}>
            <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-5xl font-bold text-white text-center">Boost Your Business!</h2>
            </div>
            <div className="h-64 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-5xl font-bold text-white text-center">Digital Marketing Solutions</h2>
            </div>
            <div className="h-64 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-5xl font-bold text-white text-center">Expert Website Development</h2>
            </div>
          </Slider>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Podkart: Your All-in-One Social Media Platform
            </h1>
            <div className="flex items-center mb-4">
                <FaBullhorn className="text-blue-500 text-3xl mr-2" />
                <p className="text-gray-700">
                Transform the way your business interacts with the digital world. At Podkart, we empower you to harness the full potential of digital marketing while simplifying your online presence.
                </p>
            </div>
            <div className="flex items-center mb-4">
                <FaChartLine className="text-green-500 text-3xl mr-2" />
                <p className="text-gray-700">
                Connect, share insights, and drive engagement with powerful tools for effective social media marketing. Elevate your brand's visibility and connect with your target audience like never before!
                </p>
            </div>
            <div className="flex items-center mb-4">
                <FaLaptopCode className="text-yellow-500 text-3xl mr-2" />
                <p className="text-gray-700">
                Our web services are tailored to bring your vision to life. From stunning websites to seamless e-commerce solutions, we ensure that your online presence is as impressive as it is functional.
                </p>
            </div>
            <p className="text-gray-700 mb-6">
                Make data-driven decisions with our robust analytics services. Uncover insights that drive strategic marketing actions and focus on what you do best—growing your business.
            </p>
            <p className="text-gray-700 mb-4">
                Join us at Podkart and navigate the digital landscape with confidence. Connect with like-minded professionals and achieve your business goals together!
            </p>
            <a href="#join" className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                Join Us Today
            </a>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Stay Updated!</h2>
        <p className="text-gray-600 mb-6 text-center max-w-xl mx-auto">
          Enter your email below to receive the latest news and updates from Podkart.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email Address"
            className="p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 rounded-r-lg hover:bg-yellow-500 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Reviews Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl flex flex-col items-start">
            <MdFeedback className="text-blue-400 text-3xl mb-2" />
            <p className="text-gray-600">"Fantastic service! My business has seen a great boost in engagement."</p>
            <p className="font-semibold text-gray-800 mt-2">- Alex J.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl flex flex-col items-start">
            <MdFeedback className="text-green-400 text-3xl mb-2" />
            <p className="text-gray-600">"Highly recommend! Their team was professional and attentive to our needs."</p>
            <p className="font-semibold text-gray-800 mt-2">- Sarah W.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl flex flex-col items-start">
            <MdFeedback className="text-yellow-400 text-3xl mb-2" />
            <p className="text-gray-600">"Great results from their digital marketing strategies! We saw immediate improvements."</p>
            <p className="font-semibold text-gray-800 mt-2">- Michael T.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaLaptopCode className="text-blue-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Project 1</h3>
            <p className="text-gray-600">A dynamic e-commerce platform that enhances user engagement and sales.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaChartLine className="text-green-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Project 2</h3>
            <p className="text-gray-600">An innovative marketing campaign that boosted brand awareness and loyalty.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaBullhorn className="text-yellow-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Project 3</h3>
            <p className="text-gray-600">A custom website that showcases our client’s unique offerings and values.</p>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="mt-8 flex flex-col lg:flex-row items-center justify-between">
    {/* Video on the left */}
    <div className="lg:w-1/2 w-full lg:pr-6">
        <iframe
            className="w-full max-w-md mx-auto" // Center and limit width
            height="315"
            src="https://www.youtube.com/embed/n6ELP9htAD0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
    
    {/* Enhanced Right Section */}
    <div className="lg:w-1/2 w-full lg:pl-6 mt-6 lg:mt-0">
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Check Out Our YouTube Channel</h2>
            <p className="text-gray-600 mb-4">
                The PodKart channel is mainly focused on the student community, especially those who want to pursue side hustles or have doubts regarding college life. This channel features podcasts with college pass-outs and current students who have started hustling or launched something during their college journey.
                <br />You will also get to learn a lot about Basic Finance, Side Hustles, Exam Preparation, Entrepreneurship, Personality Development, and Career Opportunities. Additionally, PodKart helps provide various services to support students in these areas.
            </p>
            <a
                href="https://www.youtube.com/@podKart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
                Visit PodKart on YouTube
            </a>
        </div>
    </div>
</section>
    </main>
  );
};

export default Home;
