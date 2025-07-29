import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Have a question, project idea, or just want to say hi? Fill out the form below and we'll get back to you soon.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
