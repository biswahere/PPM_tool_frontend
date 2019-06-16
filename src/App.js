import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Layout/Header";
import ProjectBoard from "./Component/ProjectBoard";
import AddProject from "./Component/project/AddProject";
import dashboard from "./Component/dashboard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProjectTask from "./Component/ProjectTask/AddProjectTask";
import {Provider} from "react-redux";
import store from "./store";
import UpdateProjectTask from "./Component/ProjectTask/UpdateProjectTask";
import NewComponent from "./Component/NewComponent";

class App extends Component {
  render() {
    return (
	<Provider  store={store}>
	<Router>
		<div className="App">
			<Header/>            


			<Route exact path="/" component={dashboard} />
			<Route exact path="/AddProject" component={AddProject} />
			
		
			<Route exact path="/projectTaskList" component={ProjectBoard} /> 
		
			<Route exact path="/addProjectTask" component={AddProjectTask} />

			<Route exact path="/updateProjectTask/:pt_id" component={UpdateProjectTask} />

			<Route exact path="/newLink" component={NewComponent} />

		</div>
	</Router>
	</Provider>
    );
  }
}

export default App;