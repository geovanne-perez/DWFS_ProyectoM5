import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

const ChessTableRank = () => {

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
                        <h4>Top 50 Chess Players - Rank </h4>
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
            </div>
        </div>
    </div>
  )
}

export default ChessTableRank
