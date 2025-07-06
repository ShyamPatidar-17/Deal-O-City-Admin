import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
           <Navbar/>
      {/* Logo */}
      <div className="mb-10 text-center">
        <img src={assets.logo} alt="Deal-O-City Logo" className="h-20 mx-auto" />
        <h1 className="text-3xl font-bold mt-4 text-gray-800">Admin Panel</h1>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-md">
        <Link to="/add" className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-3 rounded-xl shadow text-center transition">
          Add
        </Link>
        <Link to="/list" className="bg-green-600 hover:bg-green-700 text-white text-xl py-3 rounded-xl shadow text-center transition">
          List
        </Link>
        <Link to="/orders" className="bg-yellow-500 hover:bg-yellow-600 text-white text-xl py-3 rounded-xl shadow text-center transition">
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Home;
