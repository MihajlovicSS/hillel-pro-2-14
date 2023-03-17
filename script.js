'use strict'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_CONTACT_ROW = '.main-table__tr'
const form = document.querySelector('#contactForm')
const table = document.querySelector('#table')

form.addEventListener('submit', onFormSubmit)
table.addEventListener('click', onTableContactClick)
inputName.focus()

function onFormSubmit(e){
    e.preventDefault()
    const contact = getData()
    clearInputs()
    inputName.focus()
    if(!isDataValid(contact)){
        showError()
        return
    }  
    createTableRowWithNewData(contact) 
}
function onTableContactClick(e){
    const target = e.target
    const contactRow = findContactRow(target)
    if(contactRow.style.backgroundColor === 'white'){
        contactRow.style.backgroundColor = 'green'
    }
    else{
        contactRow.style.backgroundColor = 'white'
    }
    if(target.classList.contains(CLASS_DELETE_BTN)) contactRow.remove()
}
function findContactRow(element){
    return element.closest(CLASS_CONTACT_ROW)
}
function getData(){
    return {
        name: form.inputName.value,
        surname: form.inputSurname.value,
        phone: form.inputPhone.value
    }
}
function isDataValid(data){
    return isValidName(data.name) && isValidName(data.surname) && isNumber(data.phone)
}
function createTableRowWithNewData(data){
    const HTMLTemplate = `
    <tr class='main-table__tr'>
        <td class="main-table__td">
            <span>${data.name}</span>
        </td>
        <td class="main-table__td">
            <span>${data.surname}</span>
        </td>
        <td class="main-table__td">
            <span>${data.phone}</span>
        </td>
        <td>
            <span>
                <button type="button" class="deleteBtn">Delete</button>
            </span>
        </td>
    </tr>
    `
    table.insertAdjacentHTML('beforeend', HTMLTemplate)
}

function clearInputs(){
    form.reset()
}
function showError(){
    alert('Введенные данные не валидны!')
}
function isNotEmpty (value){
    return value.trim()
}
function isNumber (value){
    return !isNaN(value) && isNotEmpty(value)
}
function isValidName (value){
    return isNotEmpty(value) && !isNumber(value)
}
