import { throttle } from 'lodash';
const form = document.querySelector(".feedback-form");
const selectedFilter = {}

form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(form)
    formData.forEach((name, value) => { name, value })
    localStorage.removeItem('feedback-form-state')
    form.reset()
})

form.addEventListener('input',throttle(event => {
    selectedFilter[event.target.name] = event.target.value
    localStorage.setItem('feedback-form-state', JSON.stringify(selectedFilter))
},500))

function onForm() {
    let getStorege = localStorage.getItem('feedback-form-state')
    if (getStorege) {
        getStorege = JSON.parse(getStorege)
    }
    Object.entries(getStorege).forEach(([name,value]) => {
        selectedFilter[name]= value
        form.elements[name].value = value
     })
}

onForm()