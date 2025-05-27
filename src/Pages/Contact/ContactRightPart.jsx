import { useFormik } from 'formik'
import React from 'react'
import { ContactSchema } from '../../schemas/Index'
const initialValues = {
    name: '',
    email: '',
    message: ''
}
function ContactRightPart() {


    let { values, errors, handleBlur, handleReset, handleSubmit, handleChange, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: ContactSchema,

        onSubmit: (values, action) => {
            console.log(values);
            action: handleReset()
        }

    })



    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className=" max-w-sm bg-white p-6 rounded-2xl shadow-md w-[400px]">

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">

                            <input
                                type="name"
                                id="name"
                                name="name"
                                placeholder="username.."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {
                                errors.name && touched.name ? (
                                    <p className='error'>{errors.name}</p>
                                )
                                    : null
                            }
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email .."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={values.email}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                            />
                            {
                                errors.email && touched.email ? (
                                    <p className='error'>{errors.email}</p>
                                )
                                    : null
                            }
                        </div>

                        <div className="mb-4">

                            <textarea name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' cols="30" rows="5" placeholder="Message.." values={values.message} onChange={handleChange} onBlur={handleBlur}>
                                Message
                            </textarea>
                            {
                                errors.message && touched.message ? (
                                    <p className='error'>{errors.message}</p>
                                )
                                    : null
                            }

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactRightPart