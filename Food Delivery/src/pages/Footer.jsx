import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left mb-2 md:mb-0">© 2024 FlavorDash. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="/about" className="mr-4 hover:text-blue-500">About</a>
            <a href="/services" className="mr-4 hover:text-blue-500">Services</a>
            <a href="/contact" className="mr-4 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


