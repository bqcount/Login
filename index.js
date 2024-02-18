const register = document.getElementById('register-button')
const login = document.getElementById('login-button')
const registerLeft = document.getElementById('register-button')
const loginRight = document.getElementById('register-button')


login.addEventListener('click',()=>{
    
    document.getElementById('login-box').classList.add('active');
    document.getElementById('register-box').classList.remove('active');
})

register.addEventListener('click',()=>{
    document.getElementById('box').classList.remove('active');
    document.getElementById('box2').classList.add('active');
      
})

