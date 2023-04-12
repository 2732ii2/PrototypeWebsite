import React, { useState } from "react";
// import Compicon from "../company.png";

// import CloseIcon from "@mui/icons-material/Close";
import Firstdivsign from "./Firstdivsign";
import Seconddiv from "./Seconddiv";
export default function SignDiv() {
  var [seton, setoff_] = useState("on_1");
  // var list_=["Email ID","Password"];
    function clickHandler(e)
    {
        
        var a;
        console.log(e.target.className);
        if (e.target.className==="span_"){
          a = e.target.parentElement.parentElement.parentElement.parentElement;
        }
        else{
          a =
            e.target.parentElement.parentElement.parentElement;
          console.log(a);
        }
          if (e.target.className === "span_") {
            a.style.top = "12%";
            a.style.height = "80%";
            setoff_("");
          } else {
            a.style.height = "70%";
            a.style.top = "15%";
            console.log(a);
            setoff_("on");
          }
    }
  return (
    <div className="signin_div">
      {seton ? (
        <Firstdivsign props={clickHandler} />
      ) : (
        // <div id="ssame" onClick={clickHandler}>
        //   sign up
        // </div>
        <Seconddiv props={clickHandler} />
      )}
    </div>
  );
}
