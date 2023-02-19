import {useState} from "react";

const ManageData = () => {
  let someData = 10;

  console.log(someData);
  
  const [teste, setTeste] = useState(15);
  return (
    <div>
        <div>
            <p>Valor: {someData}</p> 
            <button onClick={() => (someData = 15)}>Mudar variável</button>   
        </div>
        <div>
            <p>State não alterado: {teste}</p>
            <button onClick={() => setTeste(25)}>Mudar State</button>
        </div>
    </div>
  )
}

export default ManageData