export function ADD_ID(id){
    return{
        type:'ADD_ID',
        id
    }
}

export function ADD_Name(name){
    return{
        type:'ADD_Name',
        name
    }
}
export function WRITE_Message(text){
    return{
        type:'WRITE_Message',
        text
    }
}
export function SET_Messages(message, id){
    return{
        type:'SET_MESSAGE',
        message, id   
    }
}
