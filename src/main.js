import './sass/main.scss'
import feather from 'feather-icons'
import { task } from './task'
const data = []
const containerTasks = document.querySelector('#container_tasks')
const category = document.querySelector('#category')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const addTask = document.querySelector('#add_task')
addTask.addEventListener('click', () => {
    data.push({
        category: category.value,
        title: title.value,
        description: description.value
    })
    data.map((item) => {
        containerTasks.appendChild(task({ title: item.title, description: item.description, action: () => console.log('Hola!') }))
    })
    feather.replace()
})
