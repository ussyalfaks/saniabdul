import React, { useState } from 'react';
import { PlusCircle, MinusCircle, User, Users } from 'lucide-react';
import axios from 'axios';

const EnhancedFamilyForm = () => {
  const [values, setValues] = useState({
    children: [
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
    ]
  });

  const handleChildChange = (index, e) => {
    const updatedChildren = [...values.children];
    if (updatedChildren[index]) {
      updatedChildren[index][e.target.name] = e.target.value;
      setValues({ ...values, children: updatedChildren });
    }
  };

  const handleGrandchildChange = (childIndex, grandchildIndex, e) => {
    const updatedChildren = [...values.children];
    if (updatedChildren[childIndex] && updatedChildren[childIndex].grandchildren[grandchildIndex]) {
      updatedChildren[childIndex].grandchildren[grandchildIndex][e.target.name] = e.target.value;
      setValues({ ...values, children: updatedChildren });
    }
  };

  const handleGreatGrandchildChange = (childIndex, grandchildIndex, greatGrandchildIndex, e) => {
    const updatedChildren = [...values.children];
    if (
      updatedChildren[childIndex] &&
      updatedChildren[childIndex].grandchildren[grandchildIndex] &&
      updatedChildren[childIndex].grandchildren[grandchildIndex].children[greatGrandchildIndex]
    ) {
      updatedChildren[childIndex].grandchildren[grandchildIndex].children[greatGrandchildIndex][e.target.name] = e.target.value;
      setValues({ ...values, children: updatedChildren });
    }
  };

  const addGrandchild = (childIndex) => {
    const updatedChildren = [...values.children];
    if (updatedChildren[childIndex]) {
      updatedChildren[childIndex].grandchildren.push({
        name: '',
        gender: '',
        status: '',
        children: [{ name: '', gender: '', status: '' }]
      });
      setValues({ ...values, children: updatedChildren });
    }
  };

  const addGreatGrandchild = (childIndex, grandchildIndex) => {
    const updatedChildren = [...values.children];
    if (
      updatedChildren[childIndex] &&
      updatedChildren[childIndex].grandchildren[grandchildIndex]
    ) {
      updatedChildren[childIndex].grandchildren[grandchildIndex].children.push({
        name: '',
        gender: '',
        status: ''
      });
      setValues({ ...values, children: updatedChildren });
    }
  };

  const addChild = () => {
    setValues({
      ...values,
      children: [
        ...values.children,
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
      ]
    });
  };

  const removeChild = (index) => {
    const updatedChildren = values.children.filter((_, i) => i !== index);
    setValues({ ...values, children: updatedChildren });
  };

  const removeGrandchild = (childIndex, grandchildIndex) => {
    const updatedChildren = [...values.children];
    if (updatedChildren[childIndex]) {
      updatedChildren[childIndex].grandchildren = updatedChildren[childIndex].grandchildren.filter((_, i) => i !== grandchildIndex);
      setValues({ ...values, children: updatedChildren });
    }
  };

  const removeGreatGrandchild = (childIndex, grandchildIndex, greatGrandchildIndex) => {
    const updatedChildren = [...values.children];
    if (
      updatedChildren[childIndex] &&
      updatedChildren[childIndex].grandchildren[grandchildIndex]
    ) {
      updatedChildren[childIndex].grandchildren[grandchildIndex].children = updatedChildren[childIndex].grandchildren[grandchildIndex].children.filter((_, i) => i !== greatGrandchildIndex);
      setValues({ ...values, children: updatedChildren });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/children', values)
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

      {values.children.map((child, childIndex) => (
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
                value={child.name || ''}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3 block w-full rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter child name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <input
                type="text"
                name="gender"
                value={child.gender || ''}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter gender"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={child.dateOfBirth || ''}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={child.status || ''}
                onChange={(e) => handleChildChange(childIndex, e)}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            {child.grandchildren && child.grandchildren.map((grandchild, grandchildIndex) => (
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={grandchild.name || ''}
                      onChange={(e) => handleGrandchildChange(childIndex, grandchildIndex, e)}
                      className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Enter grandchild name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <input
                      type="text"
                      name="gender"
                      value={grandchild.gender || ''}
                      onChange={(e) => handleGrandchildChange(childIndex, grandchildIndex, e)}
                      className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Enter gender"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                      name="status"
                      value={grandchild.status || ''}
                      onChange={(e) => handleGrandchildChange(childIndex, grandchildIndex, e)}
                      className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      <option value="">Select status</option>
                      <option value="living">Living</option>
                      <option value="deceased">Deceased</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="text-md font-medium text-gray-600 mb-2 flex items-center">
                    <Users className="mr-2" /> Great-Grandchildren
                  </h6>
                  {grandchild.children && grandchild.children.map((greatGrandchild, greatGrandchildIndex) => (
                    <div key={greatGrandchildIndex} className="mb-4 p-4 bg-gray-50 rounded shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium text-gray-500">Great-Grandchild {greatGrandchildIndex + 1}</h3>
                        <button
                          type="button"
                          onClick={() => removeGreatGrandchild(childIndex, grandchildIndex, greatGrandchildIndex)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <MinusCircle size={16} />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={greatGrandchild.name || ''}
                            onChange={(e) => handleGreatGrandchildChange(childIndex, grandchildIndex, greatGrandchildIndex, e)}
                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Enter great-grandchild name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Gender</label>
                          <input
                            type="text"
                            name="gender"
                            value={greatGrandchild.gender || ''}
                            onChange={(e) => handleGreatGrandchildChange(childIndex, grandchildIndex, greatGrandchildIndex, e)}
                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Enter gender"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Status</label>
                          <select
                            name="status"
                            value={greatGrandchild.status || ''}
                            onChange={(e) => handleGreatGrandchildChange(childIndex, grandchildIndex, greatGrandchildIndex, e)}
                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          >
                            <option value="">Select status</option>
                            <option value="living">Living</option>
                            <option value="deceased">Deceased</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addGreatGrandchild(childIndex, grandchildIndex)}
                    className="text-blue-500 hover:text-blue-700 flex items-center mt-2"
                  >
                    <PlusCircle className="mr-2" />
                    Add Great-Grandchild
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addGrandchild(childIndex)}
              className="text-blue-500 hover:text-blue-700 flex items-center mt-2"
            >
              <PlusCircle className="mr-2" />
              Add Grandchild
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addChild}
        className="text-blue-500 hover:text-blue-700 flex items-center mb-4"
      >
        <PlusCircle className="mr-2" />
        Add Child
      </button>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default EnhancedFamilyForm;
