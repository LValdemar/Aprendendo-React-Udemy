import {useState} from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Maria")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>agora o x é falso!</p>}
        <h1>if ternário</h1>
        {name === "João" ? (<div>
            <p>O nome é João</p>
            </div>) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("João")}>Alterar o nome para João</button>
            
            
    </div>
  )
}

export default ConditionalRender