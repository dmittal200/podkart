const Contact = () => {
    return (
      <main className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-10 text-center max-w-xl mx-auto">
            We’re here to help! If you have any questions or feedback, please reach out to us.
          </p>
          
          <form className="bg-white shadow-lg rounded-lg p-10">
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
  