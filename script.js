'use sctrict'
const form = document.querySelector('#contactForm')
const table = document.querySelector('#table')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){    
    const contact = getData()
    console.log(contact)
    event.preventdefault() 
    createTableRowWithNewData(contact) 
}
function getData(){
    return {
        name: form.inputName.value,
        surname: form.inputSurname.value,
        phone: form.inputPhone.value
    }
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
