function Pessoa({foto, nome, idade, profissao}){
    return(
        <div>
        <img src={foto} alt= {nome} />
        <h1> Nome: {nome}</h1>
        <p> Idade: {idade}</p>
        <p> Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa