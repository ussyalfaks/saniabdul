import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Children = () => {
  const [children, setChildren] = useState([]);
  const navigate = useNavigate();

  // Fetch Sani's children data from the JSON API or a file
  useEffect(() => {
    axios.get('http://localhost:3000/Sani') // Replace with your API endpoint or file path
      .then(response => {
        setChildren(response.data.Sani.children);
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  const handleViewDetails = (child) => {
    // Navigate to the ChildrenDetails page with child details
    navigate(`/children/${child.id}`, { state: { child } });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border-2 rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Sani Abdulkadir's Children</h1>
        <p className="text-xl text-gray-600 mt-2">Family Overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children.map((child) => (
          <div key={child.id} className="border-2 rounded-lg p-4 bg-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800">{child.name}</h3>
            <p className={`text-lg ${child.status === 'living' ? 'text-green-700' : 'text-red-700'}`}>
              {child.status === 'living' ? 'Living' : 'Deceased'}
            </p>
            <button
              onClick={() => handleViewDetails(child)}
              className="mt-4 w-full bg-indigo-600 text-white text-xl font-semibold py-2 px-4 hover:bg-indigo-700 transition duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Children;
