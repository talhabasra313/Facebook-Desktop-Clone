import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
   <nav>
    <div className="left">
<div className="logo">
    <img width="130px" src="images/logo1.png" alt="" />
</div>
<ul className='nav-icons'>
    <li><img src="images/notification.png" /></li>
    <li><img src="images/inbox.png" /></li>
    <li><img src="images/video.png" /></li>
  
</ul>
    </div>
    <div className="right">
    <div className="input-group">
       
            <img className='searchIcon' src="images/search.png"  />
            <input type="text"  placeholder='Search' />
    </div>
    <div className="nav-user">
        <img src="images/profile-pic.png"  />
    </div>
    </div>
   </nav>
  )
}

export default Navbar
