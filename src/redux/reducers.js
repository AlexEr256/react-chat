
let initialID='';
let initialName='';

export function SET_Name(state=initialName, action){
    switch(action.type){
        
        case 'ADD_Name':
            return action.name
        default:
            return state;
    }
}
export function SET_ID(state=initialID, action){
    switch(action.type){
        case 'ADD_ID':
            return action.id
        default:
            return state;
    }
}

export function SET_LOG(state =false, action){
    switch(action.type){
        case 'IS_LOGGED':
            return !action.flag
        default:
            return state;
    }
}

export function WRITE_Message(state = '', action){
    switch(action.type){
        case 'WRITE_Message':
            return action.text;
        default:
            return state;
    }
}
export function SET_Messages(state=[], action){
    switch(action.type){
        case'SET_MESSAGE':
            return [...state, [action.message, action.id]];
        default:
            return state;
        
    }
}

