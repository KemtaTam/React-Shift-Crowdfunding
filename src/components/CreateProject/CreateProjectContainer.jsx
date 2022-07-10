import { connect } from "react-redux";
import { addProject } from "../../redux/redusers/profile-reduser";
import { CreateProject } from "./CreateProject";

let mapStateToProps = (state) => {
	return {
		projectsData: state.profilePage.projectsData,
	}
}

const CreateProjectContainer = connect(mapStateToProps, {addProject})(CreateProject);

export default CreateProjectContainer;