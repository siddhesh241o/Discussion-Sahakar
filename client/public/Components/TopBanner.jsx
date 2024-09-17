import React from 'react'
import gov_logo from '../Images/gov_logo.png'
import { useNavigate } from 'react-router-dom'
const TopBanner = () => {
  const Navigate = useNavigate();

  const HandleLogOut = () => {
    Navigate('/');
  }
  return <>
    <div className="top-banner">
      <img class="gov-logo" src={gov_logo} alt="Logo" width={150} />
      <div className="ban-text" style={{textAlign:'center'}}>
        <h2>SAHAKARA</h2>
        <h3>Connecting Departments, Empowering Progress</h3>
      </div>
      <button onClick={HandleLogOut} id='logout-but'>LogOut</button>
    </div>
    <div className="notice-bar">
        Update: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus distinctio blanditiis exercitationem repudiandae quaerat quas eligendi fugit neque placeat?
    </div>
  </>
}

export default TopBanner
