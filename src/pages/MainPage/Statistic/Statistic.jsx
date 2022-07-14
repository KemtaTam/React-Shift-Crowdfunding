import s from './Statistic.module.css'
import main from '../MainPage.module.css'
import { StatisticEl } from './StatisticEl/StatisticEl'
import { NavLink } from 'react-router-dom'

export const Statistic = () => {
	return (
		<section className = {s.statistic}> 
			<div className={main.container}>
				<div className={s.wrapper}>
					<h1 className = {s.titleCrowd}>Краудфандинговая платформа</h1>
					<NavLink to={"/profile"}><button type="default" className={s.bCreateProject}>Создать проект</button></NavLink> 
					<div className={s.stats}>
						<StatisticEl num={"228"} desc={"успешных проектов"}/>
						<StatisticEl num={"322"} desc={"участников"}/>
						<StatisticEl num={"14 881 377"} desc={"собранных средств"}/>
					</div>
				</div>
			</div>
		</section>
		
	)
}