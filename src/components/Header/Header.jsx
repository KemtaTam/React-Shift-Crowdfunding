import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import search from '../../images/searchHeader.svg'
import s from './Header.module.css'

export const Header = (props) => {
	return (
		<header className={s.header}> 
			<NavLink to={'/main-page'}><img className={s.header_logo} src={logo} alt="logo" /></NavLink>

			<div className={s.nav_right}>
				<div className={s.search}>
					<img src={search} alt="search" />
					<input className={s.searchInput} type="text" />
				</div>
				<div className={s.line}></div>
				<div className={s.createProjectBlock}>  
					<NavLink to={'/create-project'}>Создать проект</NavLink>
				</div>
				<div className={s.line}></div>
				<div className={s.loginBlock}>  
					<NavLink to={'/login'}>Войти</NavLink>
				</div>
			</div>
			
		</header>
	)
}
