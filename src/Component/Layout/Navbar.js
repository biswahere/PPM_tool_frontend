import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar(){
	return(

		<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
			<div className="col-md-2">
				
				 <NavLink to="/" className="navbar-brand" exact activeStyle={{color: 'black' }} >
						Project Task Tool
				 </NavLink>
			</div>

			<div className="col-md-2">
				
				 <NavLink to="/newLink" className="navbar-brand" exact activeStyle={{color: 'black' }} >
						NewLink
				 </NavLink>
			</div>
			
			<div className="col-md-2">
				  <NavLink to="/next" className="navbar-brand" exact activeStyle={{color: 'black' }} >
						Next
				 </NavLink>
			</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>
        </div>
    </nav>
	
	);
}

export default Navbar;