import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import ChessTableRank from './Components/TopRank';
import ChessTableWinCount from './Components/TopWinCount';


function App() {

  const [btnSel,setBtnSel] = useState('Show Rank');

  const handleHeaderButtons = (headerSelButton) => {
    setBtnSel(headerSelButton)
  }

  return (
    <>
      <div className='container-fluid bg-dark'>
          <h1 className='text-primary display-5 p-3'>DWFS - M5 - Proyecto React</h1>
          <p className='text-light pt-2 pb-1 p-3'>Alumno: José Geovanne Pérez Meza </p>
          <p className='text-light pt-0 pb-4 p-3'>Esta app carga datos de la API de Chess.com, y los muestra usando dos componentes de React. Para el front-end se utilizaron componentes Bootstrap.</p>
      </div>
      <Header headerSelButton = {handleHeaderButtons}/>
      {btnSel === 'Show Rank' ? <ChessTableRank/> : <ChessTableWinCount/>}
    </>
  )
}

export default App
