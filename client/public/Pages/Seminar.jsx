import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Seminar = () => {
  
  const data = {
    Seminars: [
      { title: 'Tech Innovations 2024', videoUrl: 'https://www.youtube.com/embed/0k8kqjQab90', date: '2024-10-01', location: 'Online' },
      { title: 'Future of AI', videoUrl: 'https://www.youtube.com/embed/LWiM-LuRe6w', date: '2024-11-15', location: 'New York, NY' },
      { title: 'Blockchain Disruption', videoUrl: 'https://www.youtube.com/embed/ZF0iCdYkXTM', date: '2024-09-20', location: 'San Francisco, CA' },
      { title: 'Cloud Computing Evolution', videoUrl: 'https://www.youtube.com/embed/_x6ghsI8db8', date: '2024-10-10', location: 'Berlin, Germany' },
      { title: 'Quantum Computing Breakthroughs', videoUrl: 'https://www.youtube.com/embed/X8MZWCGgIb8', date: '2024-12-05', location: 'Online' },
      { title: 'Sustainability and Tech', videoUrl: 'https://www.youtube.com/embed/loG1wPUBLiY', date: '2024-11-30', location: 'Tokyo, Japan' }
    ],
    Workshops: [
      { title: 'Web Development Bootcamp', videoUrl: 'https://www.youtube.com/embed/tVzUXW6siu0', date: '2024-12-05', location: 'San Francisco, CA' },
      { title: 'Cybersecurity Essentials', videoUrl: 'https://www.youtube.com/embed/lpa8uy4DyMo', date: '2024-10-20', location: 'Austin, TX' },
      { title: 'Mobile App Development', videoUrl: 'https://www.youtube.com/embed/HyU4vkZ2NB8', date: '2024-09-15', location: 'London, UK' },
      { title: 'AI in Healthcare', videoUrl: 'https://www.youtube.com/embed/kPlLv6pC3JE', date: '2024-11-05', location: 'Los Angeles, CA' },
      { title: 'Data Science for Beginners', videoUrl: 'https://www.youtube.com/embed/X3paOmcrTjQ', date: '2024-12-01', location: 'Online' },
      { title: 'Machine Learning Mastery', videoUrl: 'https://www.youtube.com/embed/ukzFI9rgwfU', date: '2024-12-10', location: 'Toronto, Canada' }
    ],    
    'Guidance sessions': [
      { title: 'Tech Innovations 2024', videoUrl: 'https://www.youtube.com/embed/0k8kqjQab90', date: '2024-10-01', location: 'Online' },
      { title: 'Future of AI', videoUrl: 'https://www.youtube.com/embed/LWiM-LuRe6w', date: '2024-11-15', location: 'New York, NY' },
      { title: 'Blockchain Disruption', videoUrl: 'https://www.youtube.com/embed/ZF0iCdYkXTM', date: '2024-09-20', location: 'San Francisco, CA' },
      { title: 'Cloud Computing Evolution', videoUrl: 'https://www.youtube.com/embed/_x6ghsI8db8', date: '2024-10-10', location: 'Berlin, Germany' },
      { title: 'Quantum Computing Breakthroughs', videoUrl: 'https://www.youtube.com/embed/X8MZWCGgIb8', date: '2024-12-05', location: 'Online' },
      { title: 'Sustainability and Tech', videoUrl: 'https://www.youtube.com/embed/loG1wPUBLiY', date: '2024-11-30', location: 'Tokyo, Japan' }
        ],
'PM address': [
    { title: 'PM Address on National Security', videoUrl: 'https://www.youtube.com/embed/rcDhvR3oeiE', date: '2024-12-20', location: 'Washington, DC' },
    { title: 'PM Address on Economic Growth', videoUrl: 'https://www.youtube.com/embed/9dPQFA7bT20', date: '2024-12-25', location: 'Los Angeles, CA' },
    { title: 'PM Address on Climate Change', videoUrl: 'https://www.youtube.com/embed/VOqwX-_eUAk?list=RDNSVOqwX-_eUAk', date: '2024-11-10', location: 'Paris, France' },
    { title: 'PM Address on Education Reforms', videoUrl: 'https://www.youtube.com/embed/63386YG8sTU', date: '2024-10-30', location: 'New Delhi, India' },
    { title: 'PM Address on Technology', videoUrl: 'https://www.youtube.com/embed/PEBXyt6Mryw', date: '2024-11-25', location: 'Beijing, China' },
    { title: 'PM Address on Healthcare Initiatives', videoUrl: 'https://www.youtube.com/embed/LLv8iay__FI', date: '2024-12-12', location: 'London, UK' }
  ]
  };

  const [activeSection, setActiveSection] = useState('Seminars');

  const navItems = ['Seminars', 'Workshops', 'Guidance sessions', 'PM address'];

  return (
    <div className="container mx-auto p-4">
      {/* Navigation buttons */}
      <div className="flex justify-between items-center mb-4">
        <nav className="ml-auto flex space-x-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(item)} 
              className={`px-4 py-2 rounded-md ${activeSection === item ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Search bar */}
      <div className="flex items-center mb-4">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search seminars"
            className="w-full p-2 pl-10 border rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Display videos based on the active section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data[activeSection].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pb-[56.25%]"> {/* Aspect ratio for 16:9 */}
              <iframe
                src={item.videoUrl}
                title={item.title}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seminar;


// import React from 'react';

// const Seminar = () => {
//   return (
//     <>
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Seminars & Workshops
//       </h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        
//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Digital Governance & E-Government Solutions</h2>
//           <p className="mt-2">Date: 28th September 2024</p>
//           <p>Time: 9:00 AM - 11:00 AM</p>
//           <a href="https://www.youtube.com/live/0c5zM6r6oGc?feature=shared">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Digital Literacy in Public Sector</h2>
//           <p className="mt-2">Date: 30th September 2024</p>
//           <p>Time: 1:00 PM - 3:00 PM</p>
//           <a href="https://youtu.be/_LElWqXi7Ag?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Modernizing Public Sector IT Infrastructure</h2>
//           <p className="mt-2">Date: 10th October 2024</p>
//           <p>Time: 2:00 PM - 4:00 PM</p>
//           <a href="https://www.youtube.com/live/JWyH_mqz8as?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Effective Communication Strategies for Policy Makers</h2>
//           <p className="mt-2">Date: 12th October 2024</p>
//           <p>Time: 11:00 AM - 1:00 PM</p>
//           <a href="https://youtu.be/svkPgz4AIt0?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Policy Formulation for Smart Cities</h2>
//           <p className="mt-2">Date: 15th October 2024</p>
//           <p>Time: 9:00 AM - 12:00 PM</p>
//           <a href="https://youtu.be/Br5aJa6MkBc?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Cybersecurity in Government Operations</h2>
//           <p className="mt-2">Date: 20th October 2024</p>
//           <p>Time: 3:00 PM - 5:00 PM</p>
//           <a href="https://youtu.be/hXSFdwIOfnE?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Sustainable Development Goals and Governance</h2>
//           <p className="mt-2">Date: 25th October 2024</p>
//           <p>Time: 1:00 PM - 3:00 PM</p>
//           <a href="https://youtu.be/gkIoRVuN5Xs?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Public Sector Financial Management</h2>
//           <p className="mt-2">Date: 30th October 2024</p>
//           <p>Time: 10:00 AM - 12:00 PM</p>
//           <a href="https://youtu.be/OmEB15-5990?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Implementing E-Governance Solutions</h2>
//           <p className="mt-2">Date: 5th November 2024</p>
//           <p>Time: 2:00 PM - 4:00 PM</p>
//           <a href="https://youtu.be/6dMrw55xdkk?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//         <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
//           <h2 className="text-xl font-semibold">Workshop: Implementing Smart Cities 2.0</h2>
//           <p className="mt-2">Date: 5th October 2024</p>
//           <p>Time: 10:00 AM - 4:00 PM</p>
//           <a href="https://youtu.be/hnhB3L0LYHk?feature=shared" target="_blank" rel="noopener noreferrer">
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">WATCH</button>
//           </a>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Seminar;
