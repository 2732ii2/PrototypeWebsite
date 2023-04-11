import React, { useState } from "react";

export default function SignDiv() {
  var [seton, setoff_] = useState("on_1");
    function clickHandler(e)
    {
        var a = e.target.parentElement;
        // console.log(e.target.innerText);
        if (e.target.innerText === "Sign in"){
            a.style.border = "2px solid red";
            setoff_("");
        } 
        else{
            var parent = e.target.parentElement;
            parent.style.height="70%";
            setoff_("on");
            a.style.border = "2px solid green";
        }
    }
  return (
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
          onClick={clickHandler}
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
          onClick={ clickHandler }
        >
          sign up
        </div>
      )}
    </div>
  );
}
