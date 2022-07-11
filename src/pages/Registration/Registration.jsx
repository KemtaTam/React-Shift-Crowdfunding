import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from '../Login/Login.module.css';
//import { Navigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

/* matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{2,})/,
"Должен содержать от 5 до 255 символов, одну большую букву, одну маленькую, одну цифру и один специальный символ"
) */

const RegistrationForm = (props) => {
	const [passFlag, setPassFlag] = useState(true);

	return (
		<Formik
			initialValues={{ email: '', password: '', repeatPassword: '', name: '', secondName: '', middleName: ''}}
			validationSchema={Yup.object({
				email: Yup.string().email('Некорректный email').required('Обязательно').max(255, 'Email должен содержать не более 255 символов'),
				password: Yup.string().min(5, 'Должен содержать от 5 до 255 символов').max(255, "Должен содержать от 5 до 255 символов").required('Обязательно'),
				repeatPassword: Yup.string().when("password", {
					is: val => (val && val.length > 0 ? true : false),
					then: Yup.string().oneOf(
					  [Yup.ref("password")],
					  "Пароли должны совпадать"
					)
				  }).required('Обязательно'),
				name: Yup.string().max(32, 'Имя должно содержать не более 32 символов').required('Обязательно'),
				secondName: Yup.string().max(32, 'Фамилия должна содержать не более 32 символов').required('Обязательно'),
				middleName: Yup.string().max(32, 'Отчество должно содержать не более 32 символов'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				let user = {
					"name":  values.secondName + ' ' + values.name + ' ' + values.middleName,
					"email": values.email,
					"password": values.password
				}
				props.addUser(user);
				setSubmitting(false);
				values.password = '';
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
							<Field className={s.elemForm} name="name" placeholder="Имя*"/>
							<ErrorMessage className={s.errorMes} name="name" component="div" />
						</div>
						<div >
							<Field className={s.elemForm} name="secondName" placeholder="Фамилия*"/>
							<ErrorMessage className={s.errorMes} name="secondName" component="div" />
						</div >
						<div >
							<Field className={s.elemForm} name="middleName" placeholder="Отчество"/>
							<ErrorMessage className={s.errorMes} name="middleName" component="div" />
						</div>
						<div >
							<Field className={s.elemForm} type="email" name="email" placeholder="Email*"/>
							<ErrorMessage className={s.errorMes} name="email" component="div" />
						</div>
						<div>
						<Field className={s.elemForm} type={passFlag ? "password" : "text"} name="password" placeholder="Password*"/>
							<ErrorMessage className={s.errorMes} name="password" component="div" />
						</div>
						<div>
							<Field className={s.elemForm} type="password" name="repeatPassword" placeholder="Repeat rassword*"/>
							<ErrorMessage className={s.errorMes} name="repeatPassword" component="div" />
						</div>
						<button className={s.bLogin} type="submit" disabled={isSubmitting}>Зарегистрироваться</button>
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
