let container = document.querySelector('#container');
let input = document.createElement('input');
let btn = document.createElement('button');
let ul = document.createElement('ul');
btn.textContent = 'Добавить';
container.appendChild(input);
container.appendChild(btn);
container.appendChild(ul);

let tasks = [];
if(localStorage.getItem('tasks') && localStorage.getItem('tasks').length != 0) {
    let sorted_list = JSON.parse(localStorage.getItem("tasks"));
    sorted_list.forEach(function(elem, index) {
        element = document.createElement('li')
        element.textContent = elem
        ul.appendChild(element)
    });
}

function sort() {
    let list_arr = Array.from(document.querySelectorAll('li'));
    let sorted_list = list_arr.map(elem => elem.textContent).sort()
    localStorage.setItem("tasks", JSON.stringify(sorted_list));
    sorted_list.forEach((elem, index) =>
        list_arr[index].textContent = elem
    )
}

btn.onclick = function() {
    if(input.value.length != 0 && input.value.replace(/\s/g,"") != "") {
        let li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
        sort();
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
});