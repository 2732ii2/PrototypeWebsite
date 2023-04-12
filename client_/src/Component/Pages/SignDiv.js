import React, { useState } from "react";
import Compicon from "../company.png";

import CloseIcon from "@mui/icons-material/Close";
export default function SignDiv() {
  var [seton, setoff_] = useState("on_1");
  var list_=["Email ID","Password"];
    function clickHandler(e)
    {
        var a = e.target.parentElement;
        // console.log(e.target.innerText);
        if (e.target.innerText === "Sign in"){
            a.style.border = "4px solid red";
            a.style.height = "70%";
            a.style.top = "15%";
            console.log(a);
            setoff_("");
        } 
        else{
            // var parent = e.target.parentElement;
            // parent.style.height="70%";
            console.log(a)
            a.style.border = "4px solid green";
            a.style.top="12%";
            a.style.height="80%";
            setoff_("on");
            
        }
    }
  return (
    <div className="signin_div">
      {seton ? (
        <div id="ssame" onClick={clickHandler}>
          <div id="crosshead">
            Sign In{" "}
            <CloseIcon style={{ fontSize: "42px", fontWeight: "800" }} />{" "}
          </div>
          <div id="signheading">
            <h3 id="ssh1">
              {" "}
              <img src={Compicon} id="sshimg" />{" "}
              CipherSchools{" "}
            </h3>
            <h4 id="ssh2"> Hey, Welcome!</h4>
            <p id="ssp">Please provide your email and password to signin</p>
          </div>
          <div id="buttinp">
            {list_.map((e, i) => {
              if (i === 0) {
                return <input id="inpsame" placeholder={e} key={i} />;
              } else {
                return (
                  <div id="inpsame" key={i}>
                    <input
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
            <p id="ssip"> Don't have an account ? <span style={{color:"orange",cursor:"pointer"}}>Get Started</span></p>
          </div>
        </div>
      ) : (
        <div id="ssame" onClick={clickHandler}>
          sign up
        </div>
      )}
    </div>
  );
}
