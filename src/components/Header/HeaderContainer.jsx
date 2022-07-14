import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import {Header} from './Header';
import {getAuthUserData} from '../../redux/reducers/auth-reducer';

const HeaderContainer = memo((props) => {
	useEffect(() => {
		props.getAuthUserData()
	}, [])

	return (
		<Header {...props}/>
	)
})

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);