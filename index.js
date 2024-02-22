const register = document.getElementById('register-button')
const loginLeft = document.getElementById('login-button-left')
const imageBox = document.getElementById('image-box')
const box = document.getElementById('box')



loginLeft.addEventListener('click', () => {
    loginLeft.classList.add('showFalse');
    imageBox.classList.remove('class', 'moveLeft');
    imageBox.classList.add('class', 'moveRight');
    setTimeout(() => {
        register.classList.remove('showFalse')

    }, 300)

});



register.addEventListener('click', () => {
    register.classList.add('showFalse');
    imageBox.classList.remove('class', 'moveRight');
    imageBox.classList.add('class', 'moveLeft')

    setTimeout(() => {
        loginLeft.classList.remove('showFalse')

    }, 300)

});

