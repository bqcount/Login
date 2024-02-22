const register = document.getElementById('register-button')
const registerRight = document.getElementById('register-button-rigth')
const loginLeft = document.getElementById('login-button-left')
const loginBoxLeft = document.getElementById('login-box-left')
const registerBoxRight = document.getElementById('register-box-right')
const imageBox = document.getElementById('image-box')
const box = document.getElementById('box')



/*loginLeft.addEventListener('click', () => {
    loginLeft.classList.add('showFalse');
    loginBoxLeft.classList.add('class','moveRight');
    const idTime =setTimeout(()=>{
        box2.classList.add('showFalse')
        box.classList.add('showTrue')
    },300)
    
});
*/


register.addEventListener('click',()=>{
  register.classList.add('showFalse');
  imageBox.classList.add('class','moveLeft')
  
  setTimeout(()=>{
      loginLeft.classList.remove('showFalse')
      
},300)
      
});

