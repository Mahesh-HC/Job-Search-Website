import React from 'react'
import '../Pages/Page.css'

function Marketing() {
    return (
        <div>
            <h1 className='text-success mb-4'>Premium Jobs</h1>
            <div className='cards'>
                <div class="card bg-light mb-3" style={{ maxWidth: '20rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Gurg Company</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Salesforce Marketing</h5>
                        <p class="card-text text-primary fs-5">Experience : 0-5 years</p>
                        <p class="card-text text-primary fs-5">City : Banglore</p>
                        <p class="card-text text-primary fs-5">Salary : 5-9 LPA</p>
                        <p class="card-text text-danger fs-5">Immediate Joiners only</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">PMA</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Social Media Marketing</h5>
                        <p class="card-text text-primary fs-5">Experience : 0-2 years</p>
                        <p class="card-text text-primary fs-5">City : Anywhere(Remote)</p>
                        <p class="card-text text-primary fs-5">Salary : 4 LPA</p>
                        <p class="card-text text-danger fs-5">Full-Time / Part-Time</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Cyberco Solutions</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Digital Marketing Expert</h5>
                        <p class="card-text text-primary fs-5">Experience : 4-6 year</p>
                        <p class="card-text text-primary fs-5">City : Hyderabad </p>
                        <p class="card-text text-primary fs-5">Salary : Not Disclosed </p>
                        <p class="card-text text-danger fs-5">Freshers are Welcome</p>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-outline-success fs-5">Veiw All Jobs</button>
            </div>
        </div>
    )
}

export default Marketing