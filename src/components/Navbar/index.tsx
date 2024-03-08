'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white'>
      <span className='logo text-2xl font-bold'>Typescript</span>
      <div className="links space-x-4">
        <Link href="/" className='hover:text-gray-300'>Homepage</Link>
      </div>
    </div>
  );
};

export default Navbar;
