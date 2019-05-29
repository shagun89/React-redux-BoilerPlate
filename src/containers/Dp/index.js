import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddMenuClose, handleMenuClose, handleAddMenuOpen, handleProfileMenuOpen } from './actions.js';
import './styles.scss';
import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';


import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import Dropdown from 'react-bootstrap/Dropdown'
import { darkWhite } from 'material-ui/styles/colors';
import Task from './task-panel';


const search_style = {
    position: 'relative',
    borderRadius: '2px',
    backgroundColor: fade(darkWhite, 0.15),
    '&:hover': {
      backgroundColor: fade(darkWhite, 0.25),
    },
    marginRight: '5px',
    marginLeft: 0,
    width: '30%',
}

const search_icon = {
  width: '20px',
  height: '100%',
  position: 'absolute',
  marginRight: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const menuButton = {
  marginLeft: -12,
  marginRight: 20,
}
const input_style = {
  color: 'inherit',
  width: '100%',
  marginRight: '10px',
  paddingRight: '50px',
  paddingLeft: '10px'
}
const title = {
  marginRight : '10px'
}
const grow = {
  flexGrow : 1,
  display: 'flex'
}
const add_button = {
  marginLeft: 'auto'
}


class Dp extends Component {

  render() {
    console.log("props :", this.props);
    console.log("styles: " ,styles);
    const isMenuOpen = this.props.anchorEl;
    const isAddMenuOpen= this.props.addanchorEl;

    const renderAddMenu = (
      <Menu
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isAddMenuOpen}
          onClose = {() => {this.props.handleAddMenuClose(null)}}
          >
          <MenuItem onClick= {() => this.props.handleAddMenuClose(null)}>Add New Sprint</MenuItem>
          <MenuItem onClick= {() => this.props.handleAddMenuClose(null)}>Add New Board</MenuItem>
      </Menu>
    );
    
    const renderMenu = (
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.props.anchorEl}
        onClose = {() => {this.props.handleMenuClose(null)}}
      >
        <MenuItem onClick= {() => this.props.handleMenuClose(null)}>Profile</MenuItem>
        <MenuItem onClick= {() => this.props.handleMenuClose(null)}>My account</MenuItem>
      </Menu>
    );
  
    
    return (
    <div>
      
        <AppBar position="static">
          <Toolbar>
            <IconButton style = {menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography style = {title} variant="h6" color="inherit" noWrap>
              SCRUM BOARD
            </Typography>
            <div style={search_style}>
              <div style={search_icon}>
                <SearchIcon />
              </div>
              <InputBase
                className="input_style"
                placeholder="Search card, tasks..."
              />
            </div>
            <div />
            <div style = {grow} >
            
              <IconButton aria-owns={isAddMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={() => this.props.handleAddMenuOpen(true)}
                color="inherit"
                style = {add_button}>
              <AddIcon />
              </IconButton> 
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={
                  ()=>{
                  this.props.handleProfileMenuOpen(true)}
                 }
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {isAddMenuOpen && 
          renderAddMenu
        }
        {isMenuOpen &&
          renderMenu
        }
        
        <Task />
    </div>   
    );
  }
}


const mapStateToProps = state => ({
  // test: state.postReducer.test,
  // response: state.postReducer.response,
  // Postresponse: state.postReducer.Postresponse,
  // visibility: state.postReducer.visibility,
  // divState: state.postReducer.divState,
  anchorEl: state.postReducer.anchorEl,
  addanchorEl : state.postReducer.addanchorEl,
})

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// Test, ApiCall, postApiCall, openDiv,
export default connect(mapStateToProps, { handleAddMenuClose, handleMenuClose, handleAddMenuOpen, handleProfileMenuOpen })(Dp);

