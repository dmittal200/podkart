import { FaCode, FaDatabase, FaRocket, FaDesktop, FaMobileAlt, FaChartLine, FaShareAlt } from 'react-icons/fa';

const Services = () => {
    return (
        <main className="p-6 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Services</h1>
            <p className="text-center text-gray-700 mb-8 text-lg">
                At PodKart, we offer a comprehensive range of web-related services tailored to meet your specific needs. 
                Our team of experts is dedicated to delivering top-notch solutions that empower your business and enhance your online presence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Web Development */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <FaDesktop className="text-5xl text-blue-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
                    <p className="text-gray-600 mb-4">
                        Our expert team specializes in building responsive and user-friendly websites tailored to your business needs. 
                        Whether you require a simple landing page or a complex web application, we ensure a seamless experience for your users.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Custom website design</li>
                        <li>E-commerce solutions</li>
                        <li>Content Management Systems (CMS)</li>
                    </ul>
                </div>

                {/* Scripting & Automation */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <FaCode className="text-5xl text-green-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Scripting & Automation</h2>
                    <p className="text-gray-600 mb-4">
                        We create custom scripts to automate processes and improve efficiency. Our solutions range from data scraping to task automation, allowing you to focus on what matters most.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Automated workflows</li>
                        <li>Data extraction scripts</li>
                        <li>Custom tool development</li>
                    </ul>
                </div>

                {/* API Development */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <FaRocket className="text-5xl text-red-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">API Development</h2>
                    <p className="text-gray-600 mb-4">
                        Our team develops robust APIs to help you integrate and communicate with various platforms seamlessly. 
                        We ensure your APIs are secure, scalable, and efficient, providing you with the flexibility to grow.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>RESTful and GraphQL APIs</li>
                        <li>Third-party integrations</li>
                        <li>Documentation and support</li>
                    </ul>
                </div>

                {/* Data Science Solutions */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <FaDatabase className="text-5xl text-purple-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Data Science Solutions</h2>
                    <p className="text-gray-600 mb-4">
                        Leverage the power of data with our comprehensive data science solutions. We provide data analysis, machine learning models, and actionable insights to help you make informed decisions.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Predictive analytics</li>
                        <li>Data visualization</li>
                        <li>Custom machine learning solutions</li>
                    </ul>
                </div>

                {/* Mobile App Development */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <FaMobileAlt className="text-5xl text-orange-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Mobile App Development</h2>
                    <p className="text-gray-600 mb-4">
                        We create high-performance mobile applications for both iOS and Android platforms. Our team focuses on creating intuitive and engaging user experiences that keep users coming back.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Cross-platform solutions</li>
                        <li>User experience (UX) design</li>
                        <li>App store deployment</li>
                    </ul>
                </div>

                {/* Digital Marketing Services */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <FaChartLine className="text-5xl text-teal-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Digital Marketing Services</h2>
                    <p className="text-gray-600 mb-4">
                        Enhance your online presence with our digital marketing services. We utilize SEO, social media, and content marketing strategies to drive traffic and engagement to your website.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Search engine optimization (SEO)</li>
                        <li>Social media management</li>
                        <li>Content marketing strategies</li>
                    </ul>
                </div>

                {/* Social Media Services */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <FaShareAlt className="text-5xl text-pink-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Social Media Services</h2>
                    <p className="text-gray-600 mb-4">
                        Our social media services help you build a strong online presence and engage with your audience. We create tailored strategies that resonate with your target market.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Social media strategy development</li>
                        <li>Content creation and curation</li>
                        <li>Analytics and performance tracking</li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
                <p className="text-gray-700 mb-4 text-lg">
                    Our team of experts is committed to delivering high-quality solutions that drive results. We focus on understanding your unique challenges and providing tailored solutions that align with your business goals.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    Ready to elevate your online presence? <strong>Contact us today</strong> to discuss your project and see how we can help!
                </p>
                <p className="text-gray-700 text-lg">
                    If you have any inquiries about our services, please reach out to us at:
                    <br />
                    <strong>Email:</strong> <a href="mailto:ddevansh82@gmail.com" className="text-blue-500">ddevansh82@gmail.com</a>
                    <br />
                    <strong>Phone:</strong> <a href="tel:+919824298174" className="text-blue-500">+91-9824298174</a>
                </p>
            </div>
        </main>
    );
};

export default Services;
