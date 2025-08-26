const taskList = [
    {
        name: 'run',
        date: '11-11-11'
    },
    {
        name: 'eat',
        date: '11-11-11'
    }
];

renderTasks();

const addTaskButton = document.querySelector('.js-add-task-button')
addTaskButton.addEventListener('click', () => {
        addTask();
    })
// this will display the tasks in list at start

function addTask() {
    const inputTask = document.querySelector('.input-task');
    // taskList.push(inputTask.value);
    const inputDate = document.querySelector('.input-date');
    taskList.push({
        name: inputTask.value,
        date: inputDate.value
    });
    console.log(taskList);
    // to reset the input field
    inputTask.value = '';
    // this will display the task list everytime we add a new task
    renderTasks();
}

function renderTasks() {
    let taskListHtml = '';
    // below technique is called GENERATING THE HTML instead of writing the html we are generating it
    taskList.forEach((taskObject, index) => {
        const name = taskObject.name;
        const date = taskObject.date;
        // shortcut 
        // const {name, date} = taskObject;

        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-task-button js-delete-task-button">Delete</button>
        `;
        taskListHtml += html;
    });
    // for(let i = 0; i < taskList.length; i++) {
    //     const taskObject= taskList[i];
    //     // now the list is an object
    //     const name = taskObject.name;
    //     const date = taskObject.date;
    //     // shortcut 
    //     // const {name, date} = taskObject;

    //     const html = `
    //     <div>${name}</div>
    //     <div>${date}</div>
    //     <button onclick="
    //         taskList.splice(${i}, 1);
    //         renderTasks();
    //     " class="delete-task-button">Delete</button>
    //     `;
    //     taskListHtml += html;
    // }
    console.log(taskListHtml);
    document.querySelector('.task-list')
        .innerHTML = taskListHtml;
    document.querySelectorAll('.js-delete-task-button')
     .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            taskList.splice(index, 1);
            renderTasks();
        })
     });
}
