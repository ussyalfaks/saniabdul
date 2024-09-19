import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChildCard = ({ child, onViewDetails }) => (
  <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col h-full">
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{child.name}</h3>
    <p className={`text-lg ${child.status === 'living' ? 'text-green-700' : 'text-red-700'} mb-4`}>
      {child.status === 'living' ? 'Living' : 'Deceased'}
    </p>
    <button
      onClick={() => onViewDetails(child)}
      className="mt-auto w-full bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
    >
      View Details
    </button>
  </div>
);

const Children = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/children');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching the data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (child) => {
    navigate(`/children/${child.id}`, { state: { child } });
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Sani Abdulkadir's Children</h1>
        <p className="text-xl text-gray-600 mt-2">Family Overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((child) => (
          <ChildCard key={child.id} child={child} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default Children;