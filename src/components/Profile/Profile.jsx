import s from './Profile.module.css';
import { Projects } from './Projects/Projects';
import defaultAva from '../../images/defaultAva.svg'

export const Profile = (props) => {
	return (
		<section className={s.content}>
			<div className={s.profile}>
				<div className={s.profile_wrapper}> 
					<div className={s.profile_info_wrapper}>
						<img className={s.profile_img} 
							src={defaultAva} alt="ava">
						</img> 
						<div className={s.profile_info}>
							<div className={s.profile_name}>{/* {props.usersData.fullName} */}Иванов Бильбо Бегинс</div> 
						</div>
					</div>
				</div>
				<Projects />
			</div>
		</section>
	)
}
