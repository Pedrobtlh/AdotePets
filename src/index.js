const buttonCat = document.getElementById('buttonCat')
const buttonDog = document.getElementById('buttonDog')
const form = document.getElementById('custom-form')
const form1 = document.getElementById('custom-form1')


function alertacat(){

    const emailCat = document.getElementById('emailCat')
    const nomeCat = document.getElementById('nomeCat')

    const emailCatValue = emailCat.value
    const nameCatValue = nomeCat.value


    form.innerHTML += `<div class="alert alert-primary" role="alert"> Olá ${nameCatValue}, entraremos em Contato pelo Email <br> ${emailCatValue} </div>`
    console.log(nomeCat)
    console.log(emailCat)
}


function alertadog(){
    const emailDog = document.getElementById('emailDog')
    const nomeDog = document.getElementById('nomeDog')

    const emailDogValue = emailDog.value
    const nameDogValue = nomeDog.value


    form1.innerHTML += `<div class="alert alert-primary" role="alert"> Olá ${nameDogValue}, entraremos em Contato pelo Email <br> ${emailDogValue} </div>`
    console.log(nomeCat)
    console.log(emailCat)
}

buttonCat.addEventListener('click', alertacat)
buttonDog.addEventListener('click', alertadog )