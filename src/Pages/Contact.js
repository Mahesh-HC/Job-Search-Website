import React, { useState } from 'react'
import '../Pages/Contact.css'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [message, setMessage] = useState('')
  const [messageErr, setMessageErr] = useState('')

  const Navigation = useNavigate()
  const handleSubmit = () => {
    if (name === "") {
      setNameErr("Please enter your name")
      return false
    }
    else {
      setNameErr("")
    }
    if (email === "") {
      setEmailErr("Please enter your Email ID")
      return false
    }
    else {
      setEmailErr('')
    }
    if (message === "") {
      setMessageErr("Please enter your Message")
      return false
    }
    else {
      setMessageErr("")
      alert("Feedback Submitted Successfully")
      Navigation('/')
    }
  }
  return (
    <div>
      <div className='bg-light'>
        <div className="form-group bg-dark justify-content-center">
          <h3 className='text-success'>Get In Touch: </h3>
          <label htmlFor='name' className='fs-4'>Name : </label>
          <input type="text" className='form-control fs-5' id='name' name='name' placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
          <div className="error text-danger fs-5" id="nameerr">{nameErr}</div>

          <label htmlFor="email" className='fs-4' >Email ID : </label>
          <input type="email" className="form-control fs-5" name='email' id="email" placeholder="Enter Your Email ID" onChange={(e) => setEmail(e.target.value)} />
          <div className="error text-danger fs-4" id="emailerr">{emailErr}</div>

          <label htmlFor="message" className='fs-4'>Message : </label>
          <textarea name='message' id='message' className="form-control fs-5 " placeholder="Enter Your Message" onChange={(e) => setMessage(e.target.value)} />
          <div className="error text-danger fs-4" id="messageerr">{messageErr}</div>

          <div className="text-center">
            <button type="submit" className="btn btn-outline-warning fs-5" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;