let elInp = document.querySelector('.inp')
let elList = document.querySelector('.list')
let elEmail = document.querySelector('.inp__email')
let elNameTit = document.querySelector('.list__name')
let elEmailTit = document.querySelector('.list__email')
// name and email


let users = []
let email = []
if(window.localStorage.getItem('users')){
    users = JSON.parse(window.localStorage.getItem('users'))
    elNameTit.textContent = 'names'
}

if(window.localStorage.getItem('email')){
    email = JSON.parse(window.localStorage.getItem('email'))
    elEmailTit.textContent = 'email '
}

function adding(){
    users.push(elInp.value);
    window.localStorage.setItem('users', JSON.stringify(users))
    elInp.value = ''
    elInp.focus()

    email.push(elEmail.value);
    window.localStorage.setItem('email', JSON.stringify(email))
    elEmail.value = ''
    // elEmail.focus()
    mapper()
}

function mapper(){
    let count = 1
    elList.innerHTML = ''
    count.innerHTML =''
    
    let data = JSON.parse(window.localStorage.getItem('users'))
    let email_d = JSON.parse(window.localStorage.getItem('email'))
    data.forEach((item_n, index)=>{
        let newLi = document.createElement('li')
        let newP1 = document.createElement('p')
        let newP2 = document.createElement('p')
        newP1.textContent = count+ '. ' + item_n
        newP2.textContent = email_d[index]
        count = count+1
        newLi.appendChild(newP1)
        newLi.appendChild(newP2)
        elList.appendChild(newLi)
    })


    // let counts = 1
    elEmail.innerHTML = ''
    count.innerHTML =''
    


}

if (window.localStorage.getItem('users') && window.localStorage.getItem('email')){
    mapper()
}

