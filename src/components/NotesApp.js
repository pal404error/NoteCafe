import React, { Component } from 'react';
import firebase from '../firebase';
import "./NotesApp.css"
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NotesForm from './components/NotesForm';
import Notes from './components/Notes';

class App extends Component {
  constructor () {
    super();

    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    this.db = firebase.database();

    this.listenForChange();
  }

  listenForChange () {
    this.db.ref('notes').on('child_added', snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note
      }

      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        notes: notes
      });
    });

    this.db.ref('notes').on('child_removed', snapshot => {
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key);

      this.setState({
        notes: notes
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <NotesForm />
          <Notes notes={this.state.notes} />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;