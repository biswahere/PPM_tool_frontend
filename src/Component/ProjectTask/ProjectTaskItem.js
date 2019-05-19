import React, { Component } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteProjectTask} from "../../action/projectTaskAction";


class ProjectTaskItem extends Component{

	onDeleteClick(pt_id){
		this.props.deleteProjectTask(pt_id);
	}
	render(){

		const { project_task } = this.props;

		return(

		<div>

						<div className="card-header text-primary bg-light">
                            ID: {project_task.id}
                        </div>
                        <div className="card-body bg-light">
                            <h5 className="card-title">{ project_task.summary }</h5>
                            <p className="card-text text-truncate ">
                                {project_task.acceptanceCriteria}
                            </p>
                            <Link to={`updateProjectTask/${project_task.id}`} className="btn btn-primary">
                                Retrieve / Update
                            </Link>

							<button className="btn btn-danger btn-md ml-4" onClick={this.onDeleteClick.bind(this, project_task.id)} >
                                Delete
                            </button>
						</div>
						
						<br />

		</div>
		
       
		);
	}
}


ProjectTaskItem.propTypes = {
	deleteProjectTask: PropTypes.func.isRequired
};
export default connect(null,{deleteProjectTask}) (ProjectTaskItem);