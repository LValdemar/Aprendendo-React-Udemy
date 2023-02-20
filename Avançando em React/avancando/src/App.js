// Styles
import './App.css';

// Images
import miranhathinking from "./assets/miranhathinking.jpg";


// Components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import { useState } from 'react';



function App() {
// Consts
{/* Variáveis devem ser atribuidas dentro de uma function no react */}
const name = "Joaquim";
const [userName] = useState("Maria");

  return (
    <div className="App">
      <h1> Avançando em React</h1>
      <div>
      {/*imagem em public*/}
      <img src="/miranhadead.jpg" alt="raidmax" />
      </div>
      <div>
      {/*imagem em assets*/}
      <img src={miranhathinking} alt="thinking" />
      </div>

      {/*Aprendendo a usar useState para alterar a renderização de um objeto*/}
      <ManageData/>
      {/*Utilizando do useState para mapear e renderizar listas*/}
      <ListRender/>
      {/*Aplicando if e else para renderização de objetos com useState*/}
      <ConditionalRender/>


      {/*Aprendendo a usar props*/}
      <ShowUserName name={userName}/>



    </div>
      
  );
}

export default App;
