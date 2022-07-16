import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { getAuthUserData } from "../../redux/reducers/auth-reducer";
import { setProjects } from "../../redux/reducers/project-reducer";

const HeaderContainer = memo((props) => {
	useEffect(() => {
		props.getAuthUserData();
	}, []);

	return <Header {...props} />;
});

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	projectsData: state.project.projectsData,
});

export default connect(mapStateToProps, { getAuthUserData, setProjects })(HeaderContainer);
