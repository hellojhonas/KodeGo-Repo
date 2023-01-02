window.onload = function () {
    let todos = [];
    init();

    function init() {
        todos = JSON.parse(localStorage.getItem('todos')) || [];
        renderItems();
        bindInputEvents();
    }

    function bindInputEvents() {
        document.getElementById('to-do-input').addEventListener('keypress', function (event) {
            let task = this.value;
            if (event.key === 'Enter') {
                createTodo(task);
                syncLocalStorage();
                renderItems();
                this.value = '';
                reloadPage();
            }
        });
    }

    function createTodo(task) {
        // console.log(task);
        todos.push({
            id: todos.length,
            task: task,
            done: false
        });
    }

    function syncLocalStorage() {
        console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderItems() {
        let pEl = document.getElementById('todo-tasks-list');
        pEl.innerHTML = '';
        let list = `
        <li class="todo-item">
            <label class="control--checkbox">
                <strong>Modify the "Your To Do List" and Add an Edit Feature to
                Modify the task name that are not yet marked as "Done" </strong>
                <input data-id="0" type="checkbox" disabled>
                    <div class="checked-icon"></div>
            </label>
        </li>`;
        for (var i = 0; i < todos.length; i++) {
            var item = createItemTemplate(todos[i]);
            list += item;
        }
        pEl.innerHTML = list;

        document.querySelectorAll('#todo-tasks-list li input').forEach(function (item) {
            item.addEventListener('click', function (event) {
                let dataId = item.getAttribute('data-id');

                if (item.getAttribute('checked')) {
                    item.setAttribute('checked', false);
                    updateItem(dataId, false);
                } else {
                    item.setAttribute('checked', true);
                    updateItem(dataId, true);
                }
                syncLocalStorage();
                renderItems();
                reloadPage();
            })
        });
    }
    
    document.querySelectorAll('#todo-tasks-list li button.remove-todo-btn').forEach(function (item) {
        item.addEventListener('click', function (event) {
            let dataId = item.getAttribute('data-id');
            removeItem(dataId);
            syncLocalStorage();
            renderItems();
            reloadPage();
        });

    });

    // Add an Edit Feature to Modify the task name that are not yet marked as "Done"
    document.querySelectorAll('#todo-tasks-list li button.edit-todo-btn').forEach(function (item) {
        item.addEventListener('click', function (event) {
            let dataId = item.getAttribute('data-id');
            let taskInput = prompt('Please enter new task:');
            if (taskInput) {
                updateItemTask(dataId, taskInput);
                syncLocalStorage();
                renderItems();
                reloadPage();
            }
        });
    });

    function updateItemTask(id, task) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id == id && todos[i].done == false) {
                todos[i].task = task;
                break;
            }
        }
    }

    function createItemTemplate(todo) {
        var item = '<li class="todo-item ' + (todo.done ? 'done' : '') + '">';        
        item += '<label class="control--checkbox">';
        item += todo.task;
        item += '<input data-id="' + todo.id + '" type="checkbox" ' + (todo.done ? 'checked' : '') + ' />';
        item += '<div class="checked-icon"></div>';
        item += '</label>';
        item += '<button data-id="' + todo.id + '" class="btn edit-todo-btn"><i class="bi bi-pencil-square">Edit</i></button>';
        item += '<button data-id="' + todo.id + '" class="btn remove-todo-btn"><i class="bi bi-trash3">Delete</i></button>';
        item += '</li>';
        return item;
    }

    function updateItem(id, isDone) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                todos[i].done = isDone;
                break;
            }
        }
    }

    function removeItem(id) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                todos.splice(i, 1);
            }
        }
    }

    function reloadPage() {
        window.location.reload();
    }

};