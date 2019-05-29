import { Constants } from './constants';
import axios from 'axios';
import {doHttpPost, doHttpGet} from '../../components/utilities.js';

export function handleMenuClose(value){
  return (dispatch) => {
    dispatch({
        type : Constants.MENU_STATE_TOGGLE,
        anchorEl: value
    });
}
}

export function handleAddMenuClose(value){
  return (dispatch) => {
    dispatch({
        type : Constants.ADDMENU_STATE_TOGGLE,
        addanchorEl: value
    });
}
}



export function handleAddMenuOpen(value){
  console.log("Value in action", value)
  return (dispatch) => {
    dispatch({
        type : Constants.ADDMENU_STATE_OPEN,
        addanchorEl: value
    });
}
}

export function handleProfileMenuOpen(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.MENU_STATE_OPEN,
        anchorEl: value
    });
}
}

export function handleOpen(value, stat){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.FORM_TOGGLE,
        openForm: value,
        taskStatus: stat
    });
}
}

export function handleClose(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.FORM_TOGGLE,
        openForm: value
    });
}
}

export function handleChangeTitle(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.TITLE_CHANGE,
        title: value
    });
}
}

export function handleChangeDesc(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.DESC_CHANGE,
        description: value
    });
}
}

export function handleChangeStatus(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.STATUS_CHANGE,
        stat: value
    });
}
}

export function handleOnClose(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.TOGGLE_CLOSE,
        toggle: value
    });
}
}

export function handleExpandClick(value){
  console.log("value in action: ",value);
  return (dispatch) => {
    dispatch({
        type : Constants.EXPAND_TOGGLE,
        expanded: value
    });
}
}

export function handleEditClick(value, selectedElement){
  console.log("specific id in actions : ", selectedElement);
  
  return (dispatch) => {
    dispatch({
      type : Constants.EDIT_TASK,
      edit: value,
      selectedElement
  });
}
    
}

export function postFormdata (submitData) {
  console.log("value in action: ",submitData);
  return (dispatch) => {
    var url = 'http://192.168.36.64:8080/user/tasks';
    let options = {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbnVyYWciLCJleHAiOjE1NTk4OTAyNDB9.DzA2KRKqkXPqeLQ9D7V_J1ln8za69VyjC6urRBKn82doX8HW_EV8TOydHC4Axe9_gexb11jqiLmvY93YBre9Zg',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
  }
    var promise = doHttpPost(url, submitData, options);
  
    promise.then((response) => {
      
      console.log(response.data);

      dispatch({
        type : Constants.RECEIVED_DATA,
        receiveData: response.data
    });
    }, (error) => {
      console.log('Some error occured: ' + error);
    })
    
}


// const headers = {
//   'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmFrcml0aSIsImV4cCI6MTU1OTc5ODA4MH0.MUtLs3q6hgO56Nnlj9CYmDyt0yMj6XtvNvy1hUoBKCDKK6Fa23CGRAUk5xAytCAFTctW7Rmhi4itnPdGCNqCVg',
//   'Access-Control-Allow-Origin': '*',
//   "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
// };
// return (dispatch) => {
//   axios.get('http://192.168.36.64:8080/user/tasks',{headers})
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });
// }
}

export function getData(){

  return (dispatch) => {
    // var url = 'http://192.168.36.64:8080/user/tasks';
    var url = 'https://api.jsonbin.io/b/5cee25c83581160bd897450d';
    let options = {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmFrcml0aSIsImV4cCI6MTU1OTc5ODA4MH0.MUtLs3q6hgO56Nnlj9CYmDyt0yMj6XtvNvy1hUoBKCDKK6Fa23CGRAUk5xAytCAFTctW7Rmhi4itnPdGCNqCVg',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
  }
  var promise = doHttpGet(url, options);
   promise.then((response) => {
    var rej = [], pend = [], dev = [], test = [], prod = [];
    response.data.PENDING.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      pend.push(element);
    });
    response.data.REJECTED.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      rej.push(element);
    });
    response.data.DEVELOPMENT.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      dev.push(element);
    });
    response.data.TESTING.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      test.push(element);
    });
    response.data.PRODUCTION.forEach(element => {
      element.editStatus = false;
      element.expandStatus = false;
      prod.push(element);
    });
    dispatch({
      type : Constants.FORM_DATA,
      formData: response.data,
      rejected: rej,
      pending: pend,
      development: dev,
      testing: test,
      production: prod
  });
   })
}
}