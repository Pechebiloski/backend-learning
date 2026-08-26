import "./style.css";
import Trash from '../../assets/trash.svg'
//para importar imgs 
//voce nao deve fazer como faz
//no html padrão, precisa declarar 
//a importaçao mo começo
//e usar {} no src 
import api from '../../services/api';
import { useEffect, useState, useRef } from "react";

function Home() {
 const [users, setUsers] = useState ([])
 
 const inputName = useRef()
 const inputAge = useRef()
 const inputEmail = useRef()

 async function getUsers(){
 const usersFromApi = await api.get('/users')
  
  setUsers(usersFromApi.data)
 // para ver a lista de usuarios vinda do backend na aba Console do DevTools
 // console.log(users)
 }  
  async function createUsers(){
   await api.post('/users', {
    name: inputName.current.value,
    age: Number(inputAge.current.value),
    email: inputEmail.current.value
   })
     getUsers()
 }  
  async function deleteUsers(id){
   await api.delete(`/users/${id}`) 
   getUsers()
 }  



  useEffect(() => {
    getUsers()
    }, []);

 

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuarios</h1>
       <input placeholder="Nome" name="nome" type="text" ref={inputName}/>
       <input placeholder="Idade" name="idade" type="number" ref={inputAge}/>
       <input placeholder="Email" name="email" type="email" ref={inputEmail}/>

       <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>


      {users.map( user => (
        <div key={user.id} className="card">

         <div>
          <p>Nome:  <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
         </div>
         <button onClick={() => deleteUsers(user.id)} className="delete-btn">
          <img src={Trash} alt="Trash for delete" />
         </button>
      </div>
      ))}


    </div>
 
  
  );
}

export default Home;