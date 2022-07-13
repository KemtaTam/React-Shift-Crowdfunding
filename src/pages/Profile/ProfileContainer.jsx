import { connect } from "react-redux";
import { Profile } from "./Profile";
import {getAuthUserData, logout} from "../../redux/reducers/auth-reducer"
import { addProject, addProjectTC, getProjectsTC, getMyProjectsTC, changeLikesCount, projectClear } from "../../redux/reducers/project-reducer"
import React, { useEffect } from "react";
import { compose } from "redux";
import { Navigate } from "react-router-dom";

const ProfileContainer = (props) => {
	console.log(props.isAuth);
	useEffect(() => {
		props.getAuthUserData();
		props.getMyProjectsTC(props.userId);
		return () => {props.projectClear()}
	}, [])

	return ( 
		<span>
			{props.isAuth ? 
				<Profile {...props}/> :
				<Navigate to={"/login"} />}
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
		getAuthUserData, addProject, addProjectTC, getProjectsTC, getMyProjectsTC, changeLikesCount, logout, projectClear
	}),
)(ProfileContainer);
