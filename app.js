let name1 = prompt("Enter Your name");

let phone = prompt("Enter Your phone");

let email = prompt("Enter Your email");

let password = prompt("Enter Your pass");

let conform_password = prompt("Enter Your conform_pass");


if(name1 || phone || email || password || conform_password == " "){
    alert("Please Enter The Fields")
}else{
    alert("Your Name is ${name1}, your Phone Number is ${phone}, and your Email Address is ${email}.")
}