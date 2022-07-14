import s from './../Statistic.module.css'

export const StatisticEl = ({num, desc}) => {
	return (
		<>
		<div className={s.stat_el}>
			<div className={s.circle}></div>
			<div className={s.stat_text}>
				<div className={s.stat_text_num}>{num}</div>
				<div className={s.stat_text_desc}>{desc}</div>
			</div>
		</div>
		</>
	)
}