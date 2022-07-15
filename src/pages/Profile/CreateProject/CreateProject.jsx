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
			initialValues={{ projectName: '', projectDesc: '', 
				requiredAmount: 1000, creatorName: props.name, 
				collectedAmount: 0, categories: '',
				likesCount: 0, likeFlag: false,
				userId: props.userId
			}}
			/* initialValues={{ name: '', description: '', 
				start_date: "2022-07-14T15:04:36.448Z", end_date: "2022-08-14T15:04:36.448Z", 
				required_amount: 0,
				collected_amount: 0, categories: '',
			}} */
			validationSchema={Yup.object({
				projectName: Yup.string().required('Обязательно'),
				categories: Yup.string().required('Обязательно'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				if(!values.requiredAmount) values.requiredAmount = 0;
				console.log(JSON.stringify(values, null, 2));
				props.addProjectTC(values);
				values.projectName = '';
				values.projectDesc = '';
				values.categories = '';
				values.requiredAmount = 1000;
				setSubmitting(false);
				toast.success("Проект создан!");
			}}
		>
			{({ isSubmitting, status }) => (
				<Form className={s.form}>
					<div className={`${s.formWrapper} ${status && s.error}`}> 
						<div className={s.projectTitle}>Новый проект</div>
						<div className={s.errorText}>{status}</div> 
							<FormItem name="projectName" >
								<Input name="projectName" placeholder="Название проекта *" />
							</FormItem>
							<FormItem name="projectDesc" >
               					<Input.TextArea name="projectDesc" placeholder="Описание проекта" />
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
							<FormItem name="requiredAmount" label="Сумма" required>
               					<InputNumber  name="requiredAmount" placeholder="Сумма" addonAfter="₽" min={0}/>
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