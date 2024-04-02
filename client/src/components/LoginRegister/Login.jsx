import React, { useState, useEffect } from 'react'
import Navbar from '../navbar'
import { useUserAuth } from './Authentication'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { logIn } = useUserAuth()

  const handleSubmit = async () => {
    setError("")
    try{
      await logIn(email, password)
      navigate("/")
    }catch(err){
      setError(err)
    }
  }

  return (
    <>
    <div>
        <Navbar/>
        <div className='pt-24 grid grid-cols-3 gap-y-12'>
        <h1 className='font-bold text-center text-xl col-span-3'>Login</h1>
        <input
          className="rounded text-base col-start-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-white"
          type="text"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded text-base col-start-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-white"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="rounded text-base text-white justify-self-center col-start-2 w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring hover:border-blue-500 " onClick={() => handleSubmit()}>Log In</button>
        </div>
        </div>
    </>
  )
}

export default Login