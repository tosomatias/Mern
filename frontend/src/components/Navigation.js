import React, { Fragment } from 'react';
import {NavLink}  from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink  to = "/" className="navbar-brand ">NotesApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="ml-auto">
                        <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ">
                                    <li className="nav-item ">
                                        <NavLink  to= "/" className="nav-link active" aria-current="page">Notes</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  to = "/create" className="nav-link active " aria-current="page">Create Note</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  to= "/user" className="nav-link" aria-current="page">Create User</NavLink>
                                    </li>
                                    
                                </ul>
                            </div>
                    </div>

                    
                
                </div>
            </nav>
        </Fragment>
    )
}

export default Navigation
