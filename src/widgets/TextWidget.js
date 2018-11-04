import React, { Component } from 'react';

class TextWidget extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
    }
  }

  enableEditMode(e) {
    e.persist()

    this.props.onEdit(e)
    this.setState({disabled: false, _value: this.props.value})
  }

  disableEditMode(e, saveState) {
    e.persist()

    if(saveState == true) {
      this.props.onSave(e, this.props.value)
    } else {
      this.props.onCancel(e, this.state._value)
    }

    this.setState({disabled: true, _value: undefined})
  }

  handleChange(e) {
    e.persist()
    this.props.onChange(e)
  }

  render() {
    const buttonClasses = ["form-control", "btn"]

    const editButtonClasses = (this.state.disabled) ? (
      buttonClasses.slice(0).concat(["btn-primary"]).join(' ')
    ) : (
      buttonClasses.slice(0).concat(["btn-primary", "d-none"]).join(' ')
    )

    const saveButtonClasses = (!this.state.disabled) ? (
      buttonClasses.slice(0).concat(["btn-success"]).join(' ')
    ) : (
      buttonClasses.slice(0).concat(["btn-success", "d-none"]).join(' ')
    )

    const cancelButtonClasses = (!this.state.disabled) ? (
      buttonClasses.slice(0).concat(["btn-danger"]).join(' ')
    ) : (
      buttonClasses.slice(0).concat(["btn-danger", "d-none"]).join(' ')
    )

    return (
      <div class="row wa-widget">
        <div class="col">
          <label class>{this.props.label}</label>
          <div class="input-group">
            <input type="text" className="form-control" disabled={this.state.disabled} placeholder={"Enter " + this.props.label + " ..."} value={this.props.value} onChange={(e) => {this.handleChange(e)}}/>
            <div class="input-group-append">
              <button type="button" className={editButtonClasses} onClick={(e) => {this.enableEditMode(e)}}>
                <i class="far fa-edit"></i>&nbsp;Edit
              </button>
              <button type="button" className={saveButtonClasses} onClick={(e) => {this.disableEditMode(e, true)}}>
                <i class="fas fa-check"></i>&nbsp;Save
              </button>
              <button type="button" className={cancelButtonClasses} onClick={(e) => {this.disableEditMode(e, false)}}>
                <i class="fas fa-times"></i>&nbsp;Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default TextWidget;
