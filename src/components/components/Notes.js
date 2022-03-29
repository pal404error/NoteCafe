import React, { Component } from 'react';
import * as firebase from 'firebase';

export class Notes extends Component {
  constructor (props) {
    super(props);
  }

  removeNote (id) {
    // let userid = localStorage.getItem("user_id");
    firebase.database().ref('notes').child(`${this.props.userId}`).child(id).remove();
  }

  render() {
    return (
      <section className="notes-wrapper">
        <h3>My Notes</h3>
        <div className="notes">
          {this.props.notes.map(note => (
            <div className="note" key={note.id}>
              <div className="note-title">
                <h3>{note.title}</h3>
                <div className="remove" onClick={() => this.removeNote(note.id)}>x</div>
              </div>
              <div className="note-content">
                <p>{note.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Notes;