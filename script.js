// FIRST NAME CODING

let callFunction = document.getElementById("firstname");
callFunction.onblur = function main(){

    let selectInput = document.getElementById("firstname").value;
    let reSelectInput = document.getElementById("firstname");
    let warningImage = document.getElementById("first_warning");

    if(selectInput == ""){

        reSelectInput.style.border = "1px solid red";
        warningImage.style.display = "block";
    }

    reSelectInput.onclick = function second(){
        let nameImage = document.getElementById("name_image");
        nameImage.style.display = "block";
        reSelectInput.style.border = "none";
        warningImage.style.display = "none";

        reSelectInput.onblur = function(){
            nameImage.style.display = "none";

            reSelectInput.style.border = "1px solid red";
            warningImage.style.display = "block";
        }
        
    }
}

// SURNAME CODING

let surnameCallFunction = document.getElementById("surname");
surnameCallFunction.onblur = function surnameFunction(){

    let surName = document.getElementById("surname").value;
    let surNameInput = document.getElementById("surname");
    let surWarning = document.getElementById("surname_warning");
    let surNameImage = document.getElementById("surname_image");
    

    if(surName == ""){
        surNameInput.style.border = "1px solid red";
        surWarning.style.display = "block";
    }

    surnameCallFunction.onclick = function(){
        surNameImage.style.display = "block";
        surNameInput.style.border = "none";
        surWarning.style.display = "none";

        surnameCallFunction.onblur = function(){
            surNameImage.style.display = "none";
            surNameInput.style.border = "1px solid red";
            surWarning.style.display = "block";
        }
        
    }

}

// MOBILE NUMBER CODING

let mobileCallFunction = document.getElementById("email");
mobileCallFunction.onblur = function mobileFunction(){

    let mobileSelect = document.getElementById("email").value;
    let mobileSelectInput = document.getElementById("email");
    let mobileWarning = document.getElementById("mobile_warning");
    let mobileImage = document.getElementById("mobile_image");

    if(mobileSelect == ""){
        mobileSelectInput.style.border = "1px solid red";
        mobileWarning.style.display = "block";
    }

    mobileCallFunction.onclick = function(){
        mobileSelectInput.style.border = "none";
        mobileWarning.style.display = "none";
        mobileImage.style.display = "block";

        mobileCallFunction.onblur = function(){
            mobileSelectInput.style.border = "1px solid red";
            mobileWarning.style.display = "block";
            mobileImage.style.display = "none";
           
        }
    }

}

// STRONG PASSWORD ALERT

let alertCall = document.getElementById("password");
alertCall.onclick = function(){
    alert("must have a strong password \nDemo@123");
}

// PASSWORD HIDE CODING
let hideFunction = document.getElementById("eye-close");
hideFunction.onclick = function hide(){
    let closeEye = document.getElementById("eye-close");
    let openEye = document.getElementById("eye-open");
    let passwordSelect = document.getElementById("password");

   if(passwordSelect.type == "password"){
    closeEye.style.display = "none";
    openEye.style.display = "block";
    passwordSelect.type = "text";
   }

   else{

    closeEye.style.display = "block";
    openEye.style.display = "none";
    passwordSelect.type = "password";
    
   }

}

// PASSWORD SHOW CODING
let showFunction = document.getElementById("eye-open");
showFunction.onclick = function show(){
    let closeEye = document.getElementById("eye-close");
    let openEye = document.getElementById("eye-open");
    let passwordSelect = document.getElementById("password");

   if(passwordSelect.type == "text"){
    closeEye.style.display = "block";
    openEye.style.display = "none";
    passwordSelect.type = "password";
   }

   else{

    closeEye.style.display = "none";
    openEye.style.display = "block";
    passwordSelect.type = "text";
    
   }

}

// ALL INPUT VALUE PRINT

let buttonFuntion = document.getElementById("btn");
buttonFuntion.onclick = function(){
    let firstName = document.getElementById("firstname").value.toUpperCase();
    let lastName = document.getElementById("surname").value.toUpperCase();
    let mobileNumber = document.getElementById("email").value.toLowerCase();
    let newPassword = document.getElementById("password").value;

    let add ="Your Full Name:- " + firstName + " " + lastName +"<br> Your Mobile or E-mail Address:- " + mobileNumber +"<br> Your Strong Password:- " + newPassword;
    add
    document.write(add);

}

// STRONG PASSWORD REGULAR AND EXPRESSIONS VALIDATION

let rightWrongPass = document.getElementById("password");
rightWrongPass.oninput = function regExpression(){
    let forCapital = /[A-Z]/g;
    let forSmall = /[a-z]/g;
    let forSymbol = /[!@#$%^&*()]/g;
    let forNumber = /[0-9]/g;

    let inputBoxPassword = document.getElementById("password").value;
    let matchPassword = document.getElementById("invalid-password");
    let correctPass = document.getElementById("correct-password");
   
    
    
    if(inputBoxPassword.match(forCapital) && inputBoxPassword.match(forSmall) && inputBoxPassword.match(forSymbol) && inputBoxPassword.match(forNumber) ){
        matchPassword.style.display = "none";
        correctPass.style.display = "block";
    }

    else{
        matchPassword.style.display = "block";
        correctPass.style.display = "none";
       
    }

    
}