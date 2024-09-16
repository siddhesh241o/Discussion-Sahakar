import React from 'react'
import { useNavigate } from 'react-router-dom'
import Proj_banner from '/Images/Proj_banner.png'
const Projects = () => {
  const Navigate = useNavigate();
  return <>

  <div className="main-grid">
    <div className="grid-menu">
    <ul className='Menu-list' >
      <li> Dashboard  </li>
      <li> My Profile  </li>
      <li> templates </li>
      <li> Seminars </li>
      <li> Meetings </li>
      <li> GIS </li>
      <li> Inventory </li>
      <li> Tasks </li>
      <li> Disscussion </li>
      <li> Complaints </li>
    </ul>
    </div>
    <div className="grid-content">
  <img src={Proj_banner} alt="Banner" style={{display:'block',margin:'auto',height:'200px',width:'90%'}} />
  
  <div className="Dir_Nav">
  <h1>Project Directory</h1>
  <label htmlFor="Search"><input type="text" /></label>
  
  <button style={{width:'120px',height:'30px'}}>Filter</button>
   
  </div>
  <hr />
  <div className="proj-list">

  <table id='Proj_table'>
    <tr>
      <th>Code</th>
      <th>Name</th>
      <th>Status</th>
      <th>Progress</th>
    </tr>
    <tr>
      <td>3922</td>
      <td>Water Pipelines Installation</td>
      <td>OnGoing</td>
      <td> <input type="range" name="" id="" value={40}/> </td>
      <hr />
    </tr>
    <tr>
      <td>1122</td>
      <td>Street Lights Repairs</td>
      <td>OnGoing</td>
      <td> <input type="range" name="" id="" value={90}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2002</td>
      <td>Electrical Lines Installation</td>
      <td>Completed</td>
      <td> <input type="range" name="" id="" value={100}/> </td>
      
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
    <tr>
      <td>2298</td>
      <td>Gas Pipelines Inspection</td>
      <td>Upcoming</td>
      <td> <input type="range" name="" id="" value={0}/> </td>
      <hr />
    </tr>
  </table>
  </div>
  
    </div>
  </div>

  
  </>
}

export default Projects