import React, { useState } from 'react'
import '../Forms/Form1.css'
import { useNavigate } from 'react-router-dom'

function Form3() {
    const [degree, setDegree] = useState('')
    const [degreeErr, setDegreeErr] = useState('')
    const [year, setYear] = useState('')
    const [yearErr, setYearErr] = useState('')
    const Navigation = useNavigate()
    const handlePrevious = () => {
        Navigation('/form2')
    }
    const handleNext = () => {
        if (degree === "") {
            setDegreeErr("Please enter your Degree")
            return false
        }
        else {
            setDegreeErr("")
        }
        if (year === "") {
            setYearErr("Please choose your graduation month and year")
            return false
        }
        else {
            setYearErr("")
            Navigation('/form4')
        }
    }
    return (
        <div>
            <div className='first'>
                <h3 className='text-success'>Start by Entering Your Details:</h3>
                <table>
                    <tr>
                        <th><label htmlFor='degree' className='input text-dark'>Graduation Degree : </label></th>
                        <td>
                            <input type="text" className='input' id='degree' name='degree' placeholder="Enter Your Grad Deg" onChange={(e) => setDegree(e.target.value)} />
                            <div className="error text-danger fs-4" id="degreeeerr">{degreeErr}</div>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor='year' className='input text-dark'>Graduation Year : </label></th>
                        <td>
                            <input type="month" id='year' name='year' className='input' placeholder="select Your Graduation Year" onChange={(e) => setYear(e.target.value)} />
                            <div className="error text-danger fs-4" id="yearerr">{yearErr}</div>
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
export default Form3