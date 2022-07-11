import s from './ProjectItem.module.css';

export const ProjectItem = (props) => {
	const percentCollected = props.collectedAmount / props.requiredAmount * 100;
	const collectedLineWidth = 100 - (100 - percentCollected);
	
	return (
		<div className={s.projectEl}>
			<div className={s.projectEl_title}>{props.projectName}</div>
			<div className={s.creatorName}>{props.creatorName}</div>
			<div className={s.projectEl_desk}>{props.projectDesc}</div>
			<div className={s.summ_wrapper}>
				<div className={s.lineEmpty}>
					<div className={s.lineFilled} style={{width: collectedLineWidth + '%'}}></div>
				</div>
				<div className={s.summ}>{props.requiredAmount}</div>
			</div>
		</div>
	)
}