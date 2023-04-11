import React from 'react'
import Menu from './Menu_icon.png'
import Compicon from './company.png';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Browse from './Browse.png';
export default function Header() {
  return (
    <div className="Header">
      <div className="firsthalf">
        <img src={Menu} id="menu" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "-140px",
          }}
        >
          <img src={Compicon} id="comp" />
          <h3 id="hedh_3">CipherSchools</h3>
        </div>
        {/* <img src={Browse} id="brows" /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "98%",
          }}
        >
          <img src={Browse} id="brows" />
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="secondhalf"></div>
    </div>
  );
}
