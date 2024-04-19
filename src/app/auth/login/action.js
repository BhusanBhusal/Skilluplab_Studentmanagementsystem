'use server'
import * as studentService from '@/services/student.service';
import * as bcrypt from "bcryptjs";
import { permanentRedirect } from 'next/navigation';

export const studentLogin = async (data) => {
    console.log(process.env.SECRET_KEY);

    const studentDetails = await studentService.getStudentDetailsByEmail(data);
    const isSuccess = bcrypt.compare(studentDetails.password, data.password)
    console.log(isSuccess);
    permanentRedirect('/adminDashboard')

}