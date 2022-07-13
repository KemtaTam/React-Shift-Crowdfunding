import { connect } from "react-redux";
import {getAuthUserData} from "../../redux/reducers/auth-reducer"
import { getProjectsTC, changeLikesCount, projectClear } from "../../redux/reducers/project-reducer"
import React, { useEffect } from "react";
import { compose } from "redux";
import { MyProjects } from '../Profile/MyProjects/MyProjects';

const ProjectsContainer = (props) => {
	console.log(props.isAuth);
	useEffect(() => {
		props.getAuthUserData();
		props.getProjectsTC();
		return () => {props.projectClear()}
	}, [])

	return ( 
		<span>
			<MyProjects {...props}/>	{/* Там будут отображаться все проекты */}
		</span>
	)
}

let mapStateToProps = (state) => {
	return {
		projectsData: state.project.projectsData,
		name: state.auth.name,
		isAuth: state.auth.isAuth,
		userId: state.auth.userId
	}
}

export default compose(
	 connect(mapStateToProps, {
		getAuthUserData, getProjectsTC, changeLikesCount, projectClear
	}),
)(ProjectsContainer);
