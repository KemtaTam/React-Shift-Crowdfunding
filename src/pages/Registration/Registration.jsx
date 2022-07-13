import { Formik} from 'formik';
import { Input, Form, FormItem, Checkbox } from 'formik-antd'
import * as Yup from 'yup';
import s from '../Login/Login.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

/* matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{2,})/,
"Должен содержать от 5 до 255 символов, одну большую букву, одну маленькую, одну цифру и один специальный символ"
) */

const RegistrationForm = (props) => {
	const activeLink = ({isActive}) => isActive ? s.form_navigate_el_active : s.form_navigate_el; 	//для подсветки активной кнопки
	const navigate = useNavigate();

	return (
		<Formik
			initialValues={{ email: '', password: '', repeatPassword: '', name: '', secondName: '', middleName: '', is18: false}}
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
				is18: Yup.bool().oneOf([true], 'Не подтверждено')
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				let user = {
					"name":  values.secondName + ' ' + values.name + ' ' + values.middleName,
					"email": values.email,
					"password": values.password
				}
				props.register(user);
				values.password = '';
				setSubmitting(false);
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
						<FormItem name="name" >
							<Input name="name" placeholder="Имя*" className={s.elemForm}/>
						</FormItem>
						<FormItem name="secondName" >
							<Input name="secondName" placeholder="Фамилия*" className={s.elemForm}/>
						</FormItem>
						<FormItem name="middleName" >
							<Input name="middleName" placeholder="Отчество" className={s.elemForm}/>
						</FormItem>
						<FormItem name="email" >
							<Input type="email" name="email" placeholder="Email*" className={s.elemForm}/>
						</FormItem>
						<FormItem name="password" >
							<Input.Password type="password" name="password" placeholder="Password*" className={s.elemForm}/>
						</FormItem>
						<FormItem name="repeatPassword" >
							<Input.Password type="password" name="repeatPassword" placeholder="Подтвердите пароль*" className={s.elemForm}/>
						</FormItem>
						<FormItem name="is18" >
							<Checkbox name="is18">Подверждаю, что исполнилось 18 лет</Checkbox>
						</FormItem>
						<Button className={s.bLogin} type="primary" htmlType="submit" disabled={isSubmitting}>Регистрация</Button>
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
