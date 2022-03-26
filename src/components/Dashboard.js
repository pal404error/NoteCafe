import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./dash.css"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <body>
        
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"  />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="w3-top">
          <div className="w3-bar w3-red w3-card w3-left-align w3-large">
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="#" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
            <a href="#" className="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
            <a href="#NOTES" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Notes</a>
            <a href="#TODO" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">To-Do List</a>
            <a href="#CHAT" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Community Chat</a>
            <a href="#PDF" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Pdf Reader</a>
          </div>
          <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
          <a href="/" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
    <a href="/note" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Notes</a>
    <a href="/todo" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">To-Do List</a>
    <a href="/chat" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Community Chat</a>
    <a href="/pdf" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Pdf Reader</a>
    <a href="/logout" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">LOGOUT</a>
          </div>
        </div>
        <header className="w3-container w3-red w3-center" >
          <h1 className="w3-margin w3-jumbo">Note Cafe</h1>
        </header>

        <div className="w3-row-padding w3-padding-64 w3-container" id="NOTES">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>Notes</h1>
              <h5 className="w3-padding-32">Users can take notes with all the work they are doing and note the important stuff here which saves the data which will help  the user later and he can see all his given notes.</h5>

              <a target="_self" href="/note">
                <input  type="button" className="Choice-buttons" value="Go There"/>
                </a>

            </div>

            <div className="w3-third w3-center">
              <i className="fa fa-sticky-note" aria-hidden="true" id="notee"></i>
            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container" id="TODO">
          <div className="w3-content">
            <div className="w3-third w3-center">
              <i className="fa fa-check-square" aria-hidden="true" id="notee"></i>
            </div>

            <div className="w3-twothird">
              <h1>To-Do List</h1>
              <h5 className="w3-padding-32">Place where you mark all your work and tasks which are to be done  also to be given to anyone according to the users requirements.</h5>

              <a target="_self" href="/todo">
                <input  type="button" className="Choice-buttons" value="Go There"/>
                </a>

            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-padding-64 w3-container" id="CHAT">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>Community Chat</h1>
              <h5 className="w3-padding-32">Users can chat together and share their views and queries also if required can share images and screenshots of their Codes.</h5>

              <a target="_blank" href="/chat">
                <input  type="button" className="Choice-buttons" value="Go There"/>
                </a>

            </div>

            <div className="w3-third w3-center">
              <i className="fa fa-comments" aria-hidden="true" id="notee"></i>
            </div>
          </div>
        </div>

        <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container" id="PDF">
          <div className="w3-content">
            <div className="w3-third w3-center">
              <i className="fa fa-file-pdf-o" aria-hidden="true" id="notee"></i>
            </div>

            <div className="w3-twothird">
              <h1>PDF Reader</h1>
              <h5 className="w3-padding-32">Users can open up PDF to read the data just by giving the url or giving the directory location from your pc and you can easily open your pdf while working.</h5>
              <a target="_blank" href="/pdf">
              <input  type="button" className="Choice-buttons" value="Go There"/>
              </a>
            </div>
          </div>
        </div>

        <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
            <h1 className="w3-margin w3-xlarge">“Knowledge is power.” – Francis Bacon</h1>
        </div>
        <footer className="w3-container w3-padding-64 w3-center w3-opacity">  
          <div className="w3-xlarge w3-padding-32">
            <p text-align="centre">Copyright claim- Note Cafe</p>
            <i className="fa fa-copyright" aria-hidden="true"></i>
         </div>
         <div>
          <a href="https://github.com/pal404error/NoteCafe" target="_blank"><i className="fa fa-github" aria-hidden="true" id="ico"></i></a>
          <a href="mailto:notecafe.team@gmail.com"><i className="fa fa-envelope" aria-hidden="true" id="ico"></i></a>
          
         </div>
         
        </footer>
        </body>
    </>
  )
}
