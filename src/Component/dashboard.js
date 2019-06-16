import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import {getProjects} from "../action/projectAction";
import ProjectList from "./project/ProjectList";
import PropTypes from "prop-types";

 class dashboard extends Component {
	 
	 componentDidMount(){
		 this.props.getProjects();
	 }
	 
	render(){
		
		const {projects} = this.props.project
		
	
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
                    
                    {projects.map(project => (
                    	
                    	< ProjectList key={project.id} project={project}/>
                    ))
                    	
                    }
                    
					

                </div>
            </div>
        </div>
    </div>

 

		);
			
	}
 }
 
 dashboard.propTypes = {
		 project: PropTypes.object.isRequired,
		 getProjects: PropTypes.func.isRequired
 };
 
 const mapStateToProps = state => ({
	 project:state.project
	 
 });

export default connect(mapStateToProps,{getProjects})(dashboard);