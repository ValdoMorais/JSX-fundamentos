import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloWord from './components/HelloWord';
import MyName from './components/MyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

const name = 'Valdo Morais'
const newName = name.toUpperCase()
const url = 'http://via.placeholder.com/150'

function sum(a, b){
  return a+b;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div className="root">
        <List />
        <Frase />

        <Frase />
    <h1>{name}!</h1>
    <h2> Alternando o JSX</h2>
    <p> Ola {newName}</p>
    <p> A soma de 1 e 2 e: {sum(1,2)}</p>
    <img src={url} alt="minha Imagem"/>

    <HelloWord/>
    <MyName nome= "Valdo"/>

    <Pessoa nome = "Valdo Morais" idade= "21" profissao="Desenvolvidor" foto ="http://via.placeholder.com/150"/>

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
