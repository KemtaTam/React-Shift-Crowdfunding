import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Login } from "./Login";
import { getPosts, addPosts } from "../../redux/redusers/auth-reduser";

const LoginContainer = (props) =>{
	return ( 
		<span>
			<Login {...props}/>
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
	connect(mapStateToProps, {getPosts, addPosts}))
(LoginContainer);