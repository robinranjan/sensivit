import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <header className="bg-transparent shadow-sm">
      <div className="container mx-auto py-4 flex justify-between items-center">
      <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-5xl font-bold text-gray-700">Sensivit</a>
            </Link>
          </div>
        <nav className="flex items-center">
          <ul className="flex">
            <li className="mx-4 font-bold text-gray-600 text-xl hover:text-gray-800">
            {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span>{category.name}</span></Link>
          ))}
            </li>
            
          </ul>
          <div className="ml-4">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-2 rounded-full font-medium"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>

  );
};

export default Header;

