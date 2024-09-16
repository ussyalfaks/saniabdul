
// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import Layout from './components/Layout';
// // // import Dashboard from './pages/Dashboard';
// // // import Children from './pages/Children';
// // // import  ChildrenDetails from './pages/ChildrenDetails';


// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Layout>
// // //         <Routes>
// // //           <Route path="/" element={<Dashboard />} />
// // //           <Route path="/Children" element={<Children />} />
// // //           <Route path="/ChildrenDetails" element={<ChildrenDetails />} />
// // //         </Routes>
// // //       </Layout>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// // import React, { useState } from 'react';
// // import { Users, Heart, AlertCircle } from 'lucide-react';
// // import Image from '../assets/pro.png'

// // const ChildrenDetails = () => {
  
// //      const [activeTab, setActiveTab] = useState('all');

// // const children = [
// //   { name: 'Amina', image: Image , status: 'deceased' },
// //   { name: 'Sadiya', image: Image , status: 'living' },
// //   { name: 'Usman', image: Image , status: 'living' },
// //   { name: 'Fatima', image: Image , status: 'living' },
// //   { name: 'Aisha', image: Image , status: 'living' },
// // ];

// // const filteredChildren = activeTab === 'all' 
// //   ? children 
// //   : children.filter(child => child.status === activeTab);

// // return (

// //   <div className="max-w-3xl mx-auto bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6">
// //     <div className="text-center mb-8">
      
// //       <h1 className="text-4xl font-bold text-gray-800">Usman Alfaki</h1>
// //       <p className="text-xl text-gray-600 mt-2"> Overview</p>
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //       <StatCard icon={<Users size={32} />} title="Total Children"  value={children.length} color="text-green-800" />
// //       <StatCard icon={<Heart size={32} />} title="Living"  value={children.filter(c => c.status === 'living').length} color="text-green-700" />
// //       <StatCard icon={<AlertCircle size={32} />} title="Deceased"  value={children.filter(c => c.status === 'deceased').length} color="text-red-700" />
// //     </div>

// //     <div className="mb-6">
// //       <h2 className="text-3xl font-bold text-gray-800 mb-4">Children</h2>
// //       <div className="flex space-x-4 mb-4">
// //         <TabButton active={activeTab === 'all'} onClick={() => setActiveTab('all')}>All</TabButton>
// //         <TabButton active={activeTab === 'living'} onClick={() => setActiveTab('living')}>Living</TabButton>
// //         <TabButton active={activeTab === 'deceased'} onClick={() => setActiveTab('deceased')}>Deceased</TabButton>
// //       </div>
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //       {filteredChildren.map((child, index) => (
// //         <div key={index} className="flex items-center bg-gray-100 rounded-lg p-4 border-2 border-gray-300">
// //           <img src={child.image} alt={child.name} className="w-20 h-20 rounded-full mr-4 border-2 border-blue-500" />
// //           <div>
// //             <h3 className="text-2xl font-semibold text-gray-800">{child.name}</h3>
// //             <p className={`text-lg ${child.status === 'living' ? 'text-green-700' : 'text-red-700'}`}>
// //               {child.status === 'living' ? 'Living' : 'Deceased'}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );
// // };

// // const StatCard = ({ icon, title, value, color }) => (
// // <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-300 text-center">
// //   <div className={`${color} mb-2 flex justify-center`}>{icon}</div>
// //   <p className={`text-3xl font-bold ${color}`}>{value}</p>
// //   <p className="text-xl text-gray-800 mt-2">{title}</p>
// // </div>
// // );

// // const TabButton = ({ children, active, onClick }) => (
// // <button 
// //   onClick={onClick}
// //   className={`px-6 py-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
// //     active 
// //       ? 'bg-blue-500 text-white' 
// //       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
// //   }`}
// // >
// //   {children}
// // </button>
// // );

  
// // export default ChildrenDetails


// import React, { useState } from 'react';
// import { Users, Heart, AlertCircle, Eye } from 'lucide-react';
// import Image from '../assets/pro.png'

// const Children = () => {
  
//      const [activeTab, setActiveTab] = useState('all');

// const children = [
//   { name: 'Amina', image: Image , status: 'deceased' },
//   { name: 'Sadiya', image: Image , status: 'living' },
//   { name: 'Usman', image: Image , status: 'living' },
//   { name: 'Fatima', image: Image , status: 'living' },
//   { name: 'Aisha', image: Image , status: 'living' },
// ];

// const filteredChildren = activeTab === 'all' 
//   ? children 
//   : children.filter(child => child.status === activeTab);

// return (

//   <div className="max-w-4xl mx-auto bg-white border-2 rounded-lg shadow-lg p-6">
//     <div className="text-center mb-8">
//       <h1 className="text-4xl font-bold text-gray-800">Sani Abdulkadir</h1>
//       <p className="text-xl text-gray-600 mt-2">Family Overview</p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//       <StatCard icon={<Users size={32} />} title="Total Children"  value={children.length} color="text-green-800" />
//       <StatCard icon={<Heart size={32} />} title="Living"  value={children.filter(c => c.status === 'living').length} color="text-green-700" />
//       <StatCard icon={<AlertCircle size={32} />} title="Deceased"  value={children.filter(c => c.status === 'deceased').length} color="text-red-700" />
//     </div>

//     <div className="mb-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Children</h2>
//       <div className="flex space-x-4 mb-4">
//         <TabButton active={activeTab === 'all'} onClick={() => setActiveTab('all')}>All</TabButton>
//         <TabButton active={activeTab === 'living'} onClick={() => setActiveTab('living')}>Living</TabButton>
//         <TabButton active={activeTab === 'deceased'} onClick={() => setActiveTab('deceased')}>Deceased</TabButton>
//       </div>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {filteredChildren.map((child, index) => (
//        <div className='border-2  rounded-lg'>
//          <div key={index} className="flex items-center bg-gray-100  p-4 ">
//           <img src={child.image} alt={child.name} className="w-20 h-20 rounded-full mr-4 border-2 border-blue-500" />
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800">{child.name}</h3>
//             <p className={`text-lg ${child.status === 'living' ? 'text-green-700' : 'text-red-700'}`}>
//               {child.status === 'living' ? 'Living' : 'Deceased'}
//             </p>
//           </div>
//         </div>
//         <button 
//       className="w-full bg-indigo-600 text-white text-xl font-semibold py-4 px-6 hover:bg-indigo-700 transition duration-300 flex items-center justify-center" >
//       <Eye size={24} className="mr-2" />
//       View Profile
//     </button>
//        </div>
//       ))}
//     </div>
//   </div>
// );
// };

// const StatCard = ({ icon, title, value, color }) => (
// <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-300 text-center">
//   <div className={`${color} mb-2 flex justify-center`}>{icon}</div>
//   <p className={`text-3xl font-bold ${color}`}>{value}</p>
//   <p className="text-xl text-gray-800 mt-2">{title}</p>
// </div>
// );

// const TabButton = ({ children, active, onClick }) => (
// <button 
//   onClick={onClick}
//   className={`px-6 py-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//     active 
//       ? 'bg-blue-500 text-white' 
//       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//   }`}
// >
//   {children}
// </button>
// );

  
// export default Children