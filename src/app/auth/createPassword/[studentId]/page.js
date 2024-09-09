'use client'
import * as yup from "yup";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getStudentDetailsById } from "@/services/student.service";
import { useState, useEffect } from 'react';
import { registerStudentPassword } from "./action";
import { useRouter } from 'next/navigation';


const createStudentPasswordSchema = yup.object(
    {
        id: yup.number(),
        password: yup.string().required("No Password Provided").min(8, 'Password should be at least 8 characters long!'),
        confirmPassword: yup.string().required("Confirm Password is required.").min(8, 'Confirm password should be at least 8 characters long!')
            .oneOf([yup.ref('password')], 'Confirm password should match with password!')
    }
)
export default function createPassword({ params }) {
    const [studentData, setStudentData] = useState(null)
    const studentId = parseInt(params.studentId);
    const { push } = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(createStudentPasswordSchema)

    });
    useEffect(() => {
        (async () => {
            const response = await getStudentDetailsById(studentId);
            setStudentData(response)
        })();
    }, [])
    const onPasswordSubmit = async (data) => {
        const res = await registerStudentPassword(data);
        if (!res.error) {
            push('/adminDashboard');
        }
    }
    return (
        <>
            <form className="  max-w-sm" onSubmit={handleSubmit(onPasswordSubmit)}>
                {
                    (studentData && (<h2 className="mb-2 text-center"><b>Welcome {studentData.fullName}. You are Almost there!!</b><p>Set Your Password!!</p></h2>))
                }
                {studentData &&
                    <div className="mb-4 ">
                        <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2" >
                            Username:  <span className=" text-xl">{studentData.email}</span>
                        </label>

                    </div>
                }
                <div className="">
                    {studentData && <input type="hidden" {...register('id')} value={studentData.id} />}
                    <label htmlFor="Password" className="block text-gray-700 text-sm font-bold mb-2" >
                        Password <span className="text-red-500"> *</span>
                    </label>
                    <input {...register('password')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <span className="text-red-500">{errors.password?.message}</span>
                </div>

                <div className="">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2" >
                        Confirm Password <span className="text-red-500"> *</span>
                    </label>
                    <input {...register('confirmPassword')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <span className="text-red-500">{errors.confirmPassword?.message}</span>
                </div>
                <div className="ml-24 md:items-center">
                    <div className="md:w-2/3">
                        <button type="submit" className="shadow text-black font-bold py-2 px-4 rounded-full bg-golden" >
                            Finish
                        </button>
                        <Link href="/auth/login" className=" ml-1 shadow focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded-full" type="button">
                            Cancel
                        </Link>
                    </div>
                </div>

            </form>

        </>

    );
}