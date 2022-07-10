import { connect } from "react-redux";
import { Profile } from "./Profile";

let mapStateToProps = (state) => {
	return {
		projectsData: state.profilePage.projectsData,
	}
}

const ProfileContainer = connect(mapStateToProps, {})(Profile);

export default ProfileContainer;