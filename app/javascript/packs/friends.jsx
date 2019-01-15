import React, { Component } from 'react'
import Friend from './friend'

const Friends = ({friends}) =>
  <div className = "card">
    <div className = "card-header">
      <h5>Friends</h5>
    </div>
    <div className = "card-body list-group list-group-flush" style={{"padding-left" : "20px"}}>
      {friends.map((friend,i) => 
        <Friend friend = {friend} unique_key = {i} />
      )            
      }
    </div>
  </div>    

export default Friends