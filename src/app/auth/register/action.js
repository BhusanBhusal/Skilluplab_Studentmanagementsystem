'use server';

import { permanentRedirect } from 'next/navigation';

import * as studentService from '@/services/student.service';

export const registerNewStudent = async(data) => {
     //const studentData = omit(data, ['password'],['confirmPassword']);
    const studentRes = await studentService.createNewStudent({...data,
         enrollmentDate: new Date(data.enrollmentDate),

         refundPolicy: !!data.refundPolicy
        });

    permanentRedirect(`/auth/createPassword/${studentRes.id}`);
    // return {
    //     user,
    //     message: 'New user added successfully!'
    // };
}