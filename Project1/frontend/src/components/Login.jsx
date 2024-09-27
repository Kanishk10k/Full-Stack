import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import img from '../assets/login.jpeg'


const Login = () => {
    const validationSchema = z.object({
        email : z.string().min(1,"Email is required").email("Invalid Email"),
        password : z.string().min(1, "Password is required")
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading , error , isAuth } = useSelector((state)=>state.auth);


    const { register , handleSubmit , formState : {errors} } = useForm({
        resolver : zodResolver(validationSchema)
    });
    const onSubmit = async (data)=>{
        dispatch(login(data));
    }

    useEffect(()=>{
        if(error){
            alert(error.message)
        }
    },[error]);

    useEffect(()=>{
      if(isAuth){
        navigate("/")
      }
    },[isAuth]);

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';  
      };
    return (
        <div className='flex w-[90%] h-4/5 justify-between items-center bg-white shadow-2xl shadow-green-600'>
            <div>
                <img src={img} alt="" className='w-2/3 mx-4'/>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-start'>
            <h1 className='text-3xl w-4/5 font-semibold text-center h-1/3 flex items-center justify-center'>Welcome Back !</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>
                    <div>
                    <label className='text-gray-500 font-medium'>Email</label>
                    <input type="email" className={`block p-2 border outline-none w-4/5 my-2 ${errors.email ? 'border-red-500' : "border-gray-700"}`} {...register("email")}  />
                    {errors.email && (
                            <p className='text-xs text-red-500'>{errors.email.message}</p>
                        ) }
                    </div>
                    <div>
                    <label className='text-gray-500 font-medium'>Password</label>
                    <input type="password" className={`block p-2 border border-gray-700 outline-none w-4/5 my-2 ${errors.password ? 'border-red-500' : "border-gray-700"}`} {...register("password")} />
                    {errors.password && (
                            <p className='text-xs text-red-500'>{errors.password.message}</p>
                        ) }
                    </div>
                    
                    </div>
                    <button className='p-2 w-[70%] my-4 font-medium text-green-500 shadow bg-indigo-800 rounded-full active:bg-green-500 active:text-indigo-800'>{isLoading ? "Loading" : "Log-In"}</button>
                </form>
                <button className='p-2 w-4/5 my-2 font-medium text-gray-100 shadow bg-red-700 active:bg-red-800' onClick={handleGoogleLogin}>Log-In With Google</button>
            </div>
        </div>
    )
}

export default Login;

