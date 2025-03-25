function generatePassword(length = 12){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]";
    let password = "";
    for (let i = 0; i < length; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

function generateAndDisplayPassword(){
    const password = generatePassword();
    document.getElementById("password").value = password;
}
