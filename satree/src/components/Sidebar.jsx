import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/logo.png'

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`flex font-mono flex-col items-center bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-30`}>
   
    <div className="flex items-center flex-col justify-between mb-10 px-4">
      <img src={Profile} className='w-32 h-36 rounded-2xl' alt="" />
      <h4 className="text-md text-center my-2 font-mono">SA Family</h4>
    </div>
    <nav className=' '>
      <Link to="/" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>Dashboard</Link>
      <Link to="/Children" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>children</Link>
      <Link to="/ChildrenDetails" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>ChildrenDetails</Link>
      <Link to="/FamilyForm" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>FamilyForm</Link>
      {/* <Link to="/gallery" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>About</Link>
      <Link to="/security" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>Contact</Link>
      <Link to="/visits" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>Visitas</Link>
      <Link to="/recommendations" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>Recomendaciones</Link>
      <Link to="/documents" className="block py-4 text- px-4 rounded-2xl transition duration-200 hover:bg-gray-700" onClick={toggleSidebar}>Documentos</Link> */}
    </nav>
  </div>
);

export default Sidebar;