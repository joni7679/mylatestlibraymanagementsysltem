import *as Yup from 'yup';

export const SignupSchema = Yup.object({
    name: Yup.string().required('Name is required').min(2).max(30),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    number: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required').max(20),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match') 
        .required('Confirm Password is required'),
});


export const Loginschema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password too short')

})

export const ContactSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
})