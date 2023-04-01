import React from 'react'
import '../Pages/Page.css'

function Sales() {
    return (
        <div>
            <h1 className='text-success mb-4'>Premium Jobs</h1>
            <div className='cards'>
                <div class="card bg-light mb-3" style={{ maxWidth: '20rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">ICICI</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Unit Sales Manager / Executive </h5>
                        <p class="card-text text-primary fs-5">Experience : 0-5 yrs</p>
                        <p class="card-text text-primary fs-5">City : Banglore, Mysore</p>
                        <p class="card-text text-primary fs-5">Salary : 2.25-5 LPA</p>
                        <p class="card-text text-danger fs-5">Experience Required</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Anton Paar</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Area Sales Manager / Executive </h5>
                        <p class="card-text text-primary fs-5">Experience : 0-4 years</p>
                        <p class="card-text text-primary fs-5">City : Kolkota</p>
                        <p class="card-text text-primary fs-5">Salary : Not Disclosed</p>
                        <p class="card-text text-danger fs-5">Freshers / Experienced</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Ceasefire</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Sales Executive / Manager </h5>
                        <p class="card-text text-primary fs-5">Experience : 0-5 year</p>
                        <p class="card-text text-primary fs-5">City : Noida, Gurugram </p>
                        <p class="card-text text-primary fs-5">Salary : 2.25-5.5 LPA</p>
                        <p class="card-text text-danger fs-5">Immediate Joiners Preffered</p>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-outline-success fs-5">Veiw All Jobs</button>
            </div>
        </div>
    )
}

export default Sales