import React from 'react'
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useDispatch, useSelector } from 'react-redux';
import { values_one,values_two } from '../Redux/actions';
export default function Leftscrollbar() {
  const values=useSelector(state=>state);
  // console.log(values);

  const dispatch=useDispatch();
  return (
    <div className="left_bar">
      <div className="main_divs"> </div>
      <div onClick={(e)=>{
          if(values && !values.state ){
            if(values.values==="notshow"){
              dispatch(values_one);
            }
          }
          else{
            // console.log(values.state);
            if (values.state.values === "show") {
              dispatch(values_two);
            } else {
              dispatch(values_one);
            }
          }
      }} className="last_div">
          <LoginRoundedIcon style={{ marginLeft: "-13px", fontSize: "50px" }} />
          <h2 id="ll_s_h"> Sign in</h2>
      </div>
    </div>
  );
}
