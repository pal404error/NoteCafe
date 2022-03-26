import React, { Component } from 'react';
import * as firebase from 'firebase';

export class NotesForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      note: ''
    }

    this.createNote = this.createNote.bind(this);
  }

  onChangeHandler (evt, key) {
    this.setState({
      [key]: evt.target.value
    });
  }

  createNote () {
    if (this.state.title !== '' && this.state.note !== '') {
      firebase.database().ref('notes').push({
        title: this.state.title,
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <section className="noteform">
        <h3>Create New Note</h3>
        <div className="form-group">
          <label htmlFor="noteform-title">Title</label>
          <input type="text" id="noteform-title" name="noteform-title" value={this.state.title} onChange={(evt) => this.onChangeHandler(evt, 'title')} />
        </div>
        <div className="form-group">
          <label htmlFor="noteform-note">Note</label>
          <textarea name="noteform-note" id="noteform-note" value={this.state.note} onChange={(evt) => this.onChangeHandler(evt, 'note')}></textarea>
        </div>
        <button onClick={this.createNote}>Create Note</button>
      </section>
    )
  }
}

export default NotesForm;