import React from 'react'
import signout from '../Signout.png';
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
export default function Leftscrollbar() {
  return (
    <div className="left_bar">
      <div className="main_divs"> </div>
      <div className="last_div">
        {/* <img src={signout} style={{width:"90%",height:"90%"}} /> */}
        <LoginRoundedIcon style={{ marginLeft:"-13px", fontSize: "50px" }} />
        <h2 id='ll_s_h'> Sign in</h2>
      </div>
    </div>
  );
}
