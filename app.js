function Task(name){
    this.name = name;
    this.completed = false;
}
 const todolist = {
    tasks: [],

    addTask: function (taskName){
        const newTask = new Task(taskName);
        this.tasks.push(newTask);
        this.displayTasks();
    },

    toggleTask: function(index){
        this.tasks[index].completed = !this.tasks[index].completed;
        this.displayTasks();
    },

    displayTasks: function () {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = '';
        this.tasks.forEach((task , index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.name;
            taskItem.style.textDecoration = task.completed ? 'line-through':'none';
            taskItem.addEventListener('click',() => {
                this.toggleTask(index);
            });
            taskList.appendChild(taskItem);
        })
    }
 }

 document.getElementById('addTaskButton').addEventListener(
    'click',function(){
        const taskInput = document.getElementById('taskInput');
        const taskName = taskInput.Value.trim();
        if (taskName){
            todolist.addTask(taskName);
            taskInput.value = '';
        }
    }
 ); 