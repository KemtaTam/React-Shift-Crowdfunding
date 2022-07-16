import s from '../Profile.module.css'

export const ProfileData = (props) => {
	return (
		<div className={s.profile_name}>{props.name}</div>
	)
}