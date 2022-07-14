import { memo } from 'react';
import { MyProjectItem } from './MyProjectItem/MyProjectItem';
import s from './MyProjects.module.css';

export const MyProjects = memo((props) => {
	let projectItem = props.projectsData.map(el => <MyProjectItem {...el} key={el.id} changeLikesCount={props.changeLikesCount}/>)

	return (
		<div className={s.projects}>
			{projectItem}
		</div>
	)
})