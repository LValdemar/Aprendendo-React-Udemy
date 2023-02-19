const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
        
    };
    const renderSomething = (x) => {

        if(x) {

            return <h1> Renderizando if = true</h1>;
        } else {
            return <h1> Renderizando if = false </h1>;
        }
    };
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("isso não deveria existir =)");
                    };
                }}>Clique aqui! (função longa)</button>
            </div>
            <div>
            {renderSomething(true)}
            {renderSomething(false)}
            </div>
        </div>
    );
};
export default Events