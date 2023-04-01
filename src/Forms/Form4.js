import React, { useState } from 'react'
import '../Forms/Form1.css'
import { useNavigate } from 'react-router-dom'

const Form4 = () => {
    const [city, setCity] = useState('')
    const [cityErr, setCityErr] = useState('')
    const [pincode, setPincode] = useState('')
    const [pincodeErr, setPincodeErr] = useState('')
    const Navigation = useNavigate()
    const handlePrevious = () => {
        Navigation('/form2')
    }
    const handleSubmit = () => {
        if (city === "") {
            setCityErr("Please enter your Address")
            return false
        }
        else {
            setCityErr("")
        }
        if (pincode === "") {
            setPincodeErr("Please enter your Pincode")
            return false
        }
        else {
            setPincodeErr("")
            alert('Details Registered. Continue Your Job Search...')
            Navigation('/engineering')
        }
    }
    return (
        <div>
            <div className='first'>
                <h3 className='text-success'>Start by Entering Your Details:</h3>
                <table>
                    <tr>
                        <th><label htmlFor='city' className='input text-dark'>Address : </label></th>
                        <td>
                            <input type="text" className='input' id='city' name='city' placeholder="Ex: Bangalore, Karnataka" onChange={(e) => setCity(e.target.value)} />
                            <div className="error text-danger fs-4" id="cityerr">{cityErr}</div>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor='pincode' className='input text-dark'>Pincode : </label></th>
                        <td>
                            <input type="number" id='pincode' name='pincode' className='input' placeholder="Enter Enter Your Pincode" onChange={(e) => setPincode(e.target.value)} />
                            <div className="error text-danger fs-4" id="pincodeerr">{pincodeErr}</div>
                        </td>
                    </tr>
                </table>
                <div className='button'>
                    <button type="button" className="btn btn-outline-danger bg-warning fs-4" onClick={handlePrevious}>Previous</button>
                    <button type="submit" className="btn btn-outline-success bg-info fs-4" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Form4

