import { connect } from "react-redux";
import { Profile } from "./Profile";
import {getAuthUserData} from "../../redux/reducers/auth-reducer"
import {addProject, addProjectTC, getProjectsTC} from "../../redux/reducers/profile-reducer"
import React, { useEffect } from "react";
import { compose } from "redux";

const ProfileContainer = (props) => {
	useEffect(() => {
		props.getAuthUserData();
		props.getProjectsTC();
	}, [])

	return ( 
		<span>
			<Profile {...props}/>
		</span>
	)
}

let mapStateToProps = (state) => {
	return {
		projectsData: state.profilePage.projectsData,
		name: state.auth.name
	}
}

export default compose(
	 connect(mapStateToProps, {
		getAuthUserData, addProject, addProjectTC, getProjectsTC
	}),
)(ProfileContainer);
