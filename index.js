const form = document.getElementById("form");
const email = document.getElementById("email-field");
const btn = document.getElementById("submit");
const text = document.getElementById("textField");
let regExp = /^[^]+@[^]+\.[a-z]{2,3}$/ ;



function check(){

    if (email.value.match(regExp)){
        text.innerHTML = "Your Email Address is Valid.";
        text.style.color = "green"
    }
    else{
        text.innerHTML = "Check your email please";
        text.style.color = "hsl(0, 100%, 63%)";
        email.style.borderColor= "1px solid hsl(0, 100%, 63%)";
        setTimeout(function(){
             text.innerHTML = " ";
        },8000);
    }
    
}

