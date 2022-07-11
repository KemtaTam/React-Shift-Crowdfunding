import { Formik } from 'formik';
import { Input, Form, FormItem } from 'formik-antd'
import * as Yup from 'yup';
import s from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const LoginForm = (props) => {
	const activeLink = ({isActive}) => isActive ? s.active : s.form_navigateEl;		//для подсветки активной кнопки

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={Yup.object({
				email: Yup.string().email('Некорректный email').required('Обязательно'),
				password: Yup.string().min(4, 'Должен содержать 4 символа или больше').required('Обязательно'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				values.password = '';
				console.log(JSON.stringify(values, null, 2));
				setSubmitting(false);
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
