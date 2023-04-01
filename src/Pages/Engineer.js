import React from 'react'
import '../Pages/Page.css'

function Engineer() {
    return (
        <div>
            <h1 className='text-success mb-4'>Premium Jobs</h1>
            <div className='cards'>
                <div class="card bg-light mb-3" style={{ maxWidth: '20rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">TCS</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Front-end Developer</h5>
                        <p class="card-text text-primary fs-5">Experience : Fresher</p>
                        <p class="card-text text-primary fs-5">City : Banglore</p>
                        <p class="card-text text-primary fs-5">Salary : 3-3.5 LPA</p>
                        <p class="card-text text-danger fs-5">Immediate Joiners only</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Infosys</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Angular Developer</h5>
                        <p class="card-text text-primary fs-5">Experience : 0-2 yrs</p>
                        <p class="card-text text-primary fs-5">City : Bangalore</p>
                        <p class="card-text text-primary fs-5">Salary : 4 LPA</p>
                        <p class="card-text text-danger fs-5">Experienced Preffered</p>
                    </div>
                </div>
                <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                    <div class="card-header bg-secondary text-warning fs-3">Qualacomm</div>
                    <div class="card-body">
                        <h5 class="card-title fs-4">Senior Software Engineer </h5>
                        <p class="card-text text-primary fs-5">Experience : 1 yrs</p>
                        <p class="card-text text-primary fs-5">City : Cochin </p>
                        <p class="card-text text-primary fs-5">Salary : 6 LPA</p>
                        <p class="card-text text-danger fs-5"> 1 yr Mandatory Experience</p>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-outline-success fs-5">Veiw All Jobs</button>
            </div>
        </div>
    )
}

export default Engineer;