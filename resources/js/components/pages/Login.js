import React from 'react';
import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let loginUser = (e) => {
    if(email === 'demo@mbcon.ng' && password === 12345678){
      navigate("/admin");
    }
  }

  return (
    <div  id="login" className="modal">
      
      <div className="login-grid">
        <div className="modal-content login-left">
          <div className="login-left">
            <h3>Welcome back</h3>
            <p> Please enter your details.</p>
            <form className="col s12">
              {/* <div className="row">
                <div className="input-field col s12">
                  <input id="first_name" type="text" className="validate" />
                  <label for="first_name">Full Name</label>
                </div>
                </div> */}
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" onChange={(val) => {setEmail(val.target.value)}}/>
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate " onChange={(val) => {setPassword(val.target.value)}}/>
                  <label for="password">Password</label>
                </div>
              </div>
              
              <div className='hero-button'>
                <a style={{"width":"100%"}}  href="#" className="primary-bg btn register" onClick={loginUser}> Login </a>
              </div>

            </form>

            <div className="modal-footer">
              <a  style={{"width":"100%"}} className="secondary-bg btn register modal-close"> Cancel </a>
            </div>
          </div>
        </div>
     
        <div className="login-right"></div>
      </div>    
    </div>
  )
}

export default Login