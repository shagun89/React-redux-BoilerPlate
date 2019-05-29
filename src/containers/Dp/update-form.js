import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.scss';
import { handleChangeDesc, handleChangeTitle} from './actions.js';
import TaskCard from './card';


const container = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    margin: '20px',
}

const textField = {
    marginLeft: '5px',
    marginRight: '5px',
    width: 400,
}

const button = {
    margin: '0px',
     padding: '0 10px',
     radius: '12px',
     fontSize: '20px',
     marginLeft: '50px',
     marginTop: '30px'
}

const push_down = {
    marginTop : 20,
    marginLeft : 7
}

const formControl = {
    margin: '5px',
    minWidth: 120,
    marginLeft : -5
}



class UpdateTaskForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted data ' + this.props.title + ' ' + this.props.description);
        
    } 
    
  render() {
    console.log("Update props: " + this.props.taskId);
    debugger;
    return (
      
      <form style={container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      
      <div>
        <TextField 
          id="standard-name"
          label="Title"
          style={textField}
          value = {this.props.prevTitle}
          onChange={(event) => this.props.handleChangeTitle(event.target.value)}
          margin="normal"
        />
      </div>
      <div >
        <TextField
          id="standard-uncontrolled"
          label="Description"
          name="description"
          value = {this.props.prevDesc}
          multiline = {true}
          style={textField}
          onChange={(event) => this.props.handleChangeDesc(event.target.value)}
          margin="normal"
        />
      </div>
      
      <div>
        
        <Button variant= "contained" color="primary" style={button} type="submit">Save</Button>

        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
    title: state.postReducer.title,
    description: state.postReducer.description,
    
})

export default connect(mapStateToProps, { handleChangeTitle, handleChangeDesc })(UpdateTaskForm);

