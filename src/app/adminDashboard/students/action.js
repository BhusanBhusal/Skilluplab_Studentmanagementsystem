import { deleteStudent, getAllStudents } from "@/services/student.service";
import { redirect } from "next/navigation";
import * as studentService from '@/services/student.service';
import { createSession } from "@/app/library/session";



export const  deleteEnrollStudent = async(studentId)=>{
     await deleteStudent(studentId);
    const studentList = await getAllStudents();
    return studentList;
}

export const addStudentDetails= async (data)=>{
   const studentRes = await studentService.createNewStudent({...data,
        enrollmentDate: new Date(data.enrollmentDate).toISOString(), 

        refundPolicy: !!data.refundPolicy
       });
       await createSession(data.email);
       return studentRes;
}