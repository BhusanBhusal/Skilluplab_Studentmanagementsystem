'use server'
import { createSession, decrypt, deleteSession } from '@/app/library/session';
import * as studentService from '@/services/student.service';
import * as bcrypt from "bcryptjs";
import { permanentRedirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export const studentLogin = async (data) => {

    const studentDetails = await studentService.getStudentDetailsByEmail(data);
    const isSuccess = bcrypt.compare(studentDetails.password, data.password)

     
    // const cookieData = await decrypt(session);
    // console.log(cookieData)
    await createSession(studentDetails.email);
    if(isSuccess){
        permanentRedirect('/adminDashboard')

    }else{
       return NextResponse.redirect('/auth/login');
    }
}

export const  logoff = async()=>{
    console.log('clicked');
    deleteSession();
    permanentRedirect('/auth/login');
}