import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';
//import { Navigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import passEye from '../../images/passEye.svg'
import { useState } from 'react';

const LoginForm = (props) => {
	const [passFlag, setPassFlag] = useState(true);

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={Yup.object({
				email: Yup.string().email('Некорректный email').required('Обязательно'),
				password: Yup.string().min(4, 'Должен содержать 4 символа или больше').required('Обязательно'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				values.password = '';
				setSubmitting(false);
			}}
		>
			{({ isSubmitting, status }) => (
				<Form className={s.form}>
					<div className={`${s.formWrapper} ${status && s.error}`}> 
						<div className={s.form_navigate}>
							<div className={s.form_navigateEl}><NavLink to={'/login'}>Войти</NavLink></div>
							<div className={s.form_navigateEl}><NavLink to={'/register'}>Регистрация</NavLink></div>
						</div>
						<div className={s.line_navigate}></div>
						<div className={s.errorText}>{status}</div> 
						<div >
							<Field className={s.elemForm} type="email" name="email" placeholder="Email"/>
							<ErrorMessage className={s.errorMes} name="email" component="div" />
						</div>
						<div>
							<Field className={s.elemForm} type={passFlag ? "password" : "text"} name="password" placeholder="Password"/>
							<img src={passEye} alt="eye" onClick={() => setPassFlag(!passFlag)}/>
							<ErrorMessage className={s.errorMes} name="password" component="div" />
						</div>
						<button className={s.bLogin} type="submit" disabled={isSubmitting}>Войти</button>
					</div>
				</Form>
			)}
		</Formik>
  );
}

export const Login = (props) => {
	/* if(props.isAuth){
		return <Navigate to={"/profile"}/>
	} */

	return ( 
		<div>
			<LoginForm {...props}/>
		</div>
	 );
}
