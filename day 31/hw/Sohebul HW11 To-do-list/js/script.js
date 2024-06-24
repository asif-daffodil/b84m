const inputBox = document.getElementById('input-box');
const todoList = document.getElementById('todo-list');
const todoapp = document.getElementById('todoapp');
function addTask() {
    if (inputBox.value === '') {
        if (!document.querySelector('#error')) {
            const div = document.createElement('div');
            div.innerHTML = 'Please write a Task First!';
            div.id = 'error';
            todoapp.insertBefore(div, todoList);
            setTimeout(() => {
                if (div.parentNode) {
                    div.classList.add('hidden');

                    setTimeout(() => {
                        if (div.parentNode) {
                            div.parentNode.removeChild(div);
                        }
                    }, 1000); // Wait for the transition (0.5s)
                }
            }, 2000); // Error message disappears after 3 seconds
        }
    }
    else {
        if (document.querySelector('#error')) {
            document.querySelector('#error').remove();
        }
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        let crossBtn = document.createElement('span');
        crossBtn.innerHTML = '&#10006;';
        li.appendChild(crossBtn);
    }
    inputBox.value = '';
    saveData();
}

todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('selected');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('todoList', todoList.innerHTML);
}

function showTask() {
    todoList.innerHTML = localStorage.getItem('todoList');
}

showTask(); 
