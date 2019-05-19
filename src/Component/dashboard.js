import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import ProjectList from "./project/ProjectList";

 class dashboard extends Component {
	render(){
		return  (
		
		<div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <NavLink to="/AddProject" className="btn btn-lg btn-info">
                        Create a Project
                    </NavLink>
                    <br />
                    <hr />

					< ProjectList />

                </div>
            </div>
        </div>
    </div>

 

		);
			
	}
 }

export default dashboard;