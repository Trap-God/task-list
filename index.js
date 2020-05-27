let container = document.querySelector('#container');
let inputBTN = document.createElement('input');
let btn = document.createElement('button');
let ul = document.createElement('ul');
btn.textContent = 'ADD';
container.appendChild(inputBTN);
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

function filter() {
    let list_arr = Array.from(document.querySelectorAll('li'));
    let sorted_list = list_arr.map(elem => elem.textContent).sort()
    localStorage.setItem("tasks", JSON.stringify(sorted_list));
    sorted_list.forEach((elem, index) =>
        list_arr[index].textContent = elem
    )
}

btn.onclick = function() {
    if(inputBTN.value.length != 0 && inputBTN.value.replace(/\s/g,"") != "") {
        let li = document.createElement('li');
        li.textContent = inputBTN.value;
        ul.appendChild(li);
        inputBTN.value = '';
        filter();
    }
}

inputBTN.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
});