import React from 'react';
import { connect } from 'react-redux'
import {WRITE_Message, SET_Messages} from '../redux/actions'
import socket from '../socket'
import Chat from './presentational/Chat'

 function ChatContainer({Users, ADD_Message, SET, id, name, message, data}){

    function SetMessages(){
        socket.emit('ROOM:MESSAGES', {id, name, message});
        clearInput.current.value='';
    }

    const clearInput = React.createRef();

    React.useEffect(() =>{
        socket.on('ROOM:NEW_MESSAGE', function(data){
            SET(data.message, data.name);
            console.log(data)
        })},[]);

    return(
        <Chat
            Users={Users} 
            ADD_Message={ADD_Message}
            id={id}
            name={name}
            data={data}
            clearInput={clearInput}
            SetMessages={SetMessages} />
    )
}
function mapStateToProps(state){
    return{
        message:state.WRITE_Message,
        id:state.SET_ID,
        name:state.SET_Name,
        data:state.SET_Messages
    }
}
function mapDispatchToProps(dispatch){
    return{
        ADD_Message:(text) => dispatch(WRITE_Message(text)),
        SET: (data, id) => dispatch(SET_Messages(data, id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)