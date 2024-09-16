import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ChildrenDetails = () => {
  const location = useLocation();
  const { child } = location.state;
  const [selectedGrandchild, setSelectedGrandchild] = useState(null);

  const handleGrandchildClick = (grandchild) => {
    setSelectedGrandchild(grandchild);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border-2 rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold text-gray-800">Details for {child.name}</h2>
      <p><strong>Gender:</strong> {child.gender}</p>
      <p><strong>Date of Birth:</strong> {child.dateOfBirth}</p>
      <p><strong>Status:</strong> {child.status === 'living' ? 'Living' : 'Deceased'}</p>

      <h3 className="text-2xl font-semibold mt-6">Grandchildren:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {child.grandchildren && child.grandchildren.length > 0 ? (
          child.grandchildren.map((grandchild, index) => (
            <div
              key={index}
              onClick={() => handleGrandchildClick(grandchild)}
              className="cursor-pointer border-2 rounded-lg p-4 bg-gray-100 shadow-md hover:bg-gray-200 transition duration-300"
            >
              <h4 className="text-xl font-bold">{grandchild.name}</h4>
              <p><strong>Gender:</strong> {grandchild.gender}</p>
              <p><strong>Status:</strong> {grandchild.status === 'living' ? 'Living' : 'Deceased'}</p>
            </div>
          ))
        ) : (
          <p>No grandchildren available.</p>
        )}
      </div>

      {selectedGrandchild && (
        <div className="mt-8 p-6 bg-gray-50 border-2 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Details for {selectedGrandchild.name}</h3>
          <p><strong>Gender:</strong> {selectedGrandchild.gender}</p>
          <p><strong>Status:</strong> {selectedGrandchild.status === 'living' ? 'Living' : 'Deceased'}</p>

          <h4 className="text-xl font-semibold mt-4">Children (Great-Grandchildren of Sani):</h4>
          {selectedGrandchild.children && selectedGrandchild.children.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedGrandchild.children.map((greatGrandchild, index) => (
                <div
                  key={index}
                  className="border-2 rounded-lg p-4 bg-gray-100 shadow-md hover:bg-gray-200 transition duration-300"
                >
                  <h5 className="text-lg font-bold">{greatGrandchild.name}</h5>
                  <p><strong>Gender:</strong> {greatGrandchild.gender}</p>
                  <p><strong>Status:</strong> {greatGrandchild.status === 'living' ? 'Living' : 'Deceased'}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No great-grandchildren available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ChildrenDetails;
