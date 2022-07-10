import { connect } from "react-redux";
import { Profile } from "./Profile";
import {addProject} from "../../redux/redusers/profile-reduser"

let mapStateToProps = (state) => {
	return {
		projectsData: state.profilePage.projectsData,
	}
}

const ProfileContainer = connect(mapStateToProps, {addProject})(Profile);

export default ProfileContainer;