import React from 'react'
import bgimg from '../Bgmid.png';
import { useSelector } from 'react-redux';
import SignDiv from './SignDiv';
export default function Rightcontent() {
  // var [seton,setoff_]=useState("on_1");
  const values =useSelector(state=>state);
  console.log(values);
  return (
    <div className="rightco">
      <img id="rigimg" src={bgimg} />
      {values.state ? (
        values.state.values === "show" ? (
          <SignDiv />
        ) : (
          console.log("we don't have show")
        )
      ) : (
        console.log("we don't")
      )}
    </div>
  );
}
