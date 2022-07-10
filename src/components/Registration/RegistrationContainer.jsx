import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Registration } from "./Registration";
import { addUser } from "../../redux/redusers/auth-reduser";

const RegistrationContainer = (props) =>{
	return ( 
		<span>
			<Registration {...props}/>
		</span>
	)
}

let mapStateToProps = (state) => {
	return {
		/* isFetching: state.usersPage.isFetching,
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl */
	}
}

export default compose(
	connect(mapStateToProps, {addUser}))
(RegistrationContainer);