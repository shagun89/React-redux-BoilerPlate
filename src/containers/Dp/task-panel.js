import React, { Component } from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import AddTaskForm from './taskForm';
import { Modal } from 'react-bootstrap';
import TaskCard from './card';
import { handleOpen, handleClose, getData} from './actions.js';
import { set } from 'immutable';

const button_style = {
    margin: '0px',
    color: 'navy',
    padding: '0 10px',
}
const leftIcon = {
    marginRight: '10px',
}
const button = {
    margin: '0px',
     padding: '0 10px',
     radius: '12px',
     fontSize: '20px',
     marginLeft: '10px',
     marginTop: '30px'
}

class Task extends React.Component{


    componentDidMount(){
        this.props.getData()
    }
    
    render() {
        console.log("task props: ",this.props);
        
        return (
        <div className="wrapper">
        <header className="clear">
          <ul>
            <li>Rejected</li>
            <li>Pending</li>
            <li>Development</li>
            <li>Testing</li>
            <li>Production</li>
          </ul>
          
        </header>
        
  <div className="row">
  <div className="column rejected" >
  {
     this.props.rejected && 
     this.props.rejected.map((elem)=>{
        return (<TaskCard 
                  title = {elem.title} 
                  description = {elem.description} 
                  id = {elem.id} 
                  stat = {elem.editStatus} 
                  element = {elem}
                />);
      })
  }
  </div>
  <div className="column pending" >
  {
      this.props.pending &&
      this.props.pending.map((elem)=>{
        return <TaskCard title = {elem.title} description = {elem.description} id = {elem.id} element = {elem}/>
      })
  }
  </div>
  <div className="column development" >
  {
      this.props.development && 
      this.props.development.map((elem)=>{
        return <TaskCard title = {elem.title} description = {elem.description} id = {elem.id} element = {elem}/>
      })
  }
  </div>
  <div className="column testing" >
  {
      this.props.testing && 
      this.props.testing.map((elem)=>{
        return <TaskCard title = {elem.title} description = {elem.description} id = {elem.id}/>
      })
  }
  </div>
  <div className="column production" >
  {
      this.props.production && 
      this.props.production.map((elem)=>{
        return <TaskCard title = {elem.title} description = {elem.description} id = {elem.id}/>
      })
  }
  </div>
</div>
        <div id="page-container">
          
          <footer id= "footer">
          <ul>
            <li>
            <Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'REJECTED')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button>
            </li>
            <li><Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'PENDING')}}>
            <AddIcon style={leftIcon} />
            Add a task
            
            </Button></li>
            <li ><Button variant="contained" style= {button_style} onClick={() => {this.props.handleOpen(true, 'DEVELOPMENT')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button></li>
            <li ><Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'TESTING')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button></li>
            <li><Button variant="contained"  style= {button_style} onClick={() => {this.props.handleOpen(true, 'PRODUCTION')}}>
            <AddIcon style={leftIcon} />
            Add a task
            </Button></li>
          </ul>
          </footer>
        </div>
        
{/*       
        <Modal 
        show={this.props.openForm} onHide={() => {this.props.handleClose(false)}}
        >
        {console.log(this.props.openForm)}
        <AddTaskForm  />
        getData = {this.props.getData}
        </Modal> */}

<Modal show={this.props.openForm} onHide={()=>{this.props.handleClose(false)}}>
        
          <Modal.Header closeButton>
            <Modal.Title>Create New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <AddTaskForm status = {this.props.taskStatus} dataHandler = {this.props.getData}
              
              />
          </Modal.Body>
          
</Modal>
        
        </div>
        );
    }
}

const mapStateToProps = state => ({
    openForm: state.postReducer.openForm,
    taskStatus: state.postReducer.taskStatus,
    formData :  state.postReducer.formData,
    rejected :  state.postReducer.rejected,
    pending :  state.postReducer.pending,
    testing :  state.postReducer.testing,
    development :  state.postReducer.development,
    production :  state.postReducer.production
})

export default connect(mapStateToProps, { handleOpen, handleClose, getData })(Task);

// Unsimplified Route Planning
// Create a script for maintaining planned routes for distinct stations and dispatch points