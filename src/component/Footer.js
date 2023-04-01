import React from 'react'
import '../component/Footer.css'

function Footer() {
  return (
    <div>
      <footer className="page-footer font-small black pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase text-muted">India's No 1 Job Site</h5>
              <p className='text-light'>Download our App from App Store or Google PlayStore</p>
            </div>
            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase text-muted">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <label>About us</label>
                </li>
                <li>
                  <label>Careers</label>
                </li>
                <li>
                  <label>Employee Details</label>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase text-muted">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <label>Bengaluru, India- 560067</label>
                </li>
                <li>
                  <label>+91 1800-457-456</label>
                </li>
                <li>
                  <label>jobopportunity@gmail.com</label>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase text-muted">Others</h5>
              <ul className="list-unstyled">
                <li>
                  <label>Privacy policy</label>
                </li>
                <li>
                  <label>Terms & conditions</label>
                </li>
                <li>
                  <label>Trust & safety</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center text-muted py-2">© 2023 Copyright:
          <label>JobOpportunity.com</label>
        </div>
      </footer>
    </div>
  )
}

export default Footer