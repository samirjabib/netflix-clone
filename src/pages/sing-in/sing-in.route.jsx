import { async } from "@firebase/util";
import { useState } from "react";

import { Link } from 'react-router-dom'

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
 } from '../../utils/firebase/firebase.util'; 

const defaultFormFields = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
   
};


const SingIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { name, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


   const handleSubmit = async ( event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password do not match');
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password,
            );
            await createUserDocumentFromAuth(user , { name });
            console.log(user)
            resetFormFields
        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encontered an error ', error)
            }
        }
   };

    const handleChange = (event) => {    
        const { name, value } = event.target;

        setFormFields({...formFields, [name]:value })
    }


    return (
        <div className="w-full h-screen ">
                <img 
                    className="hidden sm:block absolute w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/ef400943-06c7-4099-89ab-922b766fb697/CO-es-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                    alt="background-netflix" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50 ">
                    <div className="max-w-[450px] h-[600px] bg-black/75 text-white mx-auto">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign In</h1>
                            <form className="w-full flex flex-col py-4" onSubmit={ handleSubmit }>
                                <input
                                className="py-3 my-2 bg-gray-600 rounded"
                                label='name'
                                type='text'
                                required
                                name='name'
                                value={name}
                                autoComplete='name'
                                onChange={handleChange}
                                placeholder='Name'
                                />
                                <input
                                    className="py-3 my-2 bg-gray-600 rounded"
                                    label='email'
                                    type='email'
                                    required
                                    name='email'
                                    value={email}
                                    autoComplete='email'
                                    onChange={handleChange}
                                    placeholder='Email'
                                 
                                />
                                <input
                                    className="py-3 my-2 bg-gray-600 rounded"
                                    label='password'
                                    type='password'
                                    required
                                    name='password'
                                    value={password}
                                    autoComplete='current-password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                />
                               
                                <input
                                className="py-3 my-2 bg-gray-600 rounded"
                                label='password'
                                type='password'
                                required
                                name='confirmPassword'
                                value={confirmPassword}
                                autoComplete='current-password'
                                onChange={handleChange}
                                placeholder='Confirm password'
                                />
                                <button 
                                    className="bg-red-600 py-3 my-6 rounded font-bold"
                                >
                                    Sign In
                                </button>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p><input type='checkbox' className="mr-2"/>Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8">
                                <span className="text-gray-600">New to Netflix?</span>
                                {' '}
                                <Link to='/login'>
                                    Sign Up
                                </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SingIn;