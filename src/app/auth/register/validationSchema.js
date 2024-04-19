import * as yup from "yup";

const enrollmentvalidationSchema  = yup
.object({
  fullName: yup.string().required('Full name is required!'),
  email: yup.string().required('Email is required!').email('Not a valid email!'),
  mobile: yup.string().required('Mobile number is required!'),
  residentalAddress: yup.string().required("Residential Address is Required.!"),
  course: yup.string().required("Please select one of the courses.!"),
  education: yup.string().required('Education is required.!'),
  college: yup.string().required("College is required.!"),
  termsAndCondition: yup.bool().required("Agree the terms and condition"),
  refundPolicy: yup.string().required("Please check the policy.!"),
  enrollmentDate: yup.string().required('Select Enrollment Date.!'),
  sessionTime: yup.string().required('Select One of the session.!'),
  fees: yup.string(),
  // password: yup.string().required('Password is required!').min(8, 'Password should be at least 8 characters long!'),
  // confirmPassword: yup.string().required('Confirm password is required!').min(8, 'Confirm password should be at least 8 characters long!')
  //   .oneOf([yup.ref('password'), null], 'Confirm password should match with password!')
})
.required();

export default enrollmentvalidationSchema;