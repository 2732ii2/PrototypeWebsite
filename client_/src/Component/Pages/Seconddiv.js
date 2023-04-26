import React, { useState } from 'react'
import './second_div.css';
import CloseIcon from "@mui/icons-material/Close";
import Compicon from "../company.png";
import { submit_data } from '../apis/api';
export default function Seconddiv({props}) {
  var obj_={"First Name":"","Last Name":'',"Email Address":"","Phone(Optional)":"","Password":""};
  var [stateobj,setstateobj]=useState(obj_);
  console.log(stateobj);
  async function clickhandler(e){
    console.log(stateobj);
    const res = await submit_data(stateobj);
    console.log(res,res.headers);
    
    props(e);
  }
  var list_=["First Name","Last Name","Email Address","Phone(Optional)","Password"];
  return (
    <div id="ssame">
      <div id="crosshead">
        Sign In <CloseIcon style={{ fontSize: "42px", fontWeight: "800" }} />{" "}
      </div>
      <div id="Ssignheading">
        <h3 id="sssh1">
          {" "}
          <img src={Compicon} id="sshimg" /> CipherSchools{" "}
        </h3>
        <h4 id="ssh2"> Create New Account</h4>
        <p id="ssp">Please provide your valid informations to signup</p>
      </div>

      <div id="buttinp">
        {list_.map((e, i) => {
          if (i < 4) {
            return (
              <input
                type="text"
                name={e}
                onChange={(e) => {
                  var name_ = e.target.name;
                  console.log(name_);
                  setstateobj({ ...stateobj, [name_]: e.target.value });
                }}
                id="inpsame"
                placeholder={e}
                key={i}
              />
            );
          } else if (i === 4) {
            return (
              <div id="inpsame" key={i}>
                <input
                  type="password"
                  name={e}
                  onChange={(e) => {
                    var name_ = e.target.name;
                    console.log(name_);
                    setstateobj({ ...stateobj, [name_]: e.target.value });
                  }}
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
        {/* <h5 id="ssih5">Forget Password ?</h5> */}
        <button onClick={clickhandler} id="sssbtn">
          Create Account
        </button>
        {/* <p id="ssip">
          {" "}
          Don't have an account ?{" "}
          <span
            className="span_"
            onClick={props}
            style={{ color: "orange", cursor: "pointer" }}
          >
            Get Started
          </span>
        </p> */}
      </div>
    </div>
  );
}
