import { GET_PROJECT_TASK, DELETE_PROJECT_TASK, FETCH_PROJECT_TASK } from "../action/type";

const initialState={
	project_task: [],
	project_data: {}
};


export default function(state = initialState, action){
	switch(action.type){
		case GET_PROJECT_TASK:
		return {
			...state,
			project_task : action.payload
		};

		case DELETE_PROJECT_TASK: 
		return{
		
			...state,
			
			 project_task:state.project_task.filter(
			   project_task => project_task.id !== action.payload
			
			)
			
		};

		case FETCH_PROJECT_TASK:
		return {
			
			...state,
			project_data: action.payload

		};

		default:
			return state;
			
	}
}