const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnloginPopup = document.querySelector('.btnlogin-popup');
// const btnregisterPopup = document.querySelector('.btnregister-popup');
const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click',()=> {

    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=> {

    wrapper.classList.remove('active');
});

btnloginPopup.addEventListener('click',()=> {

    wrapper.classList.add('active-popup');
});

// btnregisterPopup.addEventListener('click',()=> {

//     wrapper.classList.add('active register-link');
// });

iconclose.addEventListener('click',()=> {

    wrapper.classList.remove('active-popup');
});





