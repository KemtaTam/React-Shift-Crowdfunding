import s from './MainPage.module.css'
import { Button } from 'antd';



export const MainPage = (props) => {
	return (
		<><div></div><Statistic /></>
	)
}

 const Statistic = () => {
	return (
		
		<div className = {s.statisticBlock}> 

			
		
		<div className = {s.wrapperButSub}>
			<Button type="default" htmlType="submit" className={s.bSub}>Создать проект</Button>
						</div>

						<div className = {s.titleCrowd}>Краудфандинговая платформа</div>
		</div>
		
	)
}


