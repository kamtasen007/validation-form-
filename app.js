function validation(){

    let user =document.getElementById("user").value;
    let  pass=document.getElementById("pass").value;
    let conpass =document.getElementById("conpass").value;
    let MobileNumber =document.getElementById("MobileNumber").value;
    let emails =document.getElementById("emails").value;

    if (user == ""){
        document.getElementById("username").innerHTML="Please fill the username field";
        return false;
    }
    if (user.length <= 2 || user.length > 20){
        document.getElementById("username").innerHTML="Username length must be 2 to 20 character";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById("username").innerHTML="Only Characters are allowed";
        return false;
    }



    if (pass == ""){
        document.getElementById("password").innerHTML="Please fill the password field";
        return false;
    }
    if (pass.length <= 8 || pass.length > 20){
        document.getElementById("password").innerHTML="Password length must be 8 character";
        return false;
    }
    if(pass !=conpass){
        document.getElementById("confrmpass").innerHTML="Password are not matching";
        return false;
    }


    if (conpass == ""){
        document.getElementById("confrmpass").innerHTML="Please fill the confirm password field";
        return false;
    }

    if (MobileNumber == ""){
        document.getElementById("Mobileno").innerHTML="Please fill the mobile number field";
        return false;
    }
        
    if(isNaN(MobileNumber)){
        document.getElementById("Mobileno").innerHTML="User must write digits only not character";
        return false;
    }
    if(MobileNumber.length!=10){
        document.getElementById("Mobileno").innerHTML="Mobile must be write 10 digits only";
        return false;
    }



    if (emails == ""){
        document.getElementById("emailids").innerHTML="Please fill the email field";
        return false;
    }
    if( emails.indexOf('@') <=0){
        document.getElementById("emailids").innerHTML=" @ Invalid position";
        return false;
    }

    if((emails.charAt(emails.length-4)!=".") && (emails.charAt(emails.length-3)!=".")){
        document.getElementById("emailids").innerHTML=" . Invalid position";
        return false;
    }
}