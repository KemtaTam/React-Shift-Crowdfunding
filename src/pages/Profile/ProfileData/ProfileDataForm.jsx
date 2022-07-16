import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import p from "../Profile.module.css";

export const ProfileDataForm = (props) => {

	return (
		<Formik
			initialValues={{
				fullName: props.usersData.fullName,
			}}
			validationSchema={Yup.object({})}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				props.saveProfile(values, setStatus, props.setEditMode);
				setSubmitting(false);
			}}>
			{({ isSubmitting, status }) => (
				<Form className={status && p.error}>
					<div className={p.errorText}>{status}</div>
					<button type="submit" disabled={isSubmitting}>
						Save
					</button>
				</Form>
			)}
		</Formik>
	);
};

