let modal = document.querySelector(".modal")
let openModal = document.querySelector(".person-add-btn button")
let closeModal = document.querySelector(".close-btn")
let typePositionAdd = document.querySelector(".type-position-select")
let typePositionSelect =document.querySelector("#typePosition")
let personForm = document.querySelector(".person-form")
let personsRow = document.querySelector(".table tbody")

let localPerson = localStorage.getItem("persons")
let persons = JSON.parse(localPerson) || []

let selected = null

openModal.addEventListener("click" , ()=>{
  personForm.elements.firstname.value = ""
  personForm.elements.lastname.value = ""
  personForm.elements.addres.value = ""
  personForm.elements.birdthdate.value = ""
  personForm.elements.salary.value = ""
  personForm.elements.checkbox.checked,
  modal.classList.add("modal-show")
})

closeModal.addEventListener("click" , ()=>{
  modal.classList.remove("modal-show")
})

typePositionSelect.innerHTML = "<option>All</option>"



typePosition.map((el)=>{
typePositionSelect.innerHTML += `<option>${el}</option>`
typePositionAdd.innerHTML += `<option>${el}</option>`
})


personForm.addEventListener("submit" , function(e){
  e.preventDefault()

  if (this.checkValidity()) {
    let person = {
    firstName : this.elements.firstname.value,
    lastName : this.elements.lastname.value,
    addres : this.elements.addres.value,
    birdthdate : this.elements.birdthdate.value,
    position : this.elements.position.value,
    typeposition : this.elements.typeposition.value ,
    salary : this.elements.salary.value ,
    checkbox : this.elements.checkbox.checked,
    }

    persons.push(person)
    localStorage.setItem("persons" ,JSON.stringify(persons))
    getPerson()
    modal.classList.remove("modal-show")
  }
})



function getPersonsRow(el , i){
  return `
  <tr>
    <td>${i+1}</td>
    <td>${el.firstName}</td>
    <td>${el.lastName}</td>
    <td>${el.addres}</td>
    <td>${el.birdthdate}</td>
    <td>${el.position}</td>
    <td>${el.typePosition}</td>
    <td>${el.salary}</td>
    <td>${el.checkbox}</td>
    <td>
    <button onclick="deletePerson(${i})">Delete</button>
    <button onclick="editPerson(${i})">Edit</button>
    </td>
  </tr>
  `
}


function getPerson() {
  personsRow.innerHTML = ""
  persons.map((el , i)=>{
    personsRow.innerHTML += getPersonsRow(el , i)
  })
}

getPerson()



function deletePerson(i){
  let deletePerson = confirm("bu personni ochirasizmi?")
  if (deletePerson) {
    persons.splice(i,1)
    localStorage.setItem("persons" ,JSON.stringify(persons))
    getPerson()
  }
}


function editPerson(i) {
  selected = i
  let person = persons[i]
} 
