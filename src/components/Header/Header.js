import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import harry from '../../assets/harry.gif';


const Header = () => {
  return (
    <>
      <header className='hogwarts'>
        <Link to='/'>
          <h1>Welcome to Hogwarts</h1>
          <img className='harry-gif' src={harry}></img>
        </Link>
      </header>
    </>
  )
}

export default Header;
