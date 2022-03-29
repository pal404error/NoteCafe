import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      localStorage.removeItem("user_id");
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">:(<br/> You sure want to logout ?</h2>
        <div class="w-100 text-center mt-2"><Button   onClick={handleLogout}> 
          Yes
        </Button></div>      
        </Card.Body>
      </Card> 
    </>
  )
}