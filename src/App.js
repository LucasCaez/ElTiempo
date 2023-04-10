
import './App.css';
import React, { useEffect, useState } from 'react';
import { getApiInfo } from './componentes/getApiInfo';
import { Home } from './componentes/Home';
import { Buscador } from './componentes/Buscador';
import { Footer } from './componentes/footer';

function App() {

  const [city, setCity] = useState('')
  const [data, setData] = useState({
    city: '',
    country: '',
    temp: '',
    temp_max: '',
    temp_min: '',
  });

  useEffect(() => {
    getApiInfo(city).then((data) => {

      if(!data.sys.country) { return }
      setData((prevData) => ({
        ...prevData,
        city: data.name,
        country: data.sys.country,
        temp: Math.floor(data.main.temp - 273),
        temp_max: Math.floor(data.main.temp_max - 273),
        temp_min: Math.floor(data.main.temp_min - 273),
      }))
    })
  }, [city])

  const sumit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    e.target.reset()
  }

  return (
<>
<Footer />
    
    <div className='App' >
      <div>
        
        <Home data={data} />
        <Buscador sumit={sumit} />

      </div>
    </div>
    </>
  );
}

export default App;
