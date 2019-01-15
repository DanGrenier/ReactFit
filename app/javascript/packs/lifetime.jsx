import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

const LifetimeStats = ({LifetimeStats}) =>
  <div className = "card">
    <div className = "card-header">
  	 <h5>Lifetime Stats</h5>
  	</div>
  	<div className = "card-body">
  	  <h5>Steps</h5>
  	    <p>Total: {LifetimeStats.lifetime.total.steps}</p>
  	    <p>Best: {LifetimeStats.best.total.steps.value} ({LifetimeStats.best.total.steps.date})</p>
  	  <h5>Distance</h5>
  	    <p>Total: {Number(LifetimeStats.lifetime.total.distance).toFixed(2)} miles</p>
  	    <p>Best: {Number(LifetimeStats.best.total.distance.value).toFixed(2)} ({LifetimeStats.best.total.distance.date})</p>
      <h5>Floors</h5>
        <p>Total: {Number(LifetimeStats.lifetime.total.floors).toFixed(2)}</p>
  	    <p>Best: {Number(LifetimeStats.best.total.floors.value).toFixed(2)} ({LifetimeStats.best.total.floors.date})</p>
  	</div>
  </div>    

export default LifetimeStats