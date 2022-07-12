import s from './ProjectItem.module.css';
import likeOn from '../../../../Assets/images/likeOn.svg'
import likeOff from '../../../../Assets/images/likeOff.svg'

export const ProjectItem = (props) => {
	//расчеты длины заполненности линии
	const percentCollected = props.collectedAmount / props.requiredAmount * 100;
	const collectedLineWidth = 100 - (100 - percentCollected);

	//чтобы в карточке отображать только часть описания
	let projectDescPart = '';
	for(let i=0; i<70; i++){	
		props.projectDesc[i] && (projectDescPart += props.projectDesc[i]);
	}

	const changeLikesCount = () => {
		props.changeLikesCount(props.id)
	}
	
	return (
		<div className={s.projectEl}>
			<div className={s.projectEl_title}>{props.projectName}</div>
			<div className={s.creatorName}>{props.creatorName}</div>
			<div className={s.projectEl_desk}>
				{projectDescPart.length === 70 ? projectDescPart + '...' : projectDescPart}	{/* Отображать точки в конце описания или нет */}
			</div>
			<div className={s.summ_wrapper}>
				<div className={s.lineEmpty}>
					<div className={s.lineFilled} style={{width: collectedLineWidth + '%'}}></div>
				</div>
				<div className={s.summ}>{props.collectedAmount + '/' + props.requiredAmount + '₽'}</div>
			</div>
			<div className={s.likes}>
				<img className={s.bLike} src={props.likeFlag ? likeOn : likeOff} alt="like" onClick={changeLikesCount}/> 
				<span>{props.likesCount}</span>
			</div>
		</div>
	)
}