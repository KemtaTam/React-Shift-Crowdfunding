import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from '../Login/Login.module.css';
//import { Navigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import passEye from '../../images/passEye.svg'

const RegistrationForm = (props) => {
	const [passFlag, setPassFlag] = useState(true);

	return (
		<Formik
			initialValues={{ email: '', password: '', repeatPassword: '' }}
			validationSchema={Yup.object({
				email: Yup.string().email('Некорректный email').required('Обязательно'),
				password: Yup.string().min(4, 'Должен содержать 4 символа или больше').required('Обязательно'),
				repeatPassword: Yup.string().when("password", {
					is: val => (val && val.length > 0 ? true : false),
					then: Yup.string().oneOf(
					  [Yup.ref("password")],
					  "Пароли должны совпадать"
					)
				  })
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
						<div>
							<Field className={s.elemForm} type="password" name="repeatPassword" placeholder="Repeat rassword"/>
							<ErrorMessage className={s.errorMes} name="repeatPassword" component="div" />
						</div>
						<button className={s.bLogin} type="submit" disabled={isSubmitting}>Войти</button>
					</div>
				</Form>
			)}
		</Formik>
  );
}

export const Registration = (props) => {

	return ( 
		<div>
			<RegistrationForm {...props}/>
		</div>
	 );
}
