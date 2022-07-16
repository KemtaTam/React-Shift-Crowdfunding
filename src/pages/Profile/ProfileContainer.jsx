import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getAuthUserData, logout } from "../../redux/reducers/auth-reducer";
import { saveProfile } from "../../redux/reducers/profile-reducer";
import {
	addProject,
	addProjectTC,
	getProjectsTC,
	getMyProjectsTC,
	changeLikesCount,
	projectClear,
} from "../../redux/reducers/project-reducer";
import React, { memo, useEffect } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Preloader from "../../components/common/Preloader/Preloader";

const ProfileContainer = memo((props) => {
	useEffect(() => {
		props.getAuthUserData();
		props.getMyProjectsTC(props.userId);
		return () => {
			props.projectClear();
		};
	}, [props.userId]);

	return <span>{props.isFetching ? <Preloader /> : <Profile {...props} />}</span>;
});

let mapStateToProps = (state) => {
	return {
		projectsData: state.project.projectsData,
		name: state.auth.name,
		isAuth: state.auth.isAuth,
		userId: state.auth.userId,
		isFetching: state.project.isFetching,
		usersData: state.profile.usersData,
	};
};

export default compose(
	connect(mapStateToProps, {
		getAuthUserData,
		addProject,
		addProjectTC,
		getProjectsTC,
		getMyProjectsTC,
		changeLikesCount,
		logout,
		projectClear,
		saveProfile
	}),
	/* withAuthRedirect */ /* **************************** */
)(ProfileContainer);
