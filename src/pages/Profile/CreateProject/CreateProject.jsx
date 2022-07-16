import { Formik } from 'formik';
import { Input, Form, FormItem, InputNumber, Select } from 'formik-antd'
import * as Yup from 'yup';
import s from './CreateProject.module.css';
import { Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import { memo } from 'react';

const CreateProjectForm = memo((props) => {
	return (
		<Formik
			initialValues={{ name: '', description: '', 
				required_amount: 1000, creatorName: props.name, 
				collected_amount: 0, categories: '',
				likesCount: 0, likeFlag: false,
				userId: props.userId
			}}
			/* initialValues={{ name: '', description: '', parent_name: props.name,
				start_date: "2022-07-14T15:04:36.448Z", end_date: "2022-08-14T15:04:36.448Z", 
				required_amount: 1000, likeFlag: false, likesCount: 0,
				collected_amount: 0, categories: '',
			}} */
			validationSchema={Yup.object({
				name: Yup.string().required('Обязательно'),
				categories: Yup.string().required('Обязательно'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				if(!values.requiredAmount) values.requiredAmount = 0;
				console.log(JSON.stringify(values, null, 2));
				debugger
				props.addProjectTC(values);
				values.name = '';
				values.description = '';
				values.categories = '';
				values.required_amount = 1000;
				setSubmitting(false);
				toast.success("Проект создан!");
			}}
		>
			{({ isSubmitting, status }) => (
				<Form className={s.form}>
					<div className={`${s.formWrapper} ${status && s.error}`}> 
						<div className={s.projectTitle}>Новый проект</div>
						<div className={s.errorText}>{status}</div> 
							<FormItem name="name" >
								<Input name="name" placeholder="Название проекта *" />
							</FormItem>
							<FormItem name="description" >
               					<Input.TextArea name="description" placeholder="Описание проекта" />
              				</FormItem>
							<FormItem name="categories" >
								<Select name="categories" style={{ width: "100%" }} placeholder="Выбирете категорию">
									<Select.Option value={"Медицина"}>Медицина</Select.Option>
									<Select.Option value={"Образование"}>Образование</Select.Option>
									<Select.Option value={"Спорт"}>Спорт</Select.Option>
									<Select.Option value={"Искусство"}>Искусство</Select.Option>
									<Select.Option value={"Строительство"}>Строительство</Select.Option>
									<Select.Option value={"Технологии"}>Технологии</Select.Option>
									<Select.Option value={"Другое"}>Другое</Select.Option>
								</Select>
							</FormItem>
							<FormItem name="required_amount" label="Сумма" required>
               					<InputNumber  name="required_amount" placeholder="Сумма" addonAfter="₽" min={0}/>
              				</FormItem>
						<div className={s.wrapperButSub}>
							<Button type="default" htmlType="submit" disabled={isSubmitting} className={s.bSub}>Готово!</Button>
						</div>
						<ToastContainer position="top-center" autoClose={1000} 
							hideProgressBar={false} newestOnTop 
							closeOnClick rtl={false} pauseOnFocusLoss 
							draggable pauseOnHover
						/>
					</div>
				</Form>
			)}
		</Formik>
	)
})

export const CreateProject = memo((props) => {	
	return ( 
		<div>
			<CreateProjectForm {...props}/>
		</div>
	 );
})