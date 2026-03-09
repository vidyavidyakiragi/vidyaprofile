function toggleMenu(){
document
.getElementById("sidebar")
.classList.toggle("active");
}

function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name=="" || email==""){
alert("Fill all fields");
return false;
}

alert("Message Sent");
return true;
}