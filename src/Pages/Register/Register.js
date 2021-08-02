import React from 'react'
import '../Register/Register.css'

function Register({ signupToggle, setSignupToggle }) {
    return (
        <div className='register'>
            <p class="tip">Click on button in image container</p>
            <div className="cont" id={signupToggle ? 's--signup' : ''}>
                <div className="form sign-in">
                    <h2>Welcome back</h2>
                    <select className='signSelect'>
                        <option selected value="role" disabled>Choose user's role</option>
                        <option value="seller">Seller</option>
                        <option value="client">Client</option>
                    </select>
                    <label htmlFor="signInEmail">
                        <span>Email</span>
                        <input id='signInEmail' type="email" required />
                    </label>
                    <label htmlFor="signInPass">
                        <span>Password</span>
                        <input id='signInPass' type="password" required/>
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type='button' className='submit'>Sign In</button>
                    <button type='button' className='fb-btn'>Connect With <span>Facebook</span> </button>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2>New here</h2>
                            <p>Sign up and discover great amount of new opportunities</p>
                        </div>
                        <div className="img__text m--in">
                            <h2>One of Us?</h2>
                            <p>If you already has an account, just sign in. we've missed you!</p>
                        </div>
                        <div className="img__btn" onClick={() => setSignupToggle(!signupToggle)}>
                            <div className="m--up m-first">Sign Up</div>
                            <div className="m--in m-second">Sign In</div>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2>Time to feel like home</h2>
                        <label htmlFor="signUpName">
                            <span>Name</span>
                            <input id='signUpName' type="text" />
                        </label>
                        <label htmlFor="signUpEmail">
                            <span>Email</span>
                            <input id='signUpEmail' type="email" />
                        </label>
                        <label htmlFor="signUpPass">
                            <span>Password</span>
                            <input id='signUpPass' type="password" />
                        </label>
                        <button type='button' className='submit'>Sign In</button>
                        <button type='button' className='fb-btn'>Connect With <span>Facebook</span> </button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Register
