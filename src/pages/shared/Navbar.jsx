import React, { useState } from 'react';
import navLogo from '../../assets/logo.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (

    <div className='shadow-md py-6 px-8 flex justify-between items-center drop-shadow-md'>

      <a href="">
        <img className='w-12 hover:scale-105 transition-all' src={navLogo} alt="" />
      </a>

      <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
        <li className='hover:bg-sky-400 rounded-md transition -all cursor-pointer p-3 hover:scale-110 text-sm'>Home</li>
        <li className='hover:bg-sky-400 rounded-md transition -all cursor-pointer p-3 hover:scale-110 text-sm'>Contact</li>
        <li className='hover:bg-sky-400 rounded-md transition -all cursor-pointer p-3 hover:scale-110 text-sm'>Blog</li>
        <li className='hover:bg-sky-400 rounded-md transition -all cursor-pointer p-3 hover:scale-110 text-sm'>Service</li>
      </ul>

      <div className='xl:hidden block text-4xl cursor-pointer'
        onClick={() => setMenu(!menu)}>
        {menu ?
          <i className='bx bx-x '></i> : <i className='bx bx-menu'></i>
        }
      </div>

      <ul className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-start font-semibold text-xs transform transition-transform ${menu ? "opcaity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease,opacity 0.3s ease" }}>
        <li className='hover:bg-sky-400 rounded-md transition-all p-2 cursor-pointer  hover:scale-110 text-sm'>Home</li>
        <li className='hover:bg-sky-400 rounded-md transition-all p-2 cursor-pointer  hover:scale-110 text-sm'>Contact</li>
        <li className='hover:bg-sky-400 rounded-md transition-all p-2 cursor-pointer  hover:scale-110 text-sm'>Blog</li>
        <li className='hover:bg-sky-400 rounded-md transition-all p-2 cursor-pointer  hover:scale-110 text-sm'>Service</li>
      </ul>

    </div>

  );
};

export default Navbar;