let tus = document.getElementById('tus');
let kutu = document.getElementById('todobox');
let input = document.querySelector('input');

tus.addEventListener('click', func);

function func(){
    var list = document.createElement ('p');
    list.classList.add(list.styling)
    list.innerText = input.value;
    todobox.appendChild(list);
    input.value = '';
    list.addEventListener('click', function(){
        list.style.textDecoration = 'line-through';
    })
}