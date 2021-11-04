import { throttle } from "lodash";

const form = document.querySelector(".feedback-form")

const LOCALSTORAGE_KEY = "feedback-form-state";
let obj = {}

form.addEventListener('input', throttle(event => {
    let filters = localStorage.getItem(LOCALSTORAGE_KEY);
    filters = filters ? JSON.parse(filters) : {};
    filters[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filters));
},500))

form.addEventListener('submit', event => {
    event.preventDefault();

      const formElem = event.target.elements;
  const email = formElem.email.value;
  const message = formElem.message.value;
//   if (email === '' || message === '') {
//     return 
//   }
  obj = {
    email,
    message,
  };
  console.log(obj);
 
    localStorage.removeItem(LOCALSTORAGE_KEY)
    form.reset()
})
console.log()

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