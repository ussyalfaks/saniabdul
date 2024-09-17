import React, { useState } from 'react';
import { PlusCircle, MinusCircle, User, Users } from 'lucide-react';
import axios from 'axios';

const EnhancedFamilyForm = () => {
  const [children, setChildren] = useState([
    {
      name: '',
      gender: '',
      dateOfBirth: '',
      status: '',
      grandchildren: [
        {
          name: '',
          gender: '',
          status: '',
          children: [{ name: '', gender: '', status: '' }]
        }
      ]
    }
  ]);

  const handleChildChange = (index, e) => {
    const updatedChildren = [...children];
    updatedChildren[index][e.target.name] = e.target.value;
    setChildren(updatedChildren);
  };

  const handleGrandchildChange = (childIndex, grandchildIndex, e) => {
    const updatedChildren = [...children];
    updatedChildren[childIndex].grandchildren[grandchildIndex][e.target.name] = e.target.value;
    setChildren(updatedChildren);
  };

  const handleGreatGrandchildChange = (childIndex, grandchildIndex, greatGrandchildIndex, e) => {
    const updatedChildren = [...children];
    updatedChildren[childIndex].grandchildren[grandchildIndex].children[greatGrandchildIndex][e.target.name] = e.target.value;
    setChildren(updatedChildren);
  };
  const addGrandchild = (childIndex) => {
    const updatedChildren = [...children];
    updatedChildren[childIndex].grandchildren.push({
      name: '',
      gender: '',
      status: '',
      children: [{ name: '', gender: '', status: '' }]
    });
    setChildren(updatedChildren);
  };

  const addGreatGrandchild = (childIndex, grandchildIndex) => {
    const updatedChildren = [...children];
    updatedChildren[childIndex].grandchildren[grandchildIndex].children.push({
      name: '',
      gender: '',
      status: ''
    });
    setChildren(updatedChildren);
  };

  const addChild = () => {
    setChildren([
      ...children,
      {
        name: '',
        gender: '',
        dateOfBirth: '',
        status: '',
        grandchildren: [
          {
            name: '',
            gender: '',
            status: '',
            children: [{ name: '', gender: '', status: '' }]
          }
        ]
      }
    ]);
  };

  const removeChild = (index) => {
    const updatedChildren = children.filter((_, i) => i !== index);
    setChildren(updatedChildren);
  };

  const removeGrandchild = (childIndex, grandchildIndex) => {
    const updatedChildren = [...children];
    updatedChildren[childIndex].grandchildren = updatedChildren[childIndex].grandchildren.filter((_, i) => i !== grandchildIndex);
    setChildren(updatedChildren);
  };

  const removeGreatGrandchild = (childIndex, grandchildIndex, greatGrandchildIndex) => {
    const updatedChildren = [...children];
    updatedChildren[childIndex].grandchildren[grandchildIndex].children = updatedChildren[childIndex].grandchildren[grandchildIndex].children.filter((_, i) => i !== greatGrandchildIndex);
    setChildren(updatedChildren);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Submitting data:', { Sani: { children } });
    axios.post('http://localhost:3000/Sani', { Sani: { children } }) // Replace '/family' with your actual API endpoint
    .then(response => {
      console.log('Data submitted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error submitting the data:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Family Information Form</h2>

      {children.map((child, childIndex) => (
        <div key={childIndex} className="mb-8 p-6 bg-gray-50 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center">
              <User className="mr-2" /> Child {childIndex + 1}
            </h3>
            {childIndex > 0 && (
              <button
                type="button"
                onClick={() => removeChild(childIndex)}
                className="text-red-500 hover:text-red-700"
              >
                <MinusCircle />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={child.name}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3  block w-full rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter child name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <input
                type="text"
                name="gender"
                value={child.gender}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter gender"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={child.dateOfBirth}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={child.status}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select status</option>
                <option value="living">Living</option>
                <option value="deceased">Deceased</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
              <Users className="mr-2" /> Grandchildren
            </h4>
            {child.grandchildren.map((grandchild, grandchildIndex) => (
              <div key={grandchildIndex} className="mb-4 p-4 bg-white rounded shadow">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-md font-medium text-gray-600">Grandchild {grandchildIndex + 1}</h5>
                  <button
                    type="button"
                    onClick={() => removeGrandchild(childIndex, grandchildIndex)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MinusCircle size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={grandchild.name}
                    onChange={(e) => handleGrandchildChange(childIndex, grandchildIndex, e)}
                    className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="gender"
                    value={grandchild.gender}
                    onChange={(e) => handleGrandchildChange(childIndex, grandchildIndex, e)}
                    className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Gender"
                  />
                  <select
                    name="status"
                    value={grandchild.status}
                    onChange={(e) => handleGrandchildChange(childIndex, grandchildIndex, e)}
                    className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Select status</option>
                    <option value="living">Living</option>
                    <option value="deceased">Deceased</option>
                  </select>
                </div>

                <div className="mt-4">
                  <h6 className="text-sm font-medium text-gray-600 mb-2">Great-Grandchildren</h6>
                  {grandchild.children.map((greatGrandchild, greatGrandchildIndex) => (
                    <div key={greatGrandchildIndex} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        name="name"
                        value={greatGrandchild.name}
                        onChange={(e) => handleGreatGrandchildChange(childIndex, grandchildIndex, greatGrandchildIndex, e)}
                        className="flex-grow p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        name="gender"
                        value={greatGrandchild.gender}
                        onChange={(e) => handleGreatGrandchildChange(childIndex, grandchildIndex, greatGrandchildIndex, e)}
                        className="w-24 p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Gender"
                      />
                      <select
                        name="status"
                        value={greatGrandchild.status}
                        onChange={(e) => handleGreatGrandchildChange(childIndex, grandchildIndex, greatGrandchildIndex, e)}
                        className="w-28 p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      >
                        <option value="">Status</option>
                        <option value="living">Living</option>
                        <option value="deceased">Deceased</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => removeGreatGrandchild(childIndex, grandchildIndex, greatGrandchildIndex)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <MinusCircle size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addGreatGrandchild(childIndex, grandchildIndex)}
                    className="mt-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PlusCircle size={14} className="mr-1" /> Add Great-Grandchild
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addGrandchild(childIndex)}
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusCircle size={16} className="mr-1" /> Add Grandchild
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={addChild}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle size={18} className="mr-2" /> Add Child
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EnhancedFamilyForm;