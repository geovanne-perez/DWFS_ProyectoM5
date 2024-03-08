import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

const ChessTableWinCount = () => {

    const [data, setData] = useState(['']);
    const [chartData, setChartData] = useState(
    );

    const url = 'https://api.chess.com/pub/leaderboards';

    useEffect(() => {  
        getChessData();
    }, []);

    const getChessData = () => {
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
                <div className='d-flex justify-content-between'>  
                    <div className='column '>
                        <h4>Top 50 Chess Players - Games </h4>
                    </div>
                    <div className='column'>
                        <button className='btn btn-secondary' onClick={getChessData}>Update data</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <table className = 'table table-sm .table-hover' id = 'BootstrapTable' data = {data}>
                <thead className='thead-light'>
                    <tr>
                    <th scope="col">Player</th>
                    <th scope="col">Score</th>
                    <th scope="col">Win Count</th>
                    <th scope="col">Loss Count</th>
                    <th scope="col">Draw Count</th>
                    </tr>
                </thead>

                <tbody>
                {data.map((item) => {
                    return (
                        <tr key={item.rank}>
                            <td scope="row">{item.username}</td>
                            <td>{item.score}</td>
                            <td>{item.win_count}</td>
                            <td>{item.loss_count}</td>
                            <td>{item.draw_count}</td>
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

export default ChessTableWinCount
