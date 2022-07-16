import { Button } from "antd";
import { NavLink } from "react-router-dom";
import s from "./Project.module.css";

export const Project = (props) => {
	let projectData = props.projectsData[0];

	return (
		<div className={s.projectEl}>
			<div className={s.projectEl_title}>{projectData?.projectName}</div>
			<div className={s.creatorName}>{projectData?.creatorName}</div>
			<div className={s.projectEl_desk}>{projectData?.projectDesc}</div>
			<div className={s.summ_wrapper}>
				<div className={s.summ}>
					{projectData?.collectedAmount + "/" + projectData?.requiredAmount + "₽"}
				</div>
			</div>
			<NavLink to={`/projects/${projectData?.id}`}>
				<Button className={s.bDonate} type="primary">
					Поддержать
				</Button>
			</NavLink>
		</div>
	);
};
