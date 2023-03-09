const input = document.querySelector(".text-input")
const inputs = document.querySelector(".text-bt")
const btn = document.querySelector(".add-btn")
const ul = document.querySelector(".ul")
const h4 = document.querySelector(".err")
const img = document.querySelector(".img")


inputs.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        task()
    }

})
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        task()
    }

})

function view() {
    ul.innerHTML = ""
    const task = JSON.parse(localStorage.getItem("task"))  || []
    task.map((el) => {
        ul.innerHTML += `<li>
     <h4 class="${el.isDone ? "line" : ""}">
     ${el.title}
     </h4>
     <h4 class="${el.isDone ? "line" : ""}">
     ${el.inp}
     </h4>
     <button class="del-btn my-1 btn btn-danger">Delete</button>
     </li>`
    })
    deleteBtn()
    checkBox()
}

view()


btn.addEventListener("click", () => {
  task()
})


function task() {
    if (inputs.value === "" && input.value === "") {
        h4.innerHTML = "Ошибка!!!" + ""
        li.innerHTML = ""
    } else {
        h4.innerHTML = ""
    }
    const task = JSON.parse(localStorage.getItem("task")) || []
    const newTask = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        title: input.value,
        inp: inputs.value,
        isDone: false
    }
    const result = [...task, newTask]
    localStorage.setItem("task", JSON.stringify(result))
    input.value = ""
    inputs.value = ""
    view()
}

function deleteBtn() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const buttons = document.querySelectorAll(".del-btn")
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            task = task.filter((el, idx) => {
                return idx !== index
            })
            localStorage.setItem("task", JSON.stringify(task))
            view()
        })
    })
}

function checkBox() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const checkBox = document.querySelectorAll(".check")
    checkBox.forEach((check, index) => {
        check.addEventListener("click", () => {
            task = task.map((el, idx) => {
                if (idx === index) {
                    return {...el, isDone: !el.isDone}
                } else {
                    return el
                }
            })
            localStorage.setItem("task", JSON.stringify(task))
            view()
        })
    })
}

checkBox()

