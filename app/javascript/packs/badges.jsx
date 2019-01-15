import React, { Component } from 'react'
import Badge from './badge'

const Badges = ({badges}) =>
  <div className = "card">
    <div className = "card-header">
      <h5>Badges</h5>
    </div>
    <div className = "card-body">
      {badges.map((badge,i) => 
        <Badge badge = {badge} unique_key = {i} />
      )            
      }
    </div>
  </div>    

export default Badges