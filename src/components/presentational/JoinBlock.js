import React from 'react';
import './JoinBlock.css'


export default function JoinBlock({ADD_ID,ADD_Name, id, name, Login, IsLogged}) {
    return(  
        <div className="join-wrapper">
            <input
                className="join-input" 
                placeholder="ID комнаты"
                onChange={(e) => ADD_ID(e.target.value)}></input>
            <input
                className="join-input"
                placeholder="Имя пользователя"
                onChange={(e) => ADD_Name(e.target.value)}></input>
            <button
                disabled={IsLogged}
                onClick={() =>Login(id, name)} className="btn btn-success">{IsLogged ? 'Вход...': 'Войти'}</button>
        </div>
    )
    
}
