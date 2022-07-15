import { connect } from "react-redux";
import { Profile } from "./Profile";
import {getAuthUserData, logout} from "../../redux/reducers/auth-reducer"
import { addProject, addProjectTC, getProjectsTC, getMyProjectsTC, changeLikesCount, projectClear } from "../../redux/reducers/project-reducer"
import React, { memo, useEffect } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileContainer = memo((props) => {
	useEffect(() => {
		props.getAuthUserData();
		props.getMyProjectsTC(props.userId);
		return () => {props.projectClear()}
	}, [props.userId])

	return ( 
		<span>
			<Profile {...props}/> 
		</span>
	)
})

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
		getAuthUserData, addProject, addProjectTC, 
		getProjectsTC, getMyProjectsTC, changeLikesCount, 
		logout, projectClear
	}),
	/* withAuthRedirect */
)(ProfileContainer);
