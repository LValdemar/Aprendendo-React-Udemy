const TemplateExpressions = () => {
    const name = "Valdemar";
    const data = {
        number: 50,
        string: "valor de teste",
    };

    return (
        <div>
        <h1> o nome é pra aparecer aqui "{name}"</h1>
        <p>imprimindo "number" e "string" da const "data"</p>
        <p>data number = "{data.number}"</p>
        <p>data string = "{data.string}"</p>
        </div>

    )
}

export default TemplateExpressions