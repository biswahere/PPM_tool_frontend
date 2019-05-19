import React, {Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
	render(){
	  return (
	  
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <div  className="navbar-brand" >
                Personal Project Management Tool
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact activeStyle={{color: 'black' }}>
                            Dashboard
                        </NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/sdfd" className="nav-link " exact activeStyle={{color: 'black' }}>
                            Sign Up
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/sdffd"  className="nav-link" exact activeStyle={{color: 'black' }}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
	

	  );

	}


}

export default Header;