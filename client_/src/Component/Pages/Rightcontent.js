import React, { useState } from 'react'
import bgimg from '../Bgmid.png';
export default function Rightcontent() {
  var [seton,setoff_]=useState("on_1");
  return (
    <div className="rightco">
      <img id="rigimg" src={bgimg} />
      <div className="signin_div">
        {seton ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(e) => {
              // alert("hello");
              var a = e.target.parentElement;
              a.style.border = "2px solid red";
              setoff_("");
            }}
          >
            Sign in
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(e) => {
              console.log(e.target.innerText);
              setoff_("on");
              var a = e.target.parentElement;
              a.style.border = "2px solid green";
            }}
          >
            sign out
          </div>
        )}
      </div>
    </div>
  );
}
