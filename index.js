const register = document.getElementById('register-button')
const login = document.getElementById('login-button')
const registerRight = document.getElementById('register-button-rigth')
const loginLeft = document.getElementById('login-button-left')
const loginBoxLeft = document.getElementById('login-box-left')
const registerBoxRight = document.getElementById('register-box-right')
const box = document.getElementById('box')
const box2 = document.getElementById('box2')
const positionLoginBoxLeft = loginBoxLeft.style.left


loginLeft.addEventListener('click', () => {
    loginLeft.classList.add('showFalse');
    loginBoxLeft.classList.add('class','moveRight');
    const idTime =setTimeout(()=>{
        box2.classList.add('showFalse')
        box.classList.add('showTrue')
    },300)
    
});



register.addEventListener('click',()=>{
  register.classList.add('showFalse');
  registerBoxRight.classList.add('class','moveLeft')
  setTimeout(()=>{
      box.classList.add('showFalse')
      box2.classList.add('showTrue')
},300)
      
});

