let enterName = document.getElementById("enterName");
let result = document.getElementById("result");

function signIn(){

    let enterNameInput = enterName.value; 
    let ans = "Hi " + enterNameInput + " , verifying your account...";
    result.textContent = ans;
    result.style.background = "yellow";
}


