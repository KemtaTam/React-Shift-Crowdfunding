import { connect } from "react-redux";
import { getAuthUserData } from "../../../redux/reducers/auth-reducer";
import { projectClear, getSomeProjectTC } from "../../../redux/reducers/project-reducer";
import React, { useEffect } from "react";
import { compose } from "redux";
import { Project } from "./Project";
import { withRouter } from "../../../hoc/withRouter";
import Preloader from "../../../components/common/Preloader/Preloader";

export const ProjectContainer = (props) => {
	useEffect(() => {
		let id = props.router.params.id; //берем id из url
		props.getAuthUserData();
		props.getSomeProjectTC(id);
	}, [props.router.params.id]);

	return <span>{props.isFetching ? <Preloader /> : <Project {...props} />}</span>;
};

let mapStateToProps = (state) => {
	return {
		projectsData: state.project.projectsData,
		isFetching: state.project.isFetching,
	};
};

export default compose(
	connect(mapStateToProps, {
		getAuthUserData,
		projectClear,
		getSomeProjectTC,
	}),
	withRouter
)(ProjectContainer);
