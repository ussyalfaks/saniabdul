import React, { useState } from 'react'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle login logic here
//     console.log('Login attempted with:', { username, email, password, rememberMe })
//   }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 transform transition-all duration-300 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Welcome Back</h2>
          <p className="text-center text-gray-600 mb-8">Enter your credentials to access your account</p>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                className="appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
                id="username"
                type="text"
                placeholder="johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                className="appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                className="appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 pl-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>
          
          <div className="mb-6">
            <button
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition-all duration-300 ease-in-out hover:scale-105"
              type="submit"
            >
              Sign In
            </button>
          </div>
          
          {/* <div className="flex items-center justify-between mb-6">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 transition-colors duration-300" href="#">
              Forgot Password?
            </a>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 transition-colors duration-300" href="#">
              Sign up
            </a>
          </div> */}
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 SA Family. All rights reserved.
        </p>
      </div>
    </div>
  )
}