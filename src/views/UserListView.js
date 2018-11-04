import React, { Component } from 'react';

import UserView from './UserView.js'

class UserListView extends React.Component {

  handleSave(e, index, field, value) {
    this.props.onSave(e, index, field, value)
  }

  handleCancel(e, index, field, value) {
    this.props.onCancel(e, index, field, value)
  }

  handleChange(e, field, index) {
    this.props.onChange(e, field, index)
  }

  handleDelete(e, index) {
    this.props.onDelete(e, index)
  }

  handleAddNewUser(e) {
    this.props.onAddUserViewChange(e)
  }

  render() {
    const users = this.props.users.map( (obj, index) => (
          <UserView
            index={index}
            tag={obj.tag}
            name={obj.name}
            address={obj.address}
            date_of_birth={obj.date_of_birth}

            editMode={true}

            onSave={(e, index, field, value) => (this.handleSave(e, index, field, value))}
            onCancel={(e, index, field, value) => (this.handleSave(e, index, field, value))}
            onChange={(e, field, index) => (this.handleChange(e, field, index))}
            onDelete={(e, index) => (this.handleDelete(e, index))}
          />
    ))

    return (
    <div>
      <form>
        <fieldset>
          <legend>Users</legend>
          {users}
          <div className="">
            <div class="row wa-control-panel">
              <div class="col-2">
                <button type="button" class="form-control btn btn-success" onClick={(e) => {this.handleAddNewUser(e)}} >
                  <i class="fas fa-user-plus"></i>&nbsp;Add User
                </button>
              </div>
              <div class="col-2">
                <button class="form-control btn btn-primary">Reload</button>
              </div>
              <div class="col">
              </div>
            </div>
          </div>
        </fieldset>
      </form>
      <nav class="wa-pagination">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <ul class="pagination pagination-lg">
              <noscript>//TODO: Pagination
              </noscript>
            </ul>
          </div>
          <div class="col"></div>
      </div>
    </nav>
    </div>
  )
  }
}

export default UserListView;
