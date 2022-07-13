import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Login } from "./Login";
import { login } from "../../redux/reducers/auth-reducer";

const LoginContainer = (props) =>{
	return ( 
		<span>
			<Login {...props}/>
		</span>
	)
}

let mapStateToProps = (state) => {
	return {
	}
}

export default compose(
	connect(mapStateToProps, {login}))
(LoginContainer);