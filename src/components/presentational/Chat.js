import React from 'react';
import './Chat.css';


 export default function Chat({Users, ADD_Message, id, name,  data, clearInput, SetMessages}){

    return(
        <div className='Chat-wrapper'>
            <div className="Users">
                <span className='Room'>Комната: {id}</span>
                <span className='Online'>Онлайн({Users.length})</span>
                <ul className='Online-users'>
                    {Users.map((User,index) =><li className={(User===name) ? 'active-user' : ''} key={index+User}>{User}</li>)}
                </ul>
            </div>
            <div className='Chat'>
                <ul className='Messages'>
                    {data.map(message =>
                        <li key={message} className={(message[1]===name) ? 'Message':'Your-Message'}>
                            {!(message[1] === name) ? <span className='Message-User'>{message[1]} пишет:</span> : ''}  
                            <p>{message[0]}</p>
                        </li>
                    )} 
                </ul>
                <div className='your-message'>
                    <input
                        placeholder="Напишите о чем вы думаете"
                        className='textarea-input'
                        onChange={(e) => ADD_Message(e.target.value)}
                        ref={clearInput}></input>
                    <button
                        type="button"
                        className=" btn-custom btn btn-primary"
                        onClick={SetMessages}
                        >Отправить</button>
                </div>
            </div>
        </div>
    )
}
