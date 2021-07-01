import React from 'react';
import { connect } from 'react-redux'
import JoinBlock from './presentational/JoinBlock';
import {ADD_ID, ADD_Name} from '../redux/actions'

function JoinBlockContainer({ADD_ID,ADD_Name, id, name, Login, IsLogged}) {
    return(  
      <JoinBlock
        ADD_ID={ADD_ID}
        ADD_Name={ADD_Name}
        id={id}
        name={name}
        Login={Login}
        IsLogged={IsLogged}/>
    )
    
}
function mapStatetoProps(state){
    return{
      id: state.SET_ID,
      name: state.SET_Name
    }
  }
function mapDispatchToProps(dispatch) {
    return{
      ADD_ID: id => dispatch(ADD_ID(id)),
      ADD_Name: name => dispatch(ADD_Name(name))
    }}
export default connect(mapStatetoProps, mapDispatchToProps)(JoinBlockContainer);