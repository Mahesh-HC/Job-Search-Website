import React, { useState } from 'react'
import '../Forms/Form1.css'
import { useNavigate } from 'react-router-dom'

function Form2() {
    const [mobile, setMobile] = useState('')
    const [mobileErr, setMobileErr] = useState('')
    const [dob, setDob] = useState('')
    const [dobErr, setDobErr] = useState('')
    const Navigation = useNavigate()
    const handlePrevious = () => {
        Navigation('/')
    }
    const handleNext = () => {
        if (mobile === "") {
            setMobileErr("Please enter your Mobile No")
            return false
        }
        else {
            setMobileErr("")
        }
        if (dob === "") {
            setDobErr("Please enter your Date of Birth")
            return false
        }
        else {
            setDobErr("")
            Navigation('/form3')
        }
    }
    return (
        <div>
            <div className='first'>
                <h3 className='text-success'>Start by Entering Your Details:</h3>
                <table>
                    <tr>
                        <th><label htmlFor='mobile' className='input text-dark'>Mobile Number : </label></th>
                        <td>
                            <input type="number" className='input' id='mobile' name='mobile' placeholder="Enter Your Mobile No" onChange={(e) => setMobile(e.target.value)} />
                            <div className="error text-danger fs-4" id="mobileerr">{mobileErr}</div>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor='dob' className='input text-dark'>Date of Birth : </label></th>
                        <td>
                            <input type="date" id='dob' name='dob' className='input' placeholder="Enter Your Date of Birth" onChange={(e) => setDob(e.target.value)} />
                            <div className="error text-danger fs-4" id="doberr">{dobErr}</div>
                        </td>
                    </tr>
                </table>
                <div className='button'>
                    <button type="button" className="btn btn-outline-danger bg-warning fs-4" onClick={handlePrevious}>Previous</button>
                    <button type="submit" className="btn btn-outline-success bg-info fs-4" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default Form2