import React from 'react'
import '../Pages/Page.css'

function Management() {
    return (
        <div>
            <h1 className='text-success mb-4'>Premium Jobs</h1>
            <div className='cards'>
                <div class="card bg-light mb-3" style={{ maxWidth: '20rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Wells Fargo</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Data Management Engineer</h5>
                        <p class="card-text text-primary fs-5">Experience : Freshers only</p>
                        <p class="card-text text-primary fs-5">City : Banglore</p>
                        <p class="card-text text-primary fs-5">Salary : 3-3.5 LPA</p>
                        <p class="card-text text-danger fs-5">Immediate Joiners only</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Urban Ventures</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">E-Commerce Management</h5>
                        <p class="card-text text-primary fs-5">Experience : 1-2 yrs</p>
                        <p class="card-text text-primary fs-5">City : Bangalore</p>
                        <p class="card-text text-primary fs-5">Salary : 4 LPA</p>
                        <p class="card-text text-danger fs-5">Freshers not Allowed</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Tracxn Tech</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Program Manager - Engineering Team </h5>
                        <p class="card-text text-primary fs-5">Experience : 2-4 yrs</p>
                        <p class="card-text text-primary fs-5">City : Bangalore </p>
                        <p class="card-text text-primary fs-5">Salary : 6-10 LPA</p>
                        <p class="card-text text-danger fs-5">Experienced Only</p>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-outline-success fs-5">Veiw All Jobs</button>
            </div>
        </div>
    )
}

export default Management