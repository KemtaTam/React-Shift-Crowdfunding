import s from './ProjectItem.module.css';

export const ProjectItem = (props) => {
	debugger
	return (
		<div className={s.projectEl}>
			<div className={s.projectEl_title}>{props.projectName}</div>
			<div className={s.projectEl_title}>{props.creatorName}</div>
			<div className={s.projectEl_desk}>{props.projectDesc}</div>
			<div className={s.summ_wrapper}>
				<div className={s.lineEmpty}><div className={s.lineFilled}></div></div>
				<div className={s.summ}>{props.requiredAmount}</div>
			</div>
		</div>
	)
}