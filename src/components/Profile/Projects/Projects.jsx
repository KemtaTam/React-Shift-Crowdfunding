import s from './Projects.module.css';

export const Projects = (props) => {
	return (
		<div className={s.projects}>
			<div className={s.projectEl}>
				<div className={s.projectEl_title}>Название проекта</div>
				<div className={s.projectEl_desk}>Описание крутого проекта, в который необходимо...</div>
				<div className={s.summ_wrapper}>
					<div className={s.lineEmpty}><div className={s.lineFilled}></div></div>
					<div className={s.summ}>20 000 руб</div>
				</div>
			</div>
			<div className={s.projectEl}>
				<div className={s.projectEl_title}>Название проекта</div>
				<div className={s.projectEl_desk}>Описание крутого проекта, в который необходимо...</div>
				<div className={s.summ_wrapper}>
					<div className={s.lineEmpty}><div className={s.lineFilled}></div></div>
					<div className={s.summ}>30 000 руб</div>
				</div>
			</div>
		</div>
	)
}