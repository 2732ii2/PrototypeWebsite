
var initialState={values:"notshow"}
const reducer = (state = initialState, action) => {
  if (action.type==="showdiv") {
    return {
      ...state.values="notshow",state:state
    };
  }
  else if(action.type==="dontshowdiv")
  {
    return {
      ...(state.values = "show"),
      state: state,
    };
  }
  else{
    return state;
  }
};

export default reducer;