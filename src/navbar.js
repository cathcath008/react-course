import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const listName = ['Home', 'Experience', 'Organization'];
  const [isActive, setIsActive] = useState('home');

  return (
    <div className="navbar">
      {listName.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default NavBar;
