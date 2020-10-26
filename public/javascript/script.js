const submit = document.getElementById('submit');
const input = document.getElementById('input');
const reset = document.getElementById('reset');
const done1 = document.getElementById('done1');
const done = document.querySelectorAll('.done');
const dl = document.getElementById('delete1');
let li = document.querySelectorAll('.todo li');

document.querySelector('.todo').style.marginTop = '0';


function add()
{   
    let list = document.querySelector('.list');
    const input = document.getElementById('input');
    if (input.value === '' || input.value.trim() === '')
    {
        return;
    }
    // create div 
    let newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    list.appendChild(newDiv);

    // create li 
    let newLi = document.createElement('LI');
    newLi.textContent = input.value;
    newDiv.appendChild(newLi);

    // create div sec
    let todo = document.querySelector('.todo:last-child')
    let divSec = document.createElement('div');
    divSec.classList.add('sec')
    todo.appendChild(divSec);

    // create button
    let sec = document.querySelector('.todo:last-child .sec');
    let dl = document.createElement('button');
    let done = document.createElement('button');
    dl.classList.add('delete');
    done.classList.add('done');
    dl.id = 'delete1';
    done.id = 'done1';
    done.innerHTML = '<i class="far fa-check-circle"></i>';
    dl.innerHTML = '<i class="far fa-trash-alt"></i>';
    sec.appendChild(done);
    sec.appendChild(dl);
}

function fnDelete(e)
{
    var item = e.target; 
    if (item.classList[0] === 'delete')
    {
        item.parentNode.parentNode.style.display= 'none';
    }
}

function fnDone(e)
{
    var item = e.target;
    if (item.classList[0] === 'done')
    {
      item.parentNode.previousElementSibling.style.textDecoration =' line-through';
    }  
}


const list = document.querySelector('.list');
list.addEventListener('click', fnDone);
list.addEventListener('click', fnDelete);
// event
submit.addEventListener('click', add);
input.addEventListener('keyup',(event) => {
    if (event.keyCode === 13)
    {
        add();
    }
})

reset.addEventListener('click', () => {
    let list = document.querySelector('.list');
    input.value = '';
    list.innerHTML ='';
});



