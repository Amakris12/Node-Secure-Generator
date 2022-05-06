const passwordList = document.getElementById('pass-list')

function create(){
    var saved = [];
    let company = document.getElementById("company").value;
    let password = document.getElementById("password").value;
    saved.push([company, password]);
    console.log(saved)
    const newPass = `<li>Company Name: ${company}</br> Password: ${password}</li> <hr>`
    passwordList.innerHTML += newPass;
}