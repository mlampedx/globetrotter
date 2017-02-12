import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class ExpandableDataRow extends Component {
  state = {
    open: false,
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render = () => {
    const actions = [
      <RaisedButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton
          label="View Full Text"
          secondary={true}
          onTouchTap={this.handleOpen}
          onClick={this.handleOpen}
        />
        <Dialog
          title= {this.props.name}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          { this.props.value }
        </Dialog>
      </div>
    );
  }
}
