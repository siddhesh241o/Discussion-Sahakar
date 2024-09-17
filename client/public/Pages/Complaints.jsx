import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const Complaints = () => {
  return <>
    <div className="mx-auto p-4	">
      <div className="flex gap-20 justify-around">
        <h1 className='font-medium	text-xl'>Grievances List</h1>
        <button className="ml-100 border rounded-md p-1 bg-gray-300	px-10" >Apply Fliter</button>
        <div className="flex align-center justify-center gap-5">
          <input type="text" placeholder='Search...' className='border rounded-md p-1'/>
        <IoSearchSharp size={30} className='cursor-pointer'/>
        </div>
        

      </div>
      <br />
      <hr />


      <table className='w-full mx-auto'>
        <tr className='bg-slate-400	h-20'>
          <th>C-id</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Platform</th>
          <th>Location</th>
          <th>Change Status</th>
          <th>Forward</th>
          <th>Edit</th>
        </tr>

      <tr className='border '>
        <td>C1234</td>
        <td>Santosh Kumar Bhatiya</td>
        <td>Street Lights not working</td>
        <td>17/2/2024</td>
        <td>19/6/2024</td>
        <td>Assigned</td>
        <td>Mobile App</td>
        <td>Baner,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      <tr className='border '>
        <td>D213S</td>
        <td>Sameer Bhaokare</td>
        <td>Sewer System jammed</td>
        <td>11/5/2024</td>
        <td>9/6/2024</td>
        <td>Assigned</td>
        <td>Web App</td>
        <td>Wagholi,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      <tr className='border '>
        <td>K2321</td>
        <td>Prasad Mahankal</td>
        <td>bad Conditon Roads </td>
        <td>9/3/2024</td>
        <td>6/4/2024</td>
        <td>Assigned</td>
        <td>Sahakara</td>
        <td>Akurdi,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      <tr className='border '>
        <td>F1211</td>
        <td>Siddhesh Patil</td>
        <td>Bad Condition of public Toilets</td>
        <td>2/5/2024</td>
        <td>1/6/2024</td>
        <td>Assigned</td>
        <td>Mobile App</td>
        <td>Nigdi,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      <tr className='border '>
        <td>O23342</td>
        <td>Payal Pawar</td>
        <td>Street Lights not working</td>
        <td>1/2/2024</td>
        <td>9/3/2024</td>
        <td>Pending</td>
        <td>Sahakara</td>
        <td>Ravet,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      <tr className='border '>
        <td>LL2452</td>
        <td>Pranav Patil</td>
        <td>Sewer System jammed</td>
        <td>1/6/2024</td>
        <td>30/7/2024</td>
        <td>Pending</td>
        <td>Sahakara</td>
        <td>Baner,Pune</td>
        <td className='text-lime-800 cursor-pointer	' >Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      </table>




      <h1 className='text-center text-xl font-medium my-5'>Forwarded Complaints</h1>
      <table className='mx-auto w-full'>

      <tr className='bg-stone-400		h-20'>
          <th>C-id</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Platform</th>
          <th>Location</th>
          <th>Change Status</th>
          <th>Forward</th>
          <th>Edit</th>
        </tr>

      <tr className='border '>
        <td>C1K34</td>
        <td>Ketan Desale</td>
        <td>Contaminated water supply</td>
        <td>17/2/2024</td>
        <td>19/6/2024</td>
        <td>Assigned</td>
        <td>Mobile App</td>
        <td>Baner,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      <tr className='border '>
        <td>C1K34</td>
        <td>Arun Patil</td>
        <td>No Dustbins</td>
        <td>17/2/2024</td>
        <td>19/6/2024</td>
        <td>Assigned</td>
        <td>Mobile App</td>
        <td>Baner,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>
      <tr className='border '>
        <td>C1K34</td>
        <td>Amar Pawar</td>
        <td>Bad roads condition</td>
        <td>17/2/2024</td>
        <td>19/6/2024</td>
        <td>Assigned</td>
        <td>Mobile App</td>
        <td>Baner,Pune</td>
        <td className='text-lime-800 cursor-pointer	'>Change status</td>
        <td className='text-cyan-900	cursor-pointer		'>Forward</td>
        <td className='p-1'><button className='border rounded-md p-1' >Edit</button></td>
      </tr>

      </table>
    </div>
</>
}

export default Complaints