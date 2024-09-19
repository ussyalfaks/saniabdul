import React, { useState } from 'react';
import axios from 'axios';
import { PlusCircle, MinusCircle, User, Users } from 'lucide-react';

const Form = () => {
  const [values, setValues] = useState({
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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/children', values)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        // You might want to add some user feedback here, like a success message
      })
      .catch(error => {
        console.error('Error submitting the data:', error);
        // You might want to add some user feedback here, like an error message
      });
  };

  const handleInputChange = (e, grandchildIndex, greatGrandchildIndex) => {
    const { name, value } = e.target;
    setValues(prevValues => {
      const newValues = { ...prevValues };
      if (grandchildIndex === undefined) {
        newValues[name] = value;
      } else if (greatGrandchildIndex === undefined) {
        newValues.grandchildren[grandchildIndex][name] = value;
      } else {
        newValues.grandchildren[grandchildIndex].children[greatGrandchildIndex][name] = value;
      }
      return newValues;
    });
  };

  const addGrandchild = () => {
    setValues(prevValues => ({
      ...prevValues,
      grandchildren: [
        ...prevValues.grandchildren,
        { name: '', gender: '', status: '', children: [{ name: '', gender: '', status: '' }] }
      ]
    }));
  };

  const addGreatGrandchild = (grandchildIndex) => {
    setValues(prevValues => {
      const newValues = { ...prevValues };
      newValues.grandchildren[grandchildIndex].children.push({ name: '', gender: '', status: '' });
      return newValues;
    });
  };

  const removeGrandchild = (index) => {
    setValues(prevValues => ({
      ...prevValues,
      grandchildren: prevValues.grandchildren.filter((_, i) => i !== index)
    }));
  };

  const removeGreatGrandchild = (grandchildIndex, greatGrandchildIndex) => {
    setValues(prevValues => {
      const newValues = { ...prevValues };
      newValues.grandchildren[grandchildIndex].children = newValues.grandchildren[grandchildIndex].children.filter((_, i) => i !== greatGrandchildIndex);
      return newValues;
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Child</h2>
      
      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
          <User className="mr-2" /> Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
              value={values.gender}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter gender"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={values.dateOfBirth}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={values.status}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 p-3 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select status</option>
              <option value="living" className='text-green-500'>Living</option>
              <option value="deceased" className='text-red-500'>Deceased</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
          <Users className="mr-2" /> Grandchildren
        </h3>
        {values.grandchildren.map((grandchild, grandchildIndex) => (
          <div key={grandchildIndex} className="mb-6 p-4 bg-white rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-medium text-gray-600">Grandchild {grandchildIndex + 1}</h4>
              <button
                type="button"
                onClick={() => removeGrandchild(grandchildIndex)}
                className="text-red-500 hover:text-red-700"
              >
                <MinusCircle size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={grandchild.name}
                onChange={(e) => handleInputChange(e, grandchildIndex)}
                className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Name"
              />
              <input
                type="text"
                name="gender"
                value={grandchild.gender}
                onChange={(e) => handleInputChange(e, grandchildIndex)}
                className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Gender"
              />
              <select
                name="status"
                value={grandchild.status}
                onChange={(e) => handleInputChange(e, grandchildIndex)}
                className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select status</option>
                <option value="living">Living</option>
                <option value="deceased">Deceased</option>
              </select>
            </div>
            
            <div className="mt-4">
              <h5 className="text-md font-medium text-gray-600 mb-2">Great-Grandchildren</h5>
              {grandchild.children.map((greatGrandchild, greatGrandchildIndex) => (
                <div key={greatGrandchildIndex} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    name="name"
                    value={greatGrandchild.name}
                    onChange={(e) => handleInputChange(e, grandchildIndex, greatGrandchildIndex)}
                    className="flex-grow p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="gender"
                    value={greatGrandchild.gender}
                    onChange={(e) => handleInputChange(e, grandchildIndex, greatGrandchildIndex)}
                    className="w-24 p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Gender"
                  />
                  <select
                    name="status"
                    value={greatGrandchild.status}
                    onChange={(e) => handleInputChange(e, grandchildIndex, greatGrandchildIndex)}
                    className="w-28 p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">Status</option>
                    <option value="living">Living</option>
                    <option value="deceased">Deceased</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => removeGreatGrandchild(grandchildIndex, greatGrandchildIndex)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MinusCircle size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addGreatGrandchild(grandchildIndex)}
                className="mt-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusCircle size={14} className="mr-1" /> Add Great-Grandchild
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addGrandchild}
          className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle size={16} className="mr-1" /> Add Grandchild
        </button>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;