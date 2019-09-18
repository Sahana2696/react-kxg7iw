import React,{createContext,useReducer} from 'react';
const Store=createContext();

const StoreProvider=(props)=>{
  const[state,dispatch]=useReducer({});
  return <Store.Provider value='Hello'><div>{props.children}</div></Store.Provider>
}

export {Store,StoreProvider}