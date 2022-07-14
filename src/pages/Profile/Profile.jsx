import s from './Profile.module.css';
import { MyProjects } from './MyProjects/MyProjects';
import defaultAva from '../../Assets/images/defaultAva.svg'
import { CreateProject } from './CreateProject/CreateProject';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

export const Profile = memo((props) => {

	return (
		<section className={s.content}>
			<div className={s.profile}>
				<div className={s.profile_wrapper}> 
					<div className={s.profile_info_wrapper}>
						<img className={s.profile_img} 
							src={defaultAva} alt="ava">
						</img> 
						<div className={s.profile_info}>
							<div className={s.profile_name}>{props.name}</div> 
							<NavLink to={'/login'} onClick={() => props.logout()}>Выйти из аккаунта</NavLink>
						</div>
					</div>
				</div>
				<CreateProject {...props}/>
				<MyProjects {...props}/>
			</div>
		</section>
	)
})
