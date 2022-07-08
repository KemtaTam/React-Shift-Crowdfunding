import { Provider } from "react-redux";
import {Routes, Route, BrowserRouter, /* HashRouter */} from "react-router-dom";
import './App.css';
import { CreateProject } from "./components/CreateProject/CreateProject";
import { Header } from './components/Header/Header';
import LoginContainer from "./components/Login/LoginContainer";
import { MainPage } from "./components/MainPage/MainPage";
import { Profile } from "./components/Profile/Profile";
import { Registration } from "./components/Registration/Registration";
import store from "./redux/redux-store";

function App() {
  return (
	<BrowserRouter>
		<Provider store={store}>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/main-page" element={<MainPage />} />
					<Route path="/login" element={<LoginContainer />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/create-project" element={<CreateProject />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</Provider>
	</BrowserRouter>
  );
}

export default App;
