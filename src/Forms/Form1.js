import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Forms/Form1.css'

const Form1 = () => {
    const [name, setName] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')

    const Navigation = useNavigate()
    const handleClick = () => {
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
            setEmailErr("")
            Navigation('/form2')
        }
    }
    return (
        <div>
            <div className='first'>
                <h3 className='text-success' style={{ textDecoration: 'none' }}>Start By Entering Your Details:</h3>
                <table>
                    <tr>
                        <th><label htmlFor='name' className='input text-dark'>Name : </label></th>
                        <td>
                            <input type="text" className='input' id='name' name='name' placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                            <div className="error text-danger fs-4" id="nameerr">{nameErr}</div>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor='email' className='input text-dark'>Email ID : </label></th>
                        <td>
                            <input type="email" id='email' name='email' className='input' placeholder="Enter Your Email ID" onChange={(e) => setEmail(e.target.value)} />
                            <div className="error text-danger fs-4" id="emailerr">{emailErr}</div>
                        </td>
                    </tr>
                </table>
                <div className='button'>
                    <button type="button" className="btn btn-outline-danger disabled bg-warning fs-4">Previous</button>
                    <button type="submit" className="btn btn-outline-success bg-info fs-4" onClick={handleClick}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Form1