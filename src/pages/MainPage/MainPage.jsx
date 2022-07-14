import { SomeProjects } from './SomeProjects/SomeProjects';
import { Statistic } from './Statistic/Statistic';

export const MainPage = (props) => {
	debugger
	return (
		<div >
			<Statistic />
			<SomeProjects {...props}/>
		</div>
	)
}





