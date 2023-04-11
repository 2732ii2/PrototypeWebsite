import React from 'react'
import Menu from './Menu_icon.png'
import Compicon from './company.png';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Browse from './Browse.png';
export default function Header() {
  function clickhandler(e){
    console.log(
      e.target.parentElement.parentElement.parentElement.childNodes[1]
        .childNodes[0]
    );
    var comp =
      e.target.parentElement.parentElement.parentElement.childNodes[1]
        .childNodes[0];
        // comp.style.width="10%";
        if (comp.style.width==="10%")
        {
           comp.style.width = "5%";
        }
        else if (comp.style.width === "5%")
        {
            comp.style.width = "10%";

        }
        else if (!comp.style.width) {
            comp.style.width = "10%";
        }
  }
  return (
    <div className="Header">
      <div className="firsthalf">
        <img onClick={clickhandler} src={Menu} id="menu" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "-60px",
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
