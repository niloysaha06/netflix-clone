import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const {user, logIn} = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault()
        setError("")
        try{
          await logIn(email, password)
          navigate("/")
        }catch(error){
            console.log(error)
            setError(error.message)
        }
    }

  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/6b5a9af7-9be6-4a2c-bb89-3ee5f908c857/BD-en-20230327-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/'/>
        <div className='bg-black/60 fixed w-full h-screen top-0 left-0'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className=' max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[330px] mx-auto py-16'>
                    <h1 className='text-4xl  font-bold'>Sign In</h1>
                    {
                        error? <p className='p-3 bg-red-600 my-2'>{error}</p> : null
                    }
                    <form onSubmit={handleLogin} className='w-full flex flex-col py-4'>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className='p-3 my-3 bg-gray-500 rounded' 
                        type="email" 
                        placeholder="Email" 
                        autoComplete='email'
                        />
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        className='p-3 my-3 bg-gray-500 rounded' 
                        type="password" 
                        placeholder="Password" 
                        autoComplete='correct-password'
                        />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                    </form>
                    <div className='flex items-center justify-between text-sm text-gray-600'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember me</p>
                        <p>Need help?</p>
                    </div>
                    <p className='py-8'><span className='text-gray-600'>New to Netflix?</span><Link to="/signup"> Sign Up</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login