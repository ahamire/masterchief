class data {
    constructor(){
        this.phone_number = document.getElementById('phone_number');
        this.btn = document.querySelector(".Create_account");
    
    }
}
function ekd(nd){
nd.btn.addEventListener('click',function(){
    var password = document.getElementById("confirm_password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    if (password != confirm_password) {
            alert("Passwords do not match!");
    }else if(password == ''){
            
    } 
    else if (password == confirm_password&&password.length>=8){
        alert("You did it"); 
        nd.btn.type ='submit';
    }
});
}
const newdata = new data();
ekd(newdata);