import SignUp from "./SignUp";

export const validate = (data , type) => {

 const errors = {};


 if (!data.email.trim()){
  errors.email = "email required"
} else if(!/\S+@\S+\.\S+/.test(data.email)){
  errors.email = "Email address is invalid"
}
 else {
 delete errors.email
}

if (!data.password){
errors.password = "password is required"

} else if (data.password.length < 6){
 errors.password = "password need to be 6 character or more"
} else {
 delete errors.password

}


 if(type === SignUp){

  if (!data.name.trim()){
    errors.name = "Username required"
 } else{
      delete errors.name
 }

 if (!data.confirmPassword){
  errors.confirmPassword = "confirm to password"
  
  } else if (data.confirmPassword !== data.password){
   errors.confirmPassword = "password need do not match"
  } else {
   delete errors.confirmPassword
  }
  if (data.isAccepted){
   delete errors.isAccepted
  } else {
 errors.isAccepted = "Accept our regulatioms"
 
  }



 }

 return errors;
}
  

