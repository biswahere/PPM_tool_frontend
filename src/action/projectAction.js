import axios  from "axios";
import {GET_ERRORS} from "./type";

export const createProject = (project,history) => async dispatch => {
	try{
	alert("Hi");
	const res=await axios.post("http://localhost:8056/api/project-service/rest/project/createProject",project);
	history.push("/"); 
	
	} catch(err){
	dispatch({
			type: GET_ERRORS,
			payload: err.response.data
	 
	 });
	
	}

};