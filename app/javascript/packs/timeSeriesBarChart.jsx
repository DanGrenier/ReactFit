import React from 'react'
import {BarChart,Bar,XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

const TimeSeriesBarChart = ({data,title}) =>
  <div className = "card">
    <div className = "card-header">
      <h5>{title}</h5>
    </div>
    <div className = "card-body">
      <BarChart width={500} height={300} data={data} 
       margin={{top: 5, right: 10, left: 10, bottom: 5}}>
       <XAxis dataKey = "dateTime"/>
       <YAxis/>
       <CartesianGrid stokeDasharray="3 3"/>
       <Tooltip/>
       
       <Bar dataKey="value" fill="#8884d8" />
       
       </BarChart>
    </div>
  </div>    

export default TimeSeriesBarChart