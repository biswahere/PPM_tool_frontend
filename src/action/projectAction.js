import axios  from "axios";
import {GET_ERRORS} from "./type";
import {GET_PROJECTS} from "./type";

export const createProject = (project,history) => async dispatch => {
	try{
		
	const res=await axios.post("http://localhost:8056/api/project-service/rest/project/createProject",project);
	history.push("/"); 
	
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