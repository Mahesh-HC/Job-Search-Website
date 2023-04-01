import React from 'react'
import "../component/Nav.css"
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
            <div className='main'>
                <div className='navbar-wrapper ' id="navbarNav">
                    <nav className='navbar navbar-expand-sm bg-info navbar-light-50' >
                        <ul className='nav me-auto' >
                            <li className='nav-item'><label className='nav-link link-light m-2' ><NavLink className="link text-secondary fs-5" style={{ textDecoration: 'none' }} to="/">Home</NavLink></label></li>
                            <li className='nav-item'><label className='nav-link link-light m-2' ><NavLink className="link text-secondary fs-5" style={{ textDecoration: 'none' }} to="/engineering">Engineering</NavLink></label></li>
                            <li className='nav-item'><label className='nav-link link-light m-2' ><NavLink className="link text-secondary fs-5" style={{ textDecoration: 'none' }} to="/management">Management</NavLink></label></li>
                            <li className='nav-item'><label className='nav-link link-light m-2' ><NavLink className="link text-secondary fs-5" style={{ textDecoration: 'none' }} to="/marketing">Marketing</NavLink></label></li>
                            <li className='nav-item'><label className='nav-link link-light m-2' ><NavLink className="link text-secondary fs-5" style={{ textDecoration: 'none' }} to="/sales">Sales</NavLink></label></li>
                            <li className='nav-item'><label className='nav-link link-light m-2' ><NavLink className="link text-secondary fs-5" style={{ textDecoration: 'none' }} to="/contact">Contact Us</NavLink></label></li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-item"><label className="nav-link link-secondary fs-5 m-2 px-3">Login</label></li>
                            <li className="nav-item"><label className="nav-link link-secondary fs-5 m-2 px-2" style={{ marginRight: '20px' }}>Sign up</label></li>
                        </ul>
                    </nav>
                </div>
                <div className='header'>
                    <header className=" border-bottom bg-info ">
                        <div className="container d-flex flex-wrap justify-content-center">
                            <NavLink to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                                <svg className="bi me-2" width="40" height="32"></svg>
                                <span className="fs-3 text"> JobOpportunity.com</span>
                            </NavLink>
                            <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                                <input type="search" className="form-control bg-dark fs-5 mb-1 text-light" placeholder="----- Search here ----- " aria-label="Search" />
                            </form>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Nav