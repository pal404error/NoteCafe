import React from 'react';
const Header = props => (
  <>
         <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"  />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div className="w3-top">
  <div className="w3-bar w3-red w3-card w3-left-align w3-large">
  <a href="/" className="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
    <a href="/note" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Notes</a>
    <a href="/todo" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">To-Do List</a>
    <a href="/chat" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Community Chat</a>
    <a href="/pdf" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Pdf Reader</a>
    <a href="/logout" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">LOGOUT</a>
  </div>
</div>
  <header className="header">

    <h3 className="title">Note Café</h3>
  </header>
</>
);

export default Header;
