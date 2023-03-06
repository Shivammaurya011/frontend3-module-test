function handleSignup() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    let passw = /^(?=.*[0-4])(?=.*[!@#$*])[a-zA-Z0-4!@#$*]{8,17}$/;
    var userData = new Array();
    var check = false;

    if(firstName.length>2 && firstName.length<15){
        check = true;
    }
    else{
        document.getElementById('ifname').innerText='Plese Enter Valid First Name';
        check=false;
    }
    if(lastName.length>2 && lastName.length<15){
        check = true;
    }
    else{
        document.getElementById('ilname').innerText='Plese Enter Valid Last Name';
        check=false;
    }
    if(email.includes("@") && email.includes(".") && email.indexOf("@") > 0 && !email.startsWith(" ") && email.lastIndexOf(".") < email.length - 2){
        check=true;
    }
    else{
        document.getElementById('iemail').innerText='Plese Enter Valid Email';
        check=false;
    }
    if(password.match(passw)){
        check=true;
    }
    else{
        document.getElementById('ipassword').innerText='Plese Enter Valid Password';
        check=false;
    }
    if(password === cpassword && password !=null && password != ""){
        check=true;
    }
    else{
        document.getElementById('icpassword').innerText='Plese Enter Valid Confirm Password';
        check=false;
    }
    if(check){
        userData=JSON.parse(localStorage.getItem("userData"))?JSON.parse(localStorage.getItem("userData")):[]
        if(userData.some((v)=>{return v.email==email})){
            alert('This mail id alredy Registered')
        }
        else{
            userData.push(
            {
                "firstName":firstName,
                "lastName":lastName,
                "email":email,
                "password":password
            }
        )
        localStorage.setItem("userData",JSON.stringify(userData));
        alert('Signup Succesfully, Plese Login...')
        window.location.href = '/login';
        }
    }
    else{
        alert('Plese fill Correct Details')
    }
}