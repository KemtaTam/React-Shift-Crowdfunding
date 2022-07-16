import s from "./Profile.module.css";
import { MyProjects } from "./MyProjects/MyProjects";
import defaultAva from "../../Assets/images/defaultAva.svg";
import { CreateProject } from "./CreateProject/CreateProject";
import { NavLink } from "react-router-dom";
import { memo, useState } from "react";
import { ProfileData } from "./ProfileData/ProfileData";
import { ProfileDataForm } from "./ProfileData/ProfileDataForm";

export const Profile = memo((props) => {
	let [editMode, setEditMode] = useState(false);

	return (
		<section className={s.content}>
			<div className={s.profile}>
				<div className={s.profile_wrapper}>
					<div className={s.profile_info_wrapper}>
						<img className={s.profile_img} src={defaultAva} alt="ava"></img>
						<div className={s.profile_info}>
							{editMode ? (
								<ProfileDataForm {...props} setEditMode={setEditMode} />
							) : (
								<ProfileData {...props} editModeOn={() => setEditMode(true)} />
							)}
							<NavLink to={"/login"} onClick={() => props.logout()}>
								Выйти из аккаунта
							</NavLink>
						</div>
					</div>
				</div>
				<CreateProject {...props} />
				<MyProjects {...props} />
			</div>
		</section>
	);
});
