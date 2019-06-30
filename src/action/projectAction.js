import axios  from "axios";
import {GET_ERRORS, GET_PROJECT, DELETE_PROJECT } from "./type";
import {GET_PROJECTS} from "./type";

export const createProject = (project,history) => async dispatch => {
	try{
		
	const res=await axios.post("http://localhost:8056/api/project-service/rest/project/createProject",project);
	history.push("/"); 
	dispatch({
		type: GET_ERRORS,
		payload: {}
 
 });
	
	} catch(err){
	dispatch({
			type: GET_ERRORS,
			payload: err.response.data
	 
	 });
	
	}

};


export const getProjects = ( ) => async dispatch => {
	
	const res = await axios.get("http://localhost:8056/api/project-service/rest/project/projectList")
	dispatch ({
		type: GET_PROJECTS,
		payload: res.data
	});

};

export const getProject = (id, history) => async dispatch => {

	try {
		
		const res = await axios.get(`http://localhost:8056/api/project-service/rest/project/project/${id}`)
		dispatch({
			type: GET_PROJECT,
			payload: res.data
		});
	} catch (error) {
		alert("project id " +id+ " does not exist");
		history.push("/");
	}
	
};


export const deleteProject = (id, history) => async dispatch => {

	
	if (

		window.confirm(
	
		  "Are you sure? This will delete the project permanently"
	
		)
	
	  ) {
	
		await axios.delete(`http://localhost:8056/api/project-service/rest/project/deleteProject/${id}`);
	
		dispatch({
			type: DELETE_PROJECT,
			payload: id
			
		});
	
	  }
	
};