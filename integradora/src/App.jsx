import React, { useEffect, useState } from 'react';
import './App.css'
import CircularProgressBar from './assets/componentes/CircularProgressBar';
import WaterLevelTable from './assets/componentes/WaterLevelTable';
import ComponentChart from './assets/componentes/ComponentChart';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Container from './assets/componentes/Container';


const App = () => {
  const [waterLevel, setWaterLevel] = useState(12); // Ejemplo: nivel de agua al 75%
  const [waterLevelData, setWaterLevelData] = useState([
    { id: 1, date: '2022-01-01 06:00', waterLevel: 70 },
    { id: 2, date: '2022-01-01 12:00', waterLevel: 80 },]);

  



  return (
  
    
      <Container>
      <CircularProgressBar waterLevel={waterLevel} size={200} />
      <WaterLevelTable data={waterLevelData} />
      <div className='graph'>
        <ComponentChart/>
      </div>

      </Container>

        
      
  
      
        
      


      
 

  );

};

export default App;
