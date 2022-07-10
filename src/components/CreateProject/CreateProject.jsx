import { Formik } from 'formik';
import { Input, Form, FormItem, InputNumber } from 'formik-antd'
import * as Yup from 'yup';
import s from './CreateProject.module.css';
import { Button } from 'antd';

const CreateProjectForm = (props) => {
	return (
		<Formik
			initialValues={{ projectName: '', description: '', summ: 1000}}
			validationSchema={Yup.object({
				projectName: Yup.string().required('Обязательно'),
				description: Yup.string().required('Обязательно'),
			  })}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				if(!values.summ) values.summ = 0;
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
							<FormItem name="description" >
               					<Input.TextArea name="description" placeholder="Описание проекта *" />
              				</FormItem>
							<FormItem name="summ" label="Сумма" required>
               					<InputNumber  name="summ" placeholder="Сумма" addonAfter="₽" min={0}/>
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