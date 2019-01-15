import React, { Component } from 'react'


const Badge = ({badge,unique_key}) =>
  
    <div key={unique_key}>
      <h6>{badge.shortName}</h6>
      <p><img src={badge.image100px} /></p>
      <p>{badge.description}</p>
      <p>Earned {badge.timesAchieved}</p>
      <p> Last on {badge.dateTime}</p>
    </div>
  
 
export default Badge