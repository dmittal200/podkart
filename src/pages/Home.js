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
            <div className="h-64 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-5xl font-bold text-white text-center mt-12">Boost Your Business!</h2>
            </div>
            <div className="h-64 flex items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-5xl font-bold text-white text-center mt-12">Digital Marketing Solutions</h2>
            </div>
            <div className="h-64 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-5xl font-bold text-white text-center mt-12">Expert Website Development</h2>
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

      {/* Case Studies and Marketing Achievements Section */}
        <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Case Studies and Marketing Achievements</h2>
        <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl flex flex-col items-start">
            <p className="text-gray-600 mb-4">
            At PodKart, we pride ourselves on delivering outstanding results for our clients through tailored marketing strategies, innovative solutions, and a deep understanding of their business goals. Our case studies showcase the significant improvements in engagement, visibility, and brand recognition that our clients have experienced. 
            <br /><br />
            Whether it’s executing comprehensive digital marketing campaigns, optimizing SEO strategies, or developing personalized websites that resonate with the target audience, we ensure that each project is aligned with the client’s vision and objectives. By leveraging data-driven insights and industry best practices, we’ve helped businesses across various sectors achieve measurable growth and long-term success.
            <br /><br />
            From small businesses to large enterprises, our marketing efforts have led to a tangible increase in conversions, customer retention, and market penetration. Our portfolio of 100+ completed projects demonstrates our commitment to excellence and the positive impact we’ve made on businesses.
            </p>
            
            {/* Button to LinkedIn Case Study */}
            <a 
            href="https://www.linkedin.com/in/tarunintrane/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
            Review Our Case Study
            </a>
        </div>
        </section>

      {/* Projects Section */}
        <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Projects</h2>
        <p className="text-gray-600 mb-6">
            At PodKart, we have successfully completed over 100+ projects, ranging from assignments for college students to professional website development for creators. Our team has delivered high-quality solutions for Mechanical, Computer Science, and other engineering disciplines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaLaptopCode className="text-blue-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Mechanical Engineering Projects</h3>
            <p className="text-gray-600">
                Delivered complex mechanical design and simulation projects, helping students achieve outstanding results in their coursework.
            </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaChartLine className="text-green-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Computer Science Projects</h3>
            <p className="text-gray-600">
                Provided solutions for advanced algorithms, software development, and AI/ML projects for computer science students.
            </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaBullhorn className="text-yellow-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Assignment Services</h3>
            <p className="text-gray-600">
                Assisted students in completing assignments across various subjects, including business management, engineering, and humanities.
            </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaLaptopCode className="text-blue-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Web Development for Creators</h3>
            <p className="text-gray-600">
                Designed and developed websites for content creators and entrepreneurs, helping them establish their online presence and grow their brands.
            </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaChartLine className="text-green-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Marketing and Branding</h3>
            <p className="text-gray-600">
                Launched successful marketing and branding campaigns that significantly increased client visibility and engagement.
            </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-shadow hover:shadow-xl">
            <FaBullhorn className="text-yellow-500 text-3xl mb-2" />
            <h3 className="font-semibold text-gray-800">Custom Project Solutions</h3>
            <p className="text-gray-600">
                Tailored project solutions to meet unique client requirements across a variety of disciplines and industries.
            </p>
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
