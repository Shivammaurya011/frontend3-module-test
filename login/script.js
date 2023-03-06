function handleLogin(){
    var currProfile = new Array();
    var loginEmail = document.getElementById('email').value;
    var loginPassword = document.getElementById('password').value;
    var keys;
    var confirmData = new Array();
    confirmData=JSON.parse(localStorage.getItem("userData"))?JSON.parse(localStorage.getItem("userData")):[]
    if(confirmData.some((v)=>{return v.email == loginEmail && v.password==loginPassword})){
        for(var i in confirmData){
            if(JSON.parse(localStorage.getItem('userData'))[i].email){
                keys=i;
            }
        }
        currProfile.push(
            {
                'id': keys,
                'firstName': JSON.parse(localStorage.getItem('userData'))[keys].firstName,
                'lastName': JSON.parse(localStorage.getItem('userData'))[keys].lastName,
                'email': JSON.parse(localStorage.getItem('userData'))[keys].email,
                'password': JSON.parse(localStorage.getItem('userData'))[keys].password
            }
        )
        localStorage.setItem("currProfile",JSON.stringify(currProfile));
        alert("Login...")
        window.location.href = '/shop';
    }
    else{
        alert("Login fail")
    }
}