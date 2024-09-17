const passwordConfirmFld = document.getElementById('passwordConfirmFld');
const passwordFld = document.getElementById('passwordFld');

passwordConfirmFld.addEventListener('input', function(){
    let password = passwordFld.value;
    let passwordConfirm = passwordConfirmFld.value;

    if(password.length <= passwordConfirm.length && password.length > 0){
        if(password === passwordConfirm){
            passwordFld.style.borderColor = '#2ecc71';
            passwordConfirmFld.style.borderColor = '#2ecc71';
        }
        else{
            passwordFld.style.borderColor = '#e74c3c';
            passwordConfirmFld.style.borderColor = '#e74c3c';
        }
    }
    else{
        passwordFld.style.borderColor = '#ccc';
        passwordConfirmFld.style.borderColor = '#ccc';
    }
});

function checkPassword(attribute){
    if (passwordFld.type === 'password') {
        passwordFld.type = 'text';
        attribute.src = attribute.getAttribute('data-hide-src');
    } else {
        passwordFld.type = 'password';
        attribute.src = attribute.getAttribute('data-show-src');
    }
}

function checkPassword2(attribute){
    if (passwordConfirmFld.type === 'password') {
        passwordConfirmFld.type = 'text';
        attribute.src = attribute.getAttribute('data-hide-src');
    } else {
        passwordConfirmFld.type = 'password';
        attribute.src = attribute.getAttribute('data-show-src');
    }
}