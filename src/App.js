import React, { Component } from 'react';

import UserListView from './views/UserListView'
import AddUserView from './views/AddUserView'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      userListing: true,
      users: [
        {
          tag: "ABCDEFG",
          name: "Elia Videtta",
          address: "London",
          date_of_birth: "2019-03-29"
        },
        {
          tag: "HIJKLMN",
          name: "Elia Videtta",
          address: "London",
          date_of_birth: "2019-03-29"
        },
      ]
    }
  }

  handleAddUserViewChange(e) {
    this.setState({userListing: false})
  }

  handleUserListViewChange(e) {
    this.setState({userListing: true})
  }

  handleSave(e, index, field, value) {
    let users = this.state.users.slice(0)
    users[index][field] = value
    this.setState({users: users}, () => {console.log(this.state.users)})
  }

  handleCancel(e, index, field, value) {
    let users = this.state.users.slice(0)
    users[index][field] = value
    this.setState({users: users}, () => {console.log(this.state.users)})
  }

  handleChange(e, field, index) {
    let users = this.state.users.slice(0)
    users[index][field] = e.target.value
    this.setState({users: users}, () => {console.log(this.state.users)})
  }

  handleDelete(e, index) {
    let users = this.state.users.slice(0)
    const doDelete = window.confirm("Are you sure you wanted to delete " + users[index].name + "?")
    if (doDelete == true) {
      users.splice(index, 1)
      this.setState({users: users}, () => {console.log(this.state.users)})
    }
  }

  handleAddUser(e, user) {
    let users = this.state.users.slice(0)
    users.push(user)
    this.setState({users: users}, () => {console.log(this.state.users)})
  }

  renderView() {
    return (
      this.state.userListing ? (
        <UserListView
          users={this.state.users}
          onAddUserViewChange={(e) => {this.handleAddUserViewChange(e)}}
          onSave={(e, index, field, value) => {this.handleSave(e, index, field, value)}}
          onCancel={(e, index, field, value) => {this.handleCancel(e, index, field, value)}}
          onChange={(e, field, index) => {this.handleChange(e, field, index)}}
          onDelete={(e, index) => {this.handleDelete(e, index)}}
        />
      ) : (
        <AddUserView
          onUserListViewChange={(e) => {this.handleUserListViewChange(e)}}
          onAddUser={(e, user) => {this.handleAddUser(e, user)}}
        />
      )
    )
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between fixed-top">
          <a class="navbar-brand" href="#">Web App</a>
          <form class="form-inline">
              <button type="button" class="form-control btn btn-success my-2 my-sm-0" onClick={(e) => {this.handleAddUserViewChange(e)}} >
                <i class="fas fa-user-plus"></i>&nbsp;Add User
              </button>
          </form>
        </nav>
        <div id="view" class="container-fluid">
          <div class="row">
            <div class="col"></div>
            <div class="col-8">
              <div class="alert alert-primary d-none" role="alert">
                Hello!
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col-8">
              {this.renderView()}
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
