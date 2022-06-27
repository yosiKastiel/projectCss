const uname = document.getElementById('uname');
const text = document.getElementById('text');
const uname2 = document.getElementById('ulastName');
const uemail = document.getElementById('uemail');
const error = document.querySelector('.error');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');
// const btn = document.querySelector('input[type=button]');
const btn = document.getElementById('btn1');

btn.addEventListener('click', function () {

    if (text.value == '') {
        error3.innerHTML = '*Please enter your feedback';
        text.style.border = '3px solid red';
        text.focus();
    } else if (text.value !== '') {
        error3.innerHTML = 'Here All is Good!';
        text.style.border = 'none';
    }
    if (uemail.value === '' || uemail.value.indexOf('@') == -1 || uemail.value.indexOf('.') == -1) {
        error2.innerHTML = '*please enter Email';
        uemail.style.border = '3px solid red';
        uemail.focus();

    } else if (uemail.value !== '' && uemail.value.indexOf('@') !== -1 && uemail.value.indexOf('.') !== -1) {
        error2.innerHTML = 'Here All is Good!';
        uemail.style.border = 'none';
    }
    if (uname2.value == '') {
        error1.innerHTML = '*please enter Last Name';
        uname2.style.border = '3px solid red';
        uname2.focus();
    } else if (uname2.value !== '') {
        error1.innerHTML = 'Here All is Good!';
        uname2.style.border = 'none';

    }
    if (uname.value == '') {
        error.innerHTML = '*please enter First Name ';
        uname.style.border = '3px solid red';
        uname.focus();
    } else if (uname.value !== '') {
        error.innerHTML = 'Here All is Good!';
        uname.style.border = 'none';
        // error.style.color = 'black';
    }


})