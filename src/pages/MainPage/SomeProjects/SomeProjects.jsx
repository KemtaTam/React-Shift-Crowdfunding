import { NavLink } from "react-router-dom"
import { MyProjectItem } from "../../Profile/MyProjects/MyProjectItem/MyProjectItem"
import main from '../MainPage.module.css'
import s from './SomeProjects.module.css'

export const SomeProjects = (props) => {
	debugger
	return (
		<div className={main.container}>
			<div className={s.wrapper}>
				<h2 className={s.title}>Проекты</h2>
				<NavLink to={"/projects"} className={s.link_projects}>Все проекты</NavLink>
				<div className={s.projects}>
					<MyProjectItem collectedAmount={228} requiredAmount={1000} 
						projectDesc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic esse sit nemo blanditiis. Alias vitae ratione ipsum repellendus aliquam molestiae quas temporibus? Eos fugit sint cupiditate quod. Voluptate, dolor debitis!"} 
						projectName={"Настольная игра «Внутри Лапенко»"} creatorName={"Яковлева Мария Филипповна"} 
						likeFlag={true} likesCount={228} id={""}
					/>
					<MyProjectItem collectedAmount={10000} requiredAmount={7000} 
						projectDesc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic esse sit nemo blanditiis."} 
						projectName={"Финал серии комиксов 'Человек-Паук: Майлз Моралес'"} 
						creatorName={"Котов Всеволод Михайлович"} likeFlag={false} likesCount={0} id={""}
					/>
					<MyProjectItem collectedAmount={10000} requiredAmount={50000} 
						projectDesc={"lalala"} projectName={"Настольная игра 'А ты шаришь: древний мир'"} 
						creatorName={"Анисимов Вячеслав Юлианович"} likeFlag={true} likesCount={1} id={""}
					/>
					<MyProjectItem collectedAmount={10012} requiredAmount={2929000} 
						projectDesc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."} 
						projectName={"СЪЕМКИ КИНОКОМИКСА 'НАСТОЯЩИЙ ГЕРОЙ'"} 
						creatorName={"Давыдова Анисья Владимировна"} likeFlag={false} likesCount={9999} id={""}
					/>
				</div>
			</div>
		</div>
	)
}