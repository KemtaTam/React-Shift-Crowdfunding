import { SomeProjects } from './SomeProjects/SomeProjects';
import { Statistic } from './Statistic/Statistic';

export const MainPage = (props) => {
	return (
		<div >
			<Statistic />
			<SomeProjects {...props}/>
		</div>
	)
}





