import React, { useState } from "react";
import firebase from "../../firebase";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User logged in already or has just logged in.
    console.log(user.uid);
  } else {
    // User not logged in or has just logged out.
  }
});



export default function Forms() {
  const [title, setTitle] = useState("");
  const [idToken, setIdToken] = useState(null);
  const userData = async() => {
    const user = firebase.auth().onAuthStateChanged();
    return user;
  }
  const user =  userData();
  const userId = user.uid;
  // React.useEffect(() => {
    
  // })

  // const generateIDTOKEN = async() => {
  //   const token = await firebase.auth().currentUser.getIdToken();
  //   return token;
  // }
  // const user = generateIDTOKEN();
  // const userId = user.uid;
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = async (event) => {
    event.preventDefault();
    console.log(title)
    try{
      console.log(firebase.database())
      const todoRef = firebase.database().ref("Todo");
      const todo = {
        title,
        complete: false,
      };
      await todoRef.push(todo);      
      setTitle("");
    }catch(e){
      console.log(e)
    }
    
  };

  return (
    <form onSubmit={createTodo}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={title}
        required
        onChange={handleChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}
