import axios  from "axios";
import {GET_ERRORS, GET_PROJECT_TASK, DELETE_PROJECT_TASK, FETCH_PROJECT_TASK} from "./type";

export const addProjectTask = (newProjectTask, history) => async dispatch => {
	// alert(newProjectTask.summary);
	try{
	await axios.post("http://localhost:8056/api/projectTask-service/rest/project/createTask",newProjectTask);
	 history.push("/"); 
	 dispatch({
		type: GET_ERRORS,
		payload: {}
	 
	 })
	}catch(error) {
		 dispatch({
			type: GET_ERRORS,
			payload: error.response.data
	 
	 });
	}
	
};


export const getBacklog = () => async dispatch => {
  const res = await axios.get("http://localhost:8056/api/projectTask-service/rest/project/projectTaskList");
  dispatch({
    type: GET_PROJECT_TASK,
    payload: res.data
  });
};




export const getProjectTask = (pt_id,history) => async dispatch => {
  
	try{
		
		const res = await axios.get(`http://localhost:8056/api/projectTask-service/rest/project/fetchPropjectTask/${pt_id}`);
		
		dispatch({
			type: FETCH_PROJECT_TASK,
			payload: res.data
		
		});

	}catch(error){

		history.push("/");
		}

};








export const deleteProjectTask	= pt_id => async dispatch => {
	if(
		window.confirm(
		`You are deleting project task ${pt_id}, this action cannot be undone`
		
		)
		) {
		
		//await axios.delete('http://localhost:8056/api/projectTask-service/rest/project/deleteProjectTask/${pt_id}')
		  axios.delete(`http://localhost:8056/api/projectTask-service/rest/project/deleteProjectTask/${pt_id}`);
		  axios.get("http://localhost:8056/api/projectTask-service/rest/project/projectTaskList");
		dispatch({
			type: DELETE_PROJECT_TASK,
			payload: pt_id
	});
	}
};


