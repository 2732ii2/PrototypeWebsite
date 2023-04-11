import React from 'react'
import Menu from './Menu_icon.png'
import Compicon from './company.png';
export default function Header() {
  return (
    <div className="Header">
      <div className="firsthalf">
        <img src={Menu} id="menu" />
        <img src={Compicon} id="comp" />
        <h3 id='hedh_3'>CipherSchools</h3>
      </div>
      <div className="secondhalf"></div>
    </div>
  );
}
