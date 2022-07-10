import { Formik } from 'formik';
import { Input, Form, FormItem, InputNumber } from 'formik-antd'
import * as Yup from 'yup';
import s from './CreateProject.module.css';
import { Button } from 'antd';

const CreateProjectForm = (props) => {
	return (
		<Formik
			initialValues={{ projectName: '', projectDesc: '', requiredAmount: 1000}}
			validationSchema={Yup.object({
				projectName: Yup.string().required('Обязательно'),
				projectDesc: Yup.string().required('Обязательно'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				if(!values.requiredAmount) values.requiredAmount = 0;
				console.log(JSON.stringify(values, null, 2));
				props.addProject(values);
				setSubmitting(false);
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
               					<Input.TextArea name="projectDesc" placeholder="Описание проекта *" />
              				</FormItem>
							<FormItem name="requiredAmount" label="Сумма" required>
               					<InputNumber  name="requiredAmount" placeholder="Сумма" addonAfter="₽" min={0}/>
              				</FormItem>
						<div className={s.wrapperButSub}>
							<Button type="default" htmlType="submit" disabled={isSubmitting} className={s.bSub}>Готово!</Button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	)
}
export const CreateProject = (props) => {
	
	return ( 
		<div>
			<CreateProjectForm {...props}/>
		</div>
	 );
}