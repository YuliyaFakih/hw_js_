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
        let email1 = document.getElementById('email1')
        let pass1 = document.getElementById('pass1')
        let pass2 = document.getElementById('pass2')
        

        document.querySelector('.signIn2').addEventListener('click', function() {
            // с проверкой по регулярке выбивает ошибку(undefined)
            /*let emailCheck = function (email1, pass1) {
                let regexpEmail = /^[a-z]{2,15}[0-9]{0,5}@[a-z_.-]{1,10}\.[a-z]{2,11}/;
                let regexpPass = /[a-z0-9]{6-15}/;
               //console.log(regexpEmail.test(email1))
               if(regexpPass.test(pass1) === true && regexpEmail.test(email1) === true) {
                alert(`You've completed the form`)
               }
            }
            emailCheck(email1, pass1)
            */

                            if(pass1.value !== pass2.value) {  
                
                                alert('Please verify your password')
                                email1.innerHTML = ''
                                pass1.innerHTML = ''
                                pass2.innerHTML = ''
                            } else if (Arr.find(currentUser => currentUser.email1 === Arr[email1])) {  //на второй попытке выдаёт ошибку о повторных данных,неважно что вводить
                                    alert(`You've already created an account, you should use it`)
                                    //this.showAuthPage()            // не перенаправляет на главную страницу, ошибка
                            } else if(email1 != '' && pass1 != '') {
                            
                                alert(`You've completed the form`)
                                let user1 = {
                                    email: email1.value,
                                    pass: pass1.value
                                }
                                Arr.push(user1)
                            } 
                            console.log(Arr)

                            /*
                            let Arr2 = Array.from(new Set(Arr));
                            console.table(Arr2);
                            */
        })
    }

    this.auth = function() {
        let email = document.getElementById('email').value
        let pass = document.getElementById('pass').value
        document.querySelector('.LogIn').addEventListener('click', function() {
       /* if (Arr.includes(email) == true && Arr.includes(pass) == true) {
            alert(`You've logged in`)
        } else if(email == '' || pass == '' || Arr.includes(email) == false || Arr.includes(pass) == false) {
            alert(`Please verify your authentication  data`)
        }
        */

        //в консоли можно посмотреть email.value и pass.value, введённые на странице входа, но функция не работает
        //if (Arr.find(currentUser => currentUser.email.value === Arr[email] && currentUser.pass.value === Arr[pass]))
        if (email.value == Arr[0]["email"] && pass.value == Arr[0]["pass"]) {
           alert(`You've logged in`)
        } else {
            alert('Please verify data');
        }
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
    show.auth()
})

let authRedirect = document.getElementById('auth_redirect')
authRedirect.addEventListener('click', function() {
    show.showAuthPage()
    show.auth()
})

let regRedirect = document.getElementById('reg_redirect')
regRedirect.addEventListener('click', function() {
    show.showRegistrationPage()
    show.registration()
})

show.showMainPage()
