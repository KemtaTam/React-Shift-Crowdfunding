import { ProjectItem } from './ProjectItem/ProjectItem';
import s from './Projects.module.css';

export const Projects = (props) => {
	let projectItem = props.projectsData.map(el => <ProjectItem {...el} key={el.id}/>)

	return (
		<div className={s.projects}>
			{projectItem}
		</div>
	)
}