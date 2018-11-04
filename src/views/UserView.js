import React, { Component } from 'react';

import TextWidget from '../widgets/TextWidget.js'
import CalendarWidget from '../widgets/CalendarWidget.js'

class UserView extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(e, field) {
    this.props.onChange(e, field, this.props.index)
  }

  handleEdit(field) {
  }

  handleSave(e, field, value) {
    this.props.onSave(e, this.props.index, field, value)
  }

  handleCancel(e, field, value) {
    this.props.onCancel(e, this.props.index, field, value)
  }

  renderBackgroundColor() {
    const classes = ['wa-control-panel',  'container-fluid', 'form-group']

    return (
      this.props.index % 2 == 0 ?
      classes.slice(0).concat(['bg-light', 'text-dark']).join(' ') :
      classes.slice(0).concat(['bg-dark', 'text-light']).join(' ')
    )
  }

  renderBottomButton() {
    return (
        this.props.editMode ? (
        <button type="button" class="form-control btn btn-danger" onClick={(e) => {this.props.onDelete(e, this.props.index)}} >
          <i class="fas fa-user-minus"></i>&nbsp;Delete
        </button>
      ) : null
    )
  }

  render() {
    return (
      <div className={this.renderBackgroundColor()}>
            <TextWidget
              label="Name"
              value={this.props.name}
              onChange={(e) => {this.handleChange(e, "name")}}
              onEdit={(e) => {this.handleEdit("name")}}
              onSave={(e, value) => {this.handleSave(e, "name", value)}}
              onCancel={(e, value) => {this.handleCancel(e, "name", value)}}
            />
            <TextWidget
              label="Address"
              value={this.props.address}
              onChange={(e) => {this.handleChange(e, "address")}}
              onEdit={(e) => {this.handleEdit("address")}}
              onSave={(e, value) => {this.handleSave(e, "address", value)}}
              onCancel={(e, value) => {this.handleCancel(e, "address", value)}}
            />
            <CalendarWidget
              label="Date of Birth"
              value={this.props.date_of_birth}
              onChange={(e) => {this.handleChange(e, "date_of_birth")}}
              onEdit={(e) => {this.handleEdit("date_of_birth")}}
              onSave={(e, value) => {this.handleSave(e, "date_of_birth", value)}}
              onCancel={(e, value) => {this.handleCancel(e, "date_of_birth", value)}}
              />
            <div class="row wa-delete-user">
              <div class="col-2">
                {this.renderBottomButton()}
              </div>
              <div class="col"></div>
            </div>
        </div>
    )
  }
}

export default UserView;
