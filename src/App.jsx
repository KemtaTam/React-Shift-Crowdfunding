import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import { Header } from './components/Header/Header';
import { Login } from "./components/Login/Login";
import { MainPage } from "./components/MainPage/MainPage";
import { Registration } from "./components/Registration/Registration";

function App() {
  return (
	<BrowserRouter>
		<div className="App">
			<Header />
			<Routes>
				<Route path="/main-page" element={<MainPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Registration />} />
			</Routes>
		</div>
	</BrowserRouter>
  );
}

export default App;
