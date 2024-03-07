import React from 'react';
import axios from 'axios';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import { useState, useEffect} from 'react';

const Charts = ({ChartSelection}) => {

    
    const [data, setData] = useState(['']);
    const [chartData, setChartData] = useState(['']);

    const url = 'https://api.chess.com/pub/leaderboards';

    useEffect(() => {  
        getChessData();
        setChartData(chartTop10);
        // switch (ChartSelection) {
        //     case 'Top by Rank':
        //         setChartData(chartTop10);
        //         break;
        //     case 'Top by Win Count':
        //         setChartData(chartTop10);
        //         break;
        //     case 'Top by Country':
        //         setChartData(chartTop10);
        //         break;
        //     case 'Top Avatars':
        //         setChartData(chartTop10);
        //         break;
        //     default:
        //         break;
        // }
    }, [ChartSelection]);

    const getChessData = () => {
        axios.get(url)
        .then((response) => {
            setData(response.data['daily']);
        })  
        .catch((error) => {
            console.log(error);
        }); 
    }

    const chartTop10 = () =>  {
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
                            <td scope="row">{item.rank}</td>
                            <td>{item.username}</td>
                            <td>{item.score}</td>
                            <td>{item.name}</td>
                        </tr>
                    )
                })}
                </tbody>
        </table>
    }

    console.log(data);

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='d-flex justify-content-between'>  
                    <div className='column '>
                        <h4>Top 10 Chess Players By rank</h4>
                    </div>
                    <div className='column'>
                        <button className='btn btn-secondary' onClick={getChessData}>Update data</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                {chartData}
            </div>
        </div>
    </div>
  )
}

export default Charts
