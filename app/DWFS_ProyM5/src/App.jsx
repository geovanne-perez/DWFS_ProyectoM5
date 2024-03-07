import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='container-fluid bg-dark'>
          <h1 className='text-primary display-5 p-3'>DWFS - M5 - Proyecto React</h1>
          <p className='text-light pt-2 pb-4 p-3'>Alumno: José Geovanne Pérez Meza </p>
      </div>
      <Header />
    </>
  )
}

export default App
