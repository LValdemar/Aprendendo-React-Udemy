// Styles
import './App.css';

// Images
import miranhathinking from "./assets/miranhathinking.jpg";

// Components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';


function App() {
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
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
      
  );
}

export default App;
