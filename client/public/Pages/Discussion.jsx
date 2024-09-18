import React from 'react'
import profile from '../Images/profile.png'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { GrAttachment } from "react-icons/gr";
import { FaSmile } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import chat from "../Images/chat.png";
import group from "../Images/group.png";
import community from "../Images/community.png";


const Discussion = () => {
  return <>

    <div className="discuss-main w-11/12 m-auto border	p-3">
    <div className="bg-white w-28 border border-black">
        <ul className='flex flex-col justify-center p-3'>
          <li ><img src={profile} alt="profile" /></li>
          <li><img src={chat} width={50} className='m-auto mt-10' /></li>
          <li><img src={group} width={50} className='m-auto mt-10' /></li>
          <li><img src={community} width={50} className='m-auto mt-10' /></li>
          
          <li><SlOptionsVertical size={25} color='#0e7490' className='m-auto mt-10'/></li>
        </ul>
      </div>
      <div className="second p-3">
        <div className="flex justify-center border p-3">
        <input type="text" placeholder='Search..' className='border rounded-md w-9/12 p-1'/>
        <IoSearchSharp className='text-2xl text-gray-400 ml-3' />
        </div>
        <div className="p-2 border rouned-md my-5">
        <h1 className='text-center '>Groups</h1>
        <hr />
        <div className="flex items-center	gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>Vidyut</p>
        </div>
        <hr />
        <div className="flex items-center	gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>Transport</p>
        </div>
        <hr />
        <div className="flex items-center	gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>Smaram Team</p>
        </div>
        <hr />
        <div className="flex items-center	gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>IT Team</p>
        </div>
        <hr />
        </div>

        <div className="text-center border p-3"> 
        <h1>People</h1>
        <hr />
        <div className="flex items-center bg-slate-300	 gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>Karan</p>
        </div>
        <div className="flex items-center  gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>Pranav</p>
        </div>
        <div className="flex items-center  gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>Prasad</p>
        </div>
        <div className="flex items-center  gap-4 ">
          <img src={profile} alt="profile" className='w-12' />
          <p>Pawan</p>
        </div>
        </div>
      </div>



      <div className="Third border rounded-md p-2">
      <div className="nav flex gap-5 items-center ">
        <img src={profile} alt="profile" width={60} />
        <h1 className='font-bold	'>Karan  <span className='block font-thin	'>Online-Last seen 2:00am</span> </h1>
        <div className=" icons w-11/12">
          <div className="flex justify-end gap-4">
           <IoIosCall size={25} color='#0e7490'/>
           <FaVideo size={25} color='#0e7490'/>
           <SlOptionsVertical size={25} color='#0e7490'/>
          </div>
        </div>
      </div>
        <hr />
      
      <div className="chat mt-10 bg-orange-200 ml-5 max-w-20 p-3 flex items-center justify-center rounded-md">
        <p>Good Morning sir,</p>
      </div>
      <div className="chat mt-5 bg-orange-200 ml-5 p-3 max-w-48  flex items-center justify-center rounded-md">
        <p>Could you please send me the Reports</p>
      </div>
      <div className="chat mt-10 bg-indigo-300 ml-5 max-w-20 p-2.5 float float-right mr-5	rounded-md">
        <p>Yes Sure</p>
      </div>
    <div className="mt-60 p-3" >
    <div className="msg flex gap-8 items-center border rounded-md p-3">
    <GrAttachment />
    <input type="text" placeholder='Type your message' className='w-7/12'/>
    <FaSmile  size={20} color='#60a5fa'/>
    <FaCamera size={20} color='#60a5fa'/>
    <FaMicrophone size={20}  color='#60a5fa'/>

    </div>
      
    </div>
      </div>

    </div>


  </>

}

export default Discussion