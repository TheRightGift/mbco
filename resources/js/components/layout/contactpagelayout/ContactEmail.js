import React from 'react'

const ContactEmail = () => {
  return (
    <section className='contact-mail'>
      <div className="container">
        <p className='contact-text'>Feel free to email us or fill our contact form below</p>
      <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">First Name</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" />
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <i className="material-icons prefix">mode_edit</i>
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label for="textarea1">Message</label>
        </div>
      </div>
      <div className='hero-button'>
          <a style={{"width":"100%"}} className="primary-bg btn register"> Submit </a>
          </div>

    </form>


      </div>
      
    </section>
  )
}

export default ContactEmail