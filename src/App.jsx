import { connect, Provider } from "react-redux";
import {Routes, Route} from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./pages/Login/LoginContainer";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFound404 } from "./pages/NotFound404/NotFound404";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import RegistrationContainer from "./pages/Registration/RegistrationContainer";
import {store} from "./redux/redux-store";
import {initializeApp} from './redux/reducers/app-reducer'
import { useEffect } from "react";
import Preloader from "./components/common/Preloader/Preloader";

import ProjectsContainer from "./pages/Projects/ProjectsContainer";
import ProjectContainer from "./pages/Projects/Project/ProjectContainer";

function App(props) {
	useEffect(() => {
		props.initializeApp();
	}, [])

	return !props.initialized ? <Preloader /> : (
		<div className="App">
			<HeaderContainer />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<LoginContainer />} />
				<Route path="/register" element={<RegistrationContainer />} />
				<Route path="/profile" element={<ProfileContainer />} />
				<Route path="/projects/:id" element={<ProjectContainer />} />
				<Route path="/projects" element={<ProjectsContainer />} />
				<Route path="*" element={ <NotFound404 />} />
			</Routes>
		</div>
  );
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

export const MainApp = (props) => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	)
}

