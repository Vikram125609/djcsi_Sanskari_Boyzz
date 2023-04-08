import React, { useEffect,useState } from 'react'
import "../styles/signup.css"

const SignUp = () => {

    const [signInEmail,setSignInEmail] = useState('');
    const [signInPassword,setSignInPassword]=useState('');

    const [signUpName,setSignUpName]= useState('');

    const [signUpEmail,setSignUpEmail]=useState('');

    const [signUpPassword,setSignUpPassword]=useState('');



    const [signUpButton,setSignUpButton] =useState() 
    const [signInButton,setSignInButton] = useState(); 
    const [container,setContainer] = useState();

    useEffect(()=>{
        setSignUpButton(document.getElementById('signUp'));
        setSignInButton(document.getElementById('signIn'));
        setContainer(document.getElementById('container'));

    },[])

    useEffect(()=>{
        signUpButton?.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        
        signInButton?.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    },[signInButton,signUpButton,container])
    


    return (
        <div className='signup_body'>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="signup_heading">Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" value={signUpName} onChange={(e)=>setSignUpName(e.target.value)}/>
                        <input type="email" placeholder="Email" value={signUpEmail} onChange={(e)=>setSignUpEmail(e.target.value)}/>
                        <input type="password" placeholder="Password"  value={signUpPassword} onChange={(e)=>setSignUpPassword(e.target.value)}/>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className='signup_heading'>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" value={signInEmail} onChange={(e)=>{setSignInEmail(e.target.value)}} />
                        <input type="password" placeholder="Password" value={signInPassword} onChange={(e)=>{setSignInPassword(e.target.value)}}/>
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p className='signup_text'>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p className='signup_text'>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
