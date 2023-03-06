document.getElementById('fname').value=`${JSON.parse(localStorage.getItem('currProfile'))[0].firstName}`
document.getElementById('lname').value=`${JSON.parse(localStorage.getItem('currProfile'))[0].lastName}`
let id = JSON.parse(localStorage.getItem('currProfile'))[0].id;


function saveInfo(){
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const opassword = document.getElementById('oPassword').value;
    const npassword = document.getElementById('npassword').value;
    const cpassword = document.getElementById('cpassword').value;
    let passw = /^(?=.*[0-4])(?=.*[!@#$*])[a-zA-Z0-4!@#$*]{8,17}$/;
    
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
    if(opassword == JSON.parse(localStorage.getItem('userData'))[id].password){
        check=true;
    }
    else{
        document.getElementById('iOldPass').innerText='Plese Enter Valid Password';
        check=false;
    }
    if(npassword.match(passw)){
        check=true;
    }
    else{
        document.getElementById('inpassword').innerText='Plese Enter Valid Password';
        check=false;
    }
    if(npassword === cpassword && npassword !=null && npassword != ""){
        check=true;
    }
    else{
        document.getElementById('icpassword').innerText='Plese Enter Valid Confirm Password';
        check=false;
    }
    if(check){
        console.log(JSON.parse(localStorage.getItem('currProfile'))[0].firstName)
        // JSON.parse(localStorage.setItem('userData',firstName))[id].firstName
        // JSON.parse(localStorage.setItem('userData',lastName))[id].lastName
        // JSON.parse(localStorage.setItem('userData',npassword))[id].password
        alert("Updated Data Save Succesfully");
    }
    else{
        alert('Plese fill Correct Details')
    }
}

function handleLogout(){
    localStorage.removeItem('currProfile')
    alert("Logout Succesfully");
    location.href='/login';
}