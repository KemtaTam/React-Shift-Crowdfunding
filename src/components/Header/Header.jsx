import Search from 'antd/lib/transfer/search';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import s from './Header.module.css'
import profile from '../../images/profile.svg'

export const Header = (props) => {
	return (
		<header className={s.header}> 
			<NavLink to={'/main-page'}><img className={s.header_logo} src={logo} alt="logo" /></NavLink>

			<div className={s.nav_right}>
				<div className={s.search}>
					<Search allowClear/>
				</div>
				<div className={s.line}></div>
				<div className={s.createProjectBlock}>  
					<NavLink to={'/profile'}>Создать проект</NavLink>
				</div>
				<div className={s.line}></div>
				<div className={s.profileBlock}>  
					<NavLink to={'/profile'}><img className={s.profileLogo} src={profile} alt="profile icon" /></NavLink>
				</div>
			</div>
			
		</header>
	)
}
