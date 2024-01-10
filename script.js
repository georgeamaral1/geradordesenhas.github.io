function generatePassword() {
    var length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&()_+-={}[]|?/><;:",
        password = "",
        isSecure = false;
  
    while (!isSecure) {
        password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        var result = zxcvbn(password);
        if (result.score >= 1) {
            isSecure = valida(password);
            if(isSecure){
                document.getElementById("password").value = password
            }
            
        }
    }
  
    return password;
 }
  
 function validatePassword() {
    const password = document.getElementById('newpassword')?.value;
    var regExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&()_+={}\[\]|?/><;:,\\s-]).{12,}$/;
  
    if (regExp.test(password)) {
        alert("Senha válida.")
        console.log(true)
        return true;
    } else {
        alert("Senha inválida, não atende aos requisitos mínimos.")
        console.log(false)
        return false;
    }
}

function valida(password){    
    
    var regExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&()_+={}\[\]|?/><;:,\\s-]).{12,}$/;
  
    if (regExp.test(password)) {
        return true;
    } else {
        return false;
    }
};