import React from 'react';
import "./header.css";

const Header = ({user}) => {
  return (
    <div className='headerWrapper'>
        <img src={user?.picture?.medium} alt="" />
        <p>{user?.name?.first} {user?.name?.last}</p>
    </div>
  )
}

export default Header