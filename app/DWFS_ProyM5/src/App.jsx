import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Charts from './Components/Charts';


function App() {

  const [btnSel,setBtnSel] = useState('Top by Rank');

  const handleHeaderButtons = (headerSelButton) => {
    setBtnSel(headerSelButton)
  }

  return (
    <>
      <div className='container-fluid bg-dark'>
          <h1 className='text-primary display-5 p-3'>DWFS - M5 - Proyecto React</h1>
          <p className='text-light pt-2 pb-4 p-3'>Alumno: José Geovanne Pérez Meza </p>
      </div>
      <Header headerSelButton = {handleHeaderButtons}/>
      <div className='container'>
        <h2 className='text-center'>Selected chart: {btnSel}</h2>
      </div>
          <Charts/>
    </>
  )
}

export default App
