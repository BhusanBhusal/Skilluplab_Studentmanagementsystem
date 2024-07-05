'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createNewStudentModel= async(data)=>{
    const students = await prisma.studentEnrollment.create({data});
    return students;
}
export const updateStudentModal = async(data)=>{
    const response = await prisma.studentEnrollment.update({
        where:{
            id:data.id,
        },
        data:data,
    })
    return response;
} 

export const getAllStudentsModel = async()=>{
    const studentList=await prisma.studentEnrollment.findMany();
    return studentList;
}

export const getStudentById = async(studentId)=>{
    const stuId= await prisma.studentEnrollment.findUnique({
        where:{
            id:studentId,
        }
    });
    return stuId;
}

export const deleteStudentById= async(studentId) =>{
    console.log(studentId);
    const res= await prisma.studentEnrollment.delete({
        where:{
            id:studentId,
        }
    });
    return res;
}

export const updateStudentPassword = async(stu)=>{
   
    const res = await prisma.studentEnrollment.update({
        where: {
            id: stu.id
        },
        data:{
            password:stu.password, 
        }
    })
    console.log(res);
}

export const getStudentIdByEmail = async(email)=>{
    const studata = await prisma.studentEnrollment.findUnique({
        where:{
            email: email
        }
    })
    return studata;
}
export const updateStudent= async(data)=>{
    const studentdata= await prisma.studentEnrollment.update({
        where:{
            id:data.id
        },
        data
    })
    return studentdata;
}
