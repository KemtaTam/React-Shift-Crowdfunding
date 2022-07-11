import { Provider } from "react-redux";
import {Routes, Route} from "react-router-dom";
import './App.css';
import { Header } from './components/Header/Header';
import LoginContainer from "./pages/Login/LoginContainer";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFound404 } from "./pages/NotFound404/NotFound404";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import RegistrationContainer from "./pages/Registration/RegistrationContainer";
import {store} from "./redux/redux-store";

function App() {
  return (
	<Provider store={store}>
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<LoginContainer />} />
				<Route path="/register" element={<RegistrationContainer />} />
				<Route path="/profile" element={<ProfileContainer />} />
				<Route path="*" element={ <NotFound404 />} />
			</Routes>
		</div>
	</Provider>
  );
}

export default App;
