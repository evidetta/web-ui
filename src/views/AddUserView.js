import React, { Component } from 'react';

import UserView from './UserView.js'

class AddUserView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "",
        address: "",
        date_of_birth: ""
      }
    }
  }

  handleSave(e, field, value) {
    let user = this.state.user
    user[field] = value
    this.setState({user: user}, () => {console.log(this.state.user)})
  }

  handleCancel(e, field, value) {
    let user = this.state.user
    user[field] = value
    this.setState({user: user}, () => {console.log(this.state.user)})
  }

  handleChange(e, field) {
    let user = this.state.user
    user[field] = e.target.value
    this.setState({user: user}, () => {console.log(this.state.user)})
  }

  handleAddNewUser(e) {
    this.props.onAddUser(e, this.state.user)
    this.props.onUserListViewChange(e)
  }

  handleCancelAddNewUser(e) {
    this.props.onUserListViewChange(e)
  }

  render() {
    return (
    <div>
      <form>
        <fieldset>
          <legend>Add User</legend>
          <UserView
            index={0}
            editMode={false}

            name={this.state.user.name}
            address={this.state.user.address}
            date_of_birth={this.state.user.date_of_birth}

            onSave={(e, index, field, value) => (this.handleSave(e, field, value))}
            onCancel={(e, index, field, value) => (this.handleSave(e, field, value))}
            onChange={(e, field, index) => (this.handleChange(e, field))}
          />
          <div className="">
            <div class="row wa-control-panel">
              <div class="col-2">
                <button type="button" class="form-control btn btn-success" onClick={(e) => {this.handleAddNewUser(e)}} >
                  <i class="fas fa-user-plus"></i>&nbsp;Add
                </button>
              </div>
              <div class="col-2">
                <button type="button" class="form-control btn btn-danger" onClick={(e) => {this.handleCancelAddNewUser(e)}} >
                  <i class="fas fa-times"></i>&nbsp;Cancel
                </button>
              </div>
              <div class="col">
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
  }
}

export default AddUserView;
