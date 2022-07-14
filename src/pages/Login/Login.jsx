import { Formik } from 'formik';
import { Input, Form, FormItem } from 'formik-antd'
import * as Yup from 'yup';
import s from './Login.module.css';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { memo } from 'react';

const LoginForm = memo((props) => {
	const activeLink = ({isActive}) => isActive ? s.form_navigate_el_active : s.form_navigate_el;		//для подсветки активной ссылки
	const navigate = useNavigate();

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={Yup.object({
				email: Yup.string().email('Некорректный email').required('Обязательно'),
				password: Yup.string().min(4, 'Должен содержать 4 символа или больше').required('Обязательно'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				props.login(values)
				setSubmitting(false);
				values.password = '';
				navigate('/profile');
			}}
		>
			{({ isSubmitting, status }) => (
				<Form className={s.form}>
					<div className={`${s.formWrapper} ${status && s.error}`}> 
						<div className={s.form_navigate}>
							<NavLink to={'/login'} className={activeLink}>Войти</NavLink>
							<NavLink to={'/register'} className={activeLink}>Регистрация</NavLink>
						</div>
						<div className={s.line_navigate}></div>
						<div className={s.errorText}>{status}</div> 
							<FormItem name="email" >
								<Input type="email" name="email" placeholder="Email" className={s.elemForm}/>
							</FormItem>
							<FormItem name="password" >
               					<Input.Password name="password" placeholder="Password" className={s.elemForm}/>
              				</FormItem>
						<Button className={s.bLogin} type="primary" htmlType="submit" disabled={isSubmitting}>Войти</Button>
					</div>
				</Form>
			)}
		</Formik>
  );
})

export const Login = memo((props) => {

	return props.isAuth ? 
		<Navigate to={"/profile"}/> : ( 
		<div>
			<LoginForm {...props}/>
		</div>
	 );
})
