import s from './Project.module.css'

export const Project = (props) => {
	return (
		<div className={s.projectEl}>
			{/* <div className={s.projectEl_title}>{props.projectName}</div>
			<div className={s.creatorName}>{props.creatorName}</div>
			<div className={s.projectEl_desk}>
				{projectDescPart.length === 70 ? projectDescPart + '...' : projectDescPart}	
			</div>
			<div className={s.summ_wrapper}>
				<div className={s.lineEmpty}>
					<div className={s.lineFilled} style={{width: collectedLineWidth + '%'}}></div>
				</div>
				<div className={s.summ}>{props.collectedAmount + '/' + props.requiredAmount + '₽'}</div>
			</div>
			<NavLink to={`/projects/${props.id}`}><Button className={s.bDonate} type='primary'>Поддержать</Button></NavLink>
			<div className={s.likes}>
				<img className={s.bLike} src={props.likeFlag ? likeOn : likeOff} alt="like" onClick={changeLikesCount}/> 
				<span>{props.likesCount}</span>
			</div> */}
		</div>
	)
}