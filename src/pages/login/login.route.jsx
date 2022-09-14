import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";

const defaultFormFields = {
    email:'',
    password:'',
   
};

const Login = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    console.log(formFields)
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

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
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <form>
                                <FormInput
                                    label='email'
                                    type='email'
                                    required
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                 
                                />
                                <FormInput
                                    label='password'
                                    type='password'
                                    required
                                    name='password'
                                    value={password}
                                    onChange={handleChange}
                                />
                                <button>
                                    Sign In
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Login;