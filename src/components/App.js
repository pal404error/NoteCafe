import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import ToDoApp from "./ToDoApp"
import NotesApp from "./NotesApp"
import Pdf from "./pdf"
import Logout from "./logout"
import Chat from "./chat"
import welcome from "./welcome"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />

              <PrivateRoute path="/todo" component={ToDoApp} />
              <PrivateRoute path="/note" component={NotesApp} />
              <PrivateRoute path="/pdf" component={Pdf} />
              <PrivateRoute path="/logout" component={Logout} />
              <PrivateRoute path="/chat" component={Chat} />
              <Route path="/welcome" component={welcome} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App