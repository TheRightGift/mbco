import React from 'react'

const Register = () => {
  return (
   
    <div  id="register" className="modal reg">
      
      <div className="register-grid">
      <div className="modal-content register-left">
        <div className="login-left">
        <h3>Create an account</h3>
      <p> Please enter your details.</p>
      <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
        <input  id="first_name" type="text" className="validate" />
          <label for="first_name">First Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <input  id="first_name" type="text" className="validate" />
          <label for="first_name">Last Name</label>
        </div>
      </div>
        <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
        <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate " />
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password2" type="password" className="validate " />
          <label for="password2">Confirm Password</label>
        </div>
      </div>
      
      <div className='hero-button'>
          <a style={{"width":"100%"}}  href="admin"className="primary-bg btn register"> Register </a>
          </div>

    </form>

      <div className="modal-footer">
      <a style={{"width":"100%"}} className="secondary-bg btn register modal-close"> Cancel </a>
    </div>
    </div>
        </div>
     
    <div className="register-right"></div>
    

      </div>
    
  </div>
)
}

export default Register