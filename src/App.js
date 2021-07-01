import React from 'react';
import './App.css';
import JoinBlockContainer from '../src/components/JoinBlockContainer';
import ChatContainer from '../src/components/ChatContainer';
import axios from 'axios'
import socket from './socket'






function App() {

  const [IsLogged, setIsLogged] = React.useState(false);
  const [Users, setUsers] = React.useState([]);

  function Login(id, name){
    if(!id || !name){
      alert('Введите корректные данные!')
      return;
    }
    let userInfo ={
      id,
      name
    }
    axios.post('http://localhost:9999/', userInfo).then(() =>{
      setIsLogged(true);
      socket.emit('ROOM:JOIN', userInfo);
    });   
    }  

   React.useEffect(()=>{
    socket.on('ROOM:JOINED', function(data){
      setUsers(data);
    });
    socket.on('ROOM:LEAVED', function(data){
      setUsers(data);
    });
    
   },[])

  return ( 
        IsLogged ? <ChatContainer Users={Users}/> : <JoinBlockContainer Login={Login} IsLogged={IsLogged}/>
  );
}

export default App;
