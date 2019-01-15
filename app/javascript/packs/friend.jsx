import React, { Component } from 'react'


const Friend = ({friend,unique_key}) =>
  
    <li className = "list-group-item" key={unique_key} style={{"padding-left": "20px"}}>
      <span className="badge badge-secondary float-right">{friend.average.steps}</span>
      <img src={friend.user.avatar} style={{height: 50, left:10, borderRadius: "50%"}}  />
      <h6>{friend.user.displayName}</h6>
     
    </li>
 
  
 
export default Friend