import React, { useState } from 'react'
import Compicon from "../company.png";

import CloseIcon from "@mui/icons-material/Close";
export default function Firstdivsign({props}) {
  console.log(props);
  var list_ = ["Email ID", "Password"];
  var obj_={"Email ID":"","Password":""};
  var [state,setstate]=useState(obj_);
  console.log(state);
  return (
    <div id="ssame">
      <div id="crosshead">
        Sign In <CloseIcon style={{ fontSize: "42px", fontWeight: "800" }} />{" "}
      </div>
      <div id="signheading">
        <h3 id="ssh1">
          {" "}
          <img src={Compicon} id="sshimg" /> CipherSchools{" "}
        </h3>
        <h4 id="ssh2"> Hey, Welcome!</h4>
        <p id="ssp">Please provide your email and password to signin</p>
      </div>
      <div id="buttinp">
        {list_.map((e, i) => {
          if (i === 0) {
            return <input name={e} type="text" onChange={(e)=>{
              var name=e.target.name;
              setstate({ ...state, [name]: e.target.value });
            }} id="inpsame" placeholder={e} key={i} />;
          } else {
            return (
              <div id="inpsame" key={i}>
                <input type="password"
                  onChange={(e) => {
                    var name = e.target.name;
                    setstate({ ...state, [name]: e.target.value });
                  }}
                  name={e}
                  style={{
                    width: "80%",
                    height: "100%",
                    fontSize: "20px",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                  placeholder={e}
                />
              </div>
            );
          }
        })}
        <h5 id="ssih5">Forget Password ?</h5>
        <button id="ssbtn">Sign in</button>
        <p id="ssip">
          {" "}
          Don't have an account ?{" "}
          <span
            className="span_"
            onClick={props}
            style={{ color: "orange", cursor: "pointer" }}
          >
            Get Started
          </span>
        </p>
      </div>
    </div>
  );
}
