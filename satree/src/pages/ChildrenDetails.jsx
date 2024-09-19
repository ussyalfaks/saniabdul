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
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-8 mt-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">{child.name}'s Details</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
        <div className="mt-4">
          <p className="text-lg text-gray-700"><span className="font-semibold">Name:</span> {child.name}</p>
          <p className="text-lg text-gray-700"><span className="font-semibold">Gender:</span> {child.gender}</p>
          <p className="text-lg text-gray-700"><span className="font-semibold">Date of Birth:</span> {child.dateOfBirth}</p>
          <p className={`text-lg ${child.status === 'living' ? 'text-green-600' : 'text-red-600'}`}>
            <span className="font-semibold">Status:</span> {child.status === 'living' ? 'Living' : 'Deceased'}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Grandchildren</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {child.grandchildren && child.grandchildren.length > 0 ? (
            child.grandchildren.map((grandchild, index) => (
              <div
                key={index}
                onClick={() => handleGrandchildClick(grandchild)}
                className="cursor-pointer border-2 border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 shadow-sm transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800">{grandchild.name}</h3>
                <p className="text-md text-gray-600"><span className="font-semibold">Gender:</span> {grandchild.gender}</p>
                <p className={`text-md ${grandchild.status === 'living' ? 'text-green-600' : 'text-red-600'}`}>
                  <span className="font-semibold">Status:</span> {grandchild.status === 'living' ? 'Living' : 'Deceased'}
                </p>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-700">No grandchildren available.</p>
          )}
        </div>
      </div>

      {selectedGrandchild && (
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Details for {selectedGrandchild.name}</h2>
          <p className="text-lg text-gray-700 mt-4"><span className="font-semibold">Gender:</span> {selectedGrandchild.gender}</p>
          <p className={`text-lg mt-2 ${selectedGrandchild.status === 'living' ? 'text-green-600' : 'text-red-600'}`}>
            <span className="font-semibold">Status:</span> {selectedGrandchild.status === 'living' ? 'Living' : 'Deceased'}
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Children (Great-Grandchildren of Sani)</h3>
            {selectedGrandchild.children && selectedGrandchild.children.length > 0 ? (
              <div className="mt-4 space-y-4">
                {selectedGrandchild.children.map((greatGrandchild, index) => (
                  <div key={index} className="p-4 bg-gray-100 border rounded-lg shadow-sm">
                    <p className="text-md font-semibold text-gray-800">{greatGrandchild.name}</p>
                    <p className="text-md text-gray-600">Gender: {greatGrandchild.gender}</p>
                    <p className={`text-md ${greatGrandchild.status === 'living' ? 'text-green-600' : 'text-red-600'}`}>
                      Status: {greatGrandchild.status === 'living' ? 'Living' : 'Deceased'}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-700">No great-grandchildren available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChildrenDetails;
