// alert("Hi, you're at the 'To Do List' Exercise");

//a list of 8 todos
let todos = ['JavaScript exercises', 'Coursera UX Design weekly challenge', 'GCPinas 2 quest', 'Midterm examination', 'Reply from a feedback request', 'Read more about JavaScript', 'Do some laundry', 'Prepare for an event'];

//outputs only 6 todos being 'Read more about JavaScript' as the end todo
let i = 0;
while (i < 6){
    let listTodos = document.createElement('li');
    listTodos.innerText = todos[i];
    document.querySelector('#todoList').appendChild(listTodos);
    i++;
}