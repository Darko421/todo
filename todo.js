const alldone_chk = document.querySelector('#alldone-chk');
let list_input = document.querySelector('#list');
let time_input = document.querySelector('#time');
const add_btn = document.querySelector('#add-btn');
const todo_area = document.querySelector('#todo-area');
const del_btn = document.querySelector('#del-btn');



add_btn.addEventListener("click", () => {
    
    const temp = ` <div class="todo-items" id="todo-area">
            <div><input type="checkbox" id="done-chk"></div>
            <div>${list_input.value}</div>
            <div>&nbsp;</div>
            <div>${time_input.value}</div>
            <div><button id="del-btn">x</button></div>
        </div>`
    
    const rootdiv = document.querySelector('.todo-bottom');

    rootdiv.innerHTML = rootdiv.innerHTML + temp;
   
    list_input.value = "";
    time_input.value = "";

})


