import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-500 mb-4">Lets Talk</h1>
          <h1 className="text-5xl font-bold text-gray-600 mb-10">Healthy Science</h1>
          <p className="text-2xl text-gray-700">Get latest news & updates</p>
          <p className="text-2xl text-gray-700">related to health science in a brief </p>
          <p className="text-2xl text-gray-700 mb-10">Chewable contents within 5 min.</p>
          <form className="flex items-center" action="https://formsubmit.co/isensivit@gmail.com" method="POST" >
<input
             type="email"
             name="email"
             className="py-4 px-6 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
             placeholder="Your email"
             required
             
           />
           <input type="hidden" name="_autoresponse" value="your custom message"></input>
<button
             type="submit"
             className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-4 px-8 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
           >
Subscribe
</button>
</form>
        </div>
        <div className="md:w-1/2 mb-12">
          <img src="https://picsum.photos/700/500" alt="Hero" className="rounded-lg shadow-lg"/>
        </div>
      </main>
    {children}
    <Footer />
  </>
);

export default Layout;
