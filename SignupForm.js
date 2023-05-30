import React from 'react'
import './App.css'


function SignupForm () {
    return(
        <div className='wrapper bg-dark d-flex align items-center justify-content-center'>
        <div className='signup'>
            <h2 className='mb-3'>Welcome to Capsul</h2>
            <h2 className='mb-3'>Lets set you up so you can create your capsul.</h2>
            <form className='needs validation'>
                <div className='form-group was validated mb-2'>
                    <label htmlFor='first' className='form-label'>First Name</label>
                    <input type='first' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      Please enter your first name
                      </div>
                      <div className='form-group was validated mb-2'>
                    <label htmlFor='last' className='form-label'>Last Name</label>
                    <input type='last' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      Please enter your last name
                      </div>
                    <div className='form-group was validated mb-2'>
                    <label htmlFor='phone' className='form-label'>Phone</label>
                    <input type='phone' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      Please enter your Phone
                      </div>
                      <div className='form-group was validated mb-2'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input type='email' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      Please enter your email
                      </div>

                <div className='form-group was validated mb-2'>
                    <label htmlFor='pass' className='form-label'>Password</label>
                    <input type='pass' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      Please enter your Password
                      </div>
                      <div className='form-group was validated mb-2'>
                    <label htmlFor='confirm' className='form-label'>Confirm Password</label>
                    <input type='confirm' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      Please enter your confirmed Password
                      </div>
                      <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input'></input>
                        <label htmlFor='check' className='form-check-label'>
                          I want to receive news for Capsul(a wise decision, promise we'll send you great stuff)
                        </label>
                      </div>
                      <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input'></input>
                        <label htmlFor='check' className='form-check-label'>
                          I agree to the Terms Privacy Policy
                        </label>
                      </div>

                      <button type='submit' className='btn btn-success mt-2'>SIGN UP</button>
                      </form>
                       </div>
                      </div>
    )
}

export default SignupForm



