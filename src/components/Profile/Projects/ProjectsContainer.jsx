import { connect } from "react-redux";
import { addProject } from "../../../redux/reducers/profile-reducer";
import { Projects } from "./Projects";

let mapStateToProps = (state) => {
	return {
		projectsData: state.profilePage.projectsData,
	}
}

const PostsContainer = connect(mapStateToProps, {addProject})(Projects);

export default PostsContainer;