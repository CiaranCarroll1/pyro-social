import React from 'react';
import { GoFlame } from 'react-icons/go';

const Navbar: React.FC = () => {
  return (
    <div className="w-full flex justify-between bg-black p-3">
      <div></div>
      <h1 className="text-orange-500 text-2xl flex items-center gap-2">
        <GoFlame />
        Pyro
      </h1>
      <div></div>
    </div>
  );
};

export default Navbar;
