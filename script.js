const mainPage = document.querySelector('.main_page')
const authPage = document.querySelector('.auth_page')
const RegPage = document.querySelector('.registration_page')
const Arr = [];

let showPages = function() {
    
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
        let email1 = document.getElementById('email1').value
        let pass1 = document.getElementById('pass1').value
        let pass2 = document.getElementById('pass2').value
        let user1 = {
            email: email1,
            pass: pass1
        }

        document.querySelector('.signIn2').addEventListener('click', function() {
            Arr.push(user1)
            if (Arr.find(email1) == true) {
                    alert(`You've already created an account, you should use it`)
                    this.showAuthPage()
            } else if(email1 != '' && pass1 != '' && pass2 != '') {
                alert(`You've completed the form`)
            } else if(pass1 !== pass2) {        //не проверяет пароли на идентичность
                alert('Please verify your password')
                email1.innerHTML = ''
                pass1.innerHTML = ''
                pass2.innerHTML = ''
            }
            console.log(Arr)
        })
    }

    this.auth = function() {
        const email = document.getElementById('email').value
        const pass = document.getElementById('pass').value
        document.querySelector('.LogIn').addEventListener('click', function() {
       /* if (Arr.includes(email) == true && Arr.includes(pass) == true) {
            alert(`You've logged in`)
        } else if(email == '' || pass == '' || Arr.includes(email) == false || Arr.includes(pass) == false) {
            alert(`Please verify your authentication  data`)
        }
        */
       const user1 = Arr.find(currentUser => currentUser.email1 === email)
           if(user1.pass1 = pass) alert(`You've logged in`)
        })
    }

}

let show = new showPages();

let signIn = document.querySelector('.signIn')
signIn.addEventListener('click', function () {
    show.showRegistrationPage()
    show.registration()
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
