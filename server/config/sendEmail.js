import {sendEmail} from './emailService.js';


const sendEmailFun=async(toString,subject,Text,html)=>{
    const result = await sendEmail(toString,subject,Text,html);
    if(result.success){
        return true;
    }else{
        return false;
    }
}

export default sendEmailFun;