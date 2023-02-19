const Challenge = () => {
    const valor1 = 15
    const valor2 = 20
    const handleMyEvent = () => {
        console.log(valor1+valor2)
    };
    
    
    return (
        console.log(valor1),
        console.log(valor2),
        <div>
            <p>valor1 = {valor1}</p>
            <p>valor2 = {valor2}</p>

            <div>
                <button onClick={handleMyEvent}>Somar Valores</button>
            </div>
        </div>
    );
}
export default Challenge