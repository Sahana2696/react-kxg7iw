import React  from 'react';
import {Store}  from './Store'
const MyDataComp=(props)=>{
    
    return  <Store.Consumer> {<div>hi</div> }</Store.Consumer>
}
export {MyDataComp} 