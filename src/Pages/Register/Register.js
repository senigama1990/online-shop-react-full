import React from 'react'
import '../Register/Register.css'

function Register({ signupToggle, setSignupToggle }) {
    console.log(signupToggle, setSignupToggle)
    return (
        <div className='register'>
            <p class="tip">Click on button in image container</p>
            <div className="cont" id={signupToggle ? 's--signup' : ''}>
                <div className="form sign-in">
                    <h2>Welcome back</h2>
                    <label htmlFor="">
                        <span>Email</span>
                        <input type="email" />
                    </label>
                    <label htmlFor="">
                        <span>Password</span>
                        <input type="password" />
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
                        <label htmlFor="">
                            <span>Name</span>
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label htmlFor="">
                            <span>Password</span>
                            <input type="password" />
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
