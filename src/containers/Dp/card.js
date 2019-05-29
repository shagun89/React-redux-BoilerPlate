import React from 'react';
import './styles.scss';
import { handleExpandClick, handleEditClick } from './actions';
import { connect } from 'react-redux';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CreateIcon from '@material-ui/icons/Create'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Modal } from 'react-bootstrap';
import UpdateTaskForm from './update-form';

class TaskCard extends React.Component {

  render() {
    console.log("Taskcard Props: ", this.props);

    return (
      <div>
        <Card style={{ maxWidth: 400 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="Letter" style={{ backgroundColor: red[500] }}>
                T
          </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.title}
            subheader="created At"
          />
          <CardActions >
            <IconButton aria-label="Update" onClick={() => {this.props.handleEditClick(!this.props.edit,this.props.element)}}>
              <CreateIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              style={{ transform: 'rotate(180deg)', marginLeft: 'auto' }}
              onClick={() => this.props.handleExpandClick(!this.props.expanded)}
              aria-expanded={this.props.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.props.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>DESCRIPTION:</Typography>
              <Typography paragraph>
                {this.props.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Modal show={this.props.edit} onHide={() => {
          this.props.handleEditClick(false)

        }}>
          <Modal.Header closeButton>
            <Modal.Title >Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <UpdateTaskForm
              prevTitle={this.props.selectedElement && this.props.selectedElement.title}
              prevDesc={this.props.selectedElement && this.props.selectedElement.description}
              taskId={this.props.selectedElement && this.props.selectedElement.id}
            />
          </Modal.Body>

        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  expanded: state.postReducer.expanded,
  edit: state.postReducer.edit,
  selectedElement: state.postReducer.selectedElement
})
export default connect(mapStateToProps, { handleExpandClick, handleEditClick })(TaskCard);

