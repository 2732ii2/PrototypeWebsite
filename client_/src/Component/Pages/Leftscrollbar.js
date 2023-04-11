import React from 'react'
import signout from '../Signout.png';
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useDispatch, useSelector } from 'react-redux';
import { values_one } from '../Redux/actions';
export default function Leftscrollbar() {
  const values=useSelector(state=>state);
  console.log(values);
  const dispatch=useDispatch();
  return (
    <div className="left_bar">
      <div className="main_divs"> </div>
      <div onClick={(e)=>{
        // alert(e.target.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].className);
        var sigout_vis =(
          e.target.parentElement.parentElement.parentElement.childNodes[1]
            .childNodes[1].className);
          console.log(sigout_vis);
          dispatch(values_one);
          // try{
          //   setTimeout(()=>{
          //     sigout_vis.style.border = "1px solid black";
          //   },200);

          // }
          // catch(er){
          //   alert("err");
          // }
      }} className="last_div">
        {/* <img src={signout} style={{width:"90%",height:"90%"}} /> */}
          <LoginRoundedIcon style={{ marginLeft: "-13px", fontSize: "50px" }} />
          <h2 id="ll_s_h"> Sign in</h2>
      </div>
    </div>
  );
}
