'use server'
import * as studentService from '@/services/student.service';

import sgMail from '@sendgrid/mail';
import { v4 as uuidv4 } from 'uuid';

export const forgetPassword = async (data) => {
  const stuData = await studentService.getStudentDetailsByEmail(data);
  if (stuData.email) {
    const resetToken = uuidv4();
    const now = new Date();
    const tokenExpiry = new Date(now.setDate(now.getDate() + 1));
    await studentService.updateResetToken({ id: stuData.id, resetToken, tokenExpiry });

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    console.log(SENDGRID_API_KEY);
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: stuData.email,
      from: 'bhusanbhusal@gmail.com', // Use the email address or domain you verified above
      subject: 'Reset Password',
      text: 'Please find the reset link',
      templateId: 'd-2f3612a857d54635a8d7f1ae22f08482',
      dynamicTemplateData: {
        username: stuData.fullName,
        useremail: stuData.email,
        resetlink: `http://localhost:3000/auth/resetPassword?&email=${stuData.email}&token=${resetToken}`
      }
    };
    try {
      const response = await sgMail.send(msg);
      console.log({ response });
      if(response.Response.statusCode){
        
      }
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
}