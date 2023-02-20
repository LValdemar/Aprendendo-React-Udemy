import {useState} from "react";
{/* importando o useState de react para poder usá-lo no hook*/}

const ManageData = () => {
  let someData = 10;

  console.log(someData);
  
  {/* Uma variavel deve ser criada e o o "set" deve ser atribuido para definir o State dela*/}
  const [teste, setTeste] = useState(15);
  return (
    <div>
        <div>
            {/*o valor atribuido na variável é renderizado normalmente, e esse valor não será renderizado novamente se somente a variável for alterada*/}
            <p>Valor: {someData}</p> 
            <button onClick={() => (someData = 15)}>Mudar variável</button>  {/* a variável foi alterada, mas o valor novo não foi renderizado*/} 
        </div>
        <div>
            {/*esse valor é então alterado e renderizado quando a function "() => setState" é utilizada*/}
            <p>State não alterado: {teste}</p>
            <button onClick={() => setTeste(25)}>Mudar State</button>{/*Agora o state foi alterado e o valor renderizado*/}
        </div>
    </div>
  )
}

export default ManageData