import "./style.css";
import Trash from '../../assets/trash.svg'
//para importar imgs 
//voce nao deve fazer como faz
//no html padrão, precisa declarar 
//a importaçao mo começo
//e usar {} no src 
import api from '../../services/api';
import { useEffect } from "react";

function Home() {
 let users = []
 
 async function getUsers(){
  users = await api.get('/users')
 }  
 

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuarios</h1>
       <input placeholder="Nome" name="nome" type="text" />
       <input placeholder="Idade" name="idade" type="number" />
       <input placeholder="Email" name="email" type="email" />

       <button type="button">Cadastrar</button>
      </form>


      {users.map( user => (
        <div key={user.id} className="card">

         <div>
          <p>Nome:  <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
         </div>
         <button className="delete-btn">
          <img src={Trash} alt="Trash for delete" />
         </button>
      </div>
      ))}


    </div>
 
  
  );
}

export default Home;