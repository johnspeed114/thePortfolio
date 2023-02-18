import React from "react";

export const errorReducer = (state, action) => {
  if (action.type === "@_MISSING") {
    return { error: "Missing @ in your email" };
  }
};

export const formReducer = (state, action) => {
  //[To Do] once we establish this reducer, we will change conditionals to switch
  if (action.type === "EMAIL") {
    //[FYI] always replace the state not mutuate them!
    return { ...state, email: action.value };
  }
  if (action.type === "PASSWORD") {
    return { ...state, password: action.value };
  }

  throw Error("Unknown Error: " + action.type);
};
