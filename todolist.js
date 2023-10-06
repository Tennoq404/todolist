 encrytion()
  let list = localStorage.getItem('list')
const todoList = [{
    name :'make dinner',
    dueDate:'2023-12-22',
    time : '9:00'
}
     
     ]
renderTodoList()

function renderTodoList() {



let todoListHTML = ''


for (let i = 0 ; i < todoList.length ; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const time = todoObject.time
  

    const html = `
    <div>${name}</div>
    <div>${time}</div>
    <div>${dueDate}</div>
   
    
     <button onclick = "
     todoList.splice(${i},1,);
     renderTodoList()
     "
    class= "delete-todo-button" >Delete</button>
    </p>`
    todoListHTML += html;
}
console.log(todoListHTML);
// this is an  array.. when we click the button we want to get a value from our textbox


document.querySelector('.js-todo-list')
.innerHTML = todoListHTML
}
localStorage.setItem('list',JSON.stringify(html))





function addTodo () {
    //create a function called addTodo 
 const inputElement= document.querySelector('.js-name-input') 
 //creates a variable, get a class with the document.quereyselector and stores it
 const name = inputElement.value
// storing the value of the element in a variable
const timeElement = document.querySelector('.js-time-input')
const time = timeElement.value


const dateInputElement = document.querySelector('.js-due-date-input')
const dueDate = dateInputElement.value

 
 todoList.push({
    name: name,
    dueDate : dueDate,
    time : time
    
});
 //pushs or add name to the todo list array
 console.log(todoList)
 //consoles the todolist 
 inputElement.value = '';
 renderTodoList();
}
function encrytion () {
    password1 = prompt('hey... whats the password?')
 if (password1 === 'maxwell') {

 }
 else{
    document.body.innerHTML = 'you cannot access this website'
 }

}
