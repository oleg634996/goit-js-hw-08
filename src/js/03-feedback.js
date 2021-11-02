import { throttle } from "lodash";

const form = document.querySelector(".feedback-form");


const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form)
    formData.forEach((value, name) => {
        console.log(name, value)
    })
    localStorage.removeItem(LOCALSTORAGE_KEY)
    form.reset()
  
})

 
form.addEventListener('input', throttle(event => {
    let filters = localStorage.getItem(LOCALSTORAGE_KEY);
    filters = filters ? JSON.parse(filters) : {};
    filters[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filters));
},500))

function onForm() {
     let filters = localStorage.getItem(LOCALSTORAGE_KEY);
    if (filters) {
        filters = JSON.parse(filters);
        
    Object.entries(filters).forEach(([name, value]) => {
        form.elements[name].value = value;
        })
    }
}
onForm()