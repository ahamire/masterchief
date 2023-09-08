const phone_number = document.getElementById('phone_number');

var password = document.getElementById("password").value;
var confirm_password = document.getElementById("confirm_password").value;
const btn = document.querySelector(".Create_account");
btn.addEventListener('click',function(){
var password = document.getElementById("password").value;
var confirm_password = document.getElementById("confirm_password").value;
if (password != confirm_password) {
    alert("Passwords do not match!");
}else if(password == ''){
        
} 
else if (password == confirm_password&&password.length>=8){
    alert("You did it"); 
    btn.type ='submit';
}});