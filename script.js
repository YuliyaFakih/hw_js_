const mainPage = document.querySelector('.main_page')
const authPage = document.querySelector('.auth_page')
const RegPage = document.querySelector('.registration_page')

let showPages = function() {
    const Arr = [];
    this.showMainPage = function () {
        //authPage.style.display = 'none'
        //RegPage.style.display = 'none'
        mainPage.classList.add('showPage')
        authPage.classList.remove('showPage')
        RegPage.classList.remove('showPage')
    }
    this.showAuthPage = function () {
        //mainPage.style.display = 'none'
        //RegPage.style.display = 'none'
        mainPage.classList.remove('showPage')
        authPage.classList.add('showPage')
        RegPage.classList.remove('showPage')
    }
    this.showRegistrationPage = function () {
        //mainPage.style.display = 'none'
        //authPage.style.display = 'none'
        mainPage.classList.remove('showPage')
        authPage.classList.remove('showPage')
        RegPage.classList.add('showPage')
    }

    this.registration = function() {
        const email1 = document.getElementById(email1).value
        const pass1 = document.getElementById(pass1).value
        const user1 = {
            email: email1,
            pass: pass1
        }
        Arr.push(user1)
        if (Arr.includes(email1) == true) {
            alert(`You've already created an account, you should use it`)
        }
        console.log(Arr)
        this.showAuthPage()
    }

    this.auth = function() {
        const email = document.getElementById(email).value
        const pass = document.getElementById(pass).value
        if (Arr.includes(email) == true && Arr.includes(pass) == true) {
            alert(`You've logged in`)
        }
    }

}

let show = new showPages();


let signIn = document.querySelector('.signIn')
signIn.addEventListener('click', function () {
    show.showRegistrationPage()
})

let LogIn =  document.querySelector('.LogIn')
LogIn.addEventListener('click', function () {
    show.showAuthPage()
})

let authRedirect = document.getElementById('auth_redirect')
authRedirect.addEventListener('click', function() {
    show.showAuthPage()
})

let regRedirect = document.getElementById('reg_redirect')
regRedirect.addEventListener('click', function() {
    show.showRegistrationPage()
})

show.showMainPage()