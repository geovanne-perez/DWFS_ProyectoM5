import React from 'react';
import axios from 'axios';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import { useState } from 'react';


const url = 'https://api.chess.com/pub/leaderboards';

const Charts = () => {

    
    const [data, setData] = useState(['']);

    function getDailyData() {
        axios.get(url)
        .then((response) => {
            setData(response.data['daily']);
        })  
        .catch((error) => {
            console.log(error);
        });
    }
    console.log(data);

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <h4>Top 10 Chess Players By Rate</h4>
                </div>
                <div className='column'>
                    <button className='btn btn-secondary' onClick={getDailyData}>Update</button>
                </div>
            </div>
            <div className='row'>
                
                <table className = 'table table-sm .table-hover' id = 'BootstrapTable' data = {data}>
                        <thead className='thead-light'>
                            <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Player</th>
                            <th scope="col">Rating</th>
                            <th scope="col">PlayerName</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.rank}>
                                    <td scope="row" key={item.rank}>{item.rank}</td>
                                    <td key={item.rank}>{item.username}</td>
                                    <td key={item.rank}>{item.score}</td>
                                    <td key={item.rank}>{item.name}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Charts
