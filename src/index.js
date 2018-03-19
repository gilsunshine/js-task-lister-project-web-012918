document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM content has loaded");
  // your code here ....

  let listForm = document.getElementById('create-list-form')

  listForm.addEventListener('submit', function(event){
    event.preventDefault()

    let inputText = document.getElementById('new-list-title')
    addList(inputText.value)
    inputText.value = ""
  })

  function addList(name){
    const lists = document.getElementById('lists')
    const list = document.createElement('div')
    const title = document.createElement('h2')
    const del = document.createElement('button')
    const listList = document.getElementById('parent-list')
    del.innerText = "X"
    list.append(del)
    del.addEventListener('click', function(event){
      event.preventDefault()
      list.remove()
      option.remove()
      if (lists.childElementCount === 0){
        const taskAdd = document.getElementById('create-task-form')
        taskAdd.setAttribute("style", "display: none")
      }
    })
    title.innerText = name
    list.append(title)
    list.setAttribute("id", title.innerText)
    lists.append(list)
    const taskAdd = document.getElementById('create-task-form')
    taskAdd.setAttribute("style", "display: block")
    const option = document.createElement('option')
    option.innerText = title.innerText
    listList.add(option)
  }

  let taskForm = document.getElementById('create-task-form')

  taskForm.addEventListener('submit', function(event){
    event.preventDefault()

    let inputList = document.getElementById('parent-list')
    addTask(inputList.value)
  })

  function addTask(title){
    const list = document.getElementById(title)
    const description = document.getElementById('new-task-description')
    const priority = document.getElementById('new-task-priority')
    const task = document.createElement('p')
    if (priority.value === ""){
      priority.value = "low"
    }
    if (description.value !== ""){
      task.innerText = `Task: ${description.value}
      Priority: ${priority.value}`
      list.append(task)
      let lineBreak = document.createElement('hr')
      list.append(lineBreak)
    }
    priority.value = ""
    description.value = ""
  }
});
