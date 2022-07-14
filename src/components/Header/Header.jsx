import Search from 'antd/lib/transfer/search';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import profile from '../../Assets/images/profile.svg'
import { Logo } from './Logo';
import { memo } from 'react';

export const Header = memo((props) => {
	return (
		<header className={s.header}> 
			<NavLink to={'/'}><Logo /></NavLink>
			<nav className={s.nav}>
				<ul className={s.ul}>
					<li className={s.search}>
						<Search allowClear/>
					</li>
					<span className={s.line}></span>
					<li className={s.li}>  
						<NavLink to={'/projects'}>Все проекты</NavLink>
					</li>
					<span className={s.line}></span>
					<li className={s.li}>  
						<NavLink to={'/profile'}>Создать проект</NavLink>
					</li>
					<span className={s.line}></span>
					<li className={s.li}>  
						{props.isAuth ? 
							<NavLink to={'/profile'}><img className={s.profileLogo} src={profile} alt="profile icon" /></NavLink> :
							<NavLink to={'/login'}>Войти</NavLink>
						}		
					</li>
				</ul>
			</nav>
			
		</header>
	)
})
