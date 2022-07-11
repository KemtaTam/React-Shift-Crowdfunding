import notFound from '../../Assets/images/NotFound404.jpg'
import s from './NotFound404.module.css'

export const NotFound404 = (props) => {
	return ( 
		<div className={s.wrapper}>
			<img className={s.img} src={notFound} alt="Not found" />
			<div className={s.errorText}>404 NOT FOUND</div>
		</div>
	 );
}
