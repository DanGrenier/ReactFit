import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import LifetimeStats from './lifetime';
import axios from 'axios';
import dummyData from './dummyData';
import Badges from './badges';
import TimeSeriesBarChart from './timeSeriesBarChart';
import Friends from './friends';


class Dashboard extends Component {
  constructor(props){
  	super(props)
  	this.state = dummyData;
  	
  }

  fetchFitBitData(url,fitbitToken,stateKey){
    axios(
  	  {
  	    method: 'get',
  	    url: url,
  	    headers: {'Authorization': 'Bearer '+fitbitToken},
  	    mode: 'cors'
  	   }
  	)
  	.then(response =>
  	  {console.log(response);
  	    this.setState({[stateKey]: response.data})
  	  }
  	)
  	.catch(error => 
      console.log(error)
    )
  }

  componentDidMount () {
  	if(window.location.hash){
  	  let fitbitToken = window.location.hash.slice(1).split("&")[0].replace("access_token=","");	
  	  this.setState({loggedIn: true});
  	  this.fetchFitBitData('https://api.fitbit.com/1/user/-/profile.json',
  	  	               fitbitToken,'user');

  	  this.fetchFitBitData('https://api.fitbit.com/1/user/-/activities.json',
  	  	               fitbitToken,'lifetimeStats');

  	  this.fetchFitBitData('https://api.fitbit.com/1/user/-/badges.json',
  	  	               fitbitToken,'badges');
  	  this.fetchFitBitData('https://api.fitbit.com/1/user/-/activities/steps/date/2016-03-16/1m.json',
  	  	               fitbitToken,'steps');
  	  this.fetchFitBitData('https://api.fitbit.com/1/user/-/activities/distance/date/2016-03-16/1m.json',
  	  	               fitbitToken,'distance');
  	  this.fetchFitBitData('https://api.fitbit.com/1/user/-/friends/leaderboard.json',
  	  	               fitbitToken,'friends');
     }  	    	  	
  }

  render () {
  	return (
  	  <div className="container">
  	   <header className="text-center">
  	   <span className="float-right">{this.state.user.user.displayName}</span>
  	     <h1 className="page-header">React Fit</h1>
  	     <p className="lead">Your personal fitness dashboard</p>
  	    </header>
  	    {!this.state.loggedIn &&
  	    <div className = "row">
  	      <div className = "col text-center">
  	        <a href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22D9M2&redirect_uri=http%3A%2F%2localhost%3A8000%2Ffitbit_auth&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">
  	        LogIn with fitbit
  	      </a>
  	      </div>
  	    </div>}
  	    <div className = "row">
  	      <div className = "col-lg-3">
  	        <LifetimeStats LifetimeStats={this.state.lifetimeStats} />
  	        <Badges badges={this.state.badges.badges} />

  	      </div>   
  	      <div className = "col-lg-6">
  	        <TimeSeriesBarChart data={this.state.steps["activities-steps"]} title="Steps" />
  	        
  	        <TimeSeriesBarChart data={this.state.distance["activities-distance"]} title="Distance (miles)"/>
  	        
  	      </div>

  	      <div className = "col-lg-2 col-lg-offset-1">
  	        <Friends friends={this.state.friends.friends} />
  	        
  	      </div>      
  	    </div>
  	  </div>
  	)
  }	
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
})