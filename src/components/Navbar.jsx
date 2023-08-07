import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () =>{

        return (
            <div >
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/" style={{marginLeft: '15px'}}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                                <li><Link className="nav-item nav-link " to="/">Home</Link></li>
                                <li><Link className="nav-item nav-link" to="/business">Business</Link></li>
                                <li><Link className="nav-item nav-link" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="nav-item nav-link" to="/health">Health</Link></li>
                                <li><Link className="nav-item nav-link" to="/science">Science</Link></li>
                                <li><Link className="nav-item nav-link" to="/sports">Sports</Link></li>
                                <li><Link className="nav-item nav-link" to="/technology">Technology</Link></li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar