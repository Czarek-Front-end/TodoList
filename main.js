let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newLiItem;

let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $idNumber = 0;
let $allTasks;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
    $btn = document.querySelector('.btn');

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $allTasks = $ulList.getElementsByTagName('li');
};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
};


const addNewTask = () => {
    if($todoInput.value !== ''){
        $idNumber++;
        $newLiItem = document.createElement('li')
        $newLiItem.innerText = $todoInput.value;
        $newLiItem.setAttribute('id',`todo-${$idNumber}`)
        $ulList.appendChild($newLiItem);
        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania';
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newLiItem.appendChild(toolsPanel);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = '<img src="img/edit-icon.svg">';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<img src="img/delete-icon.svg">';


    toolsPanel.appendChild(editBtn)
    toolsPanel.appendChild(deleteBtn)

}


const checkClick = (e) => {
    if (e.target.closest('button').className === 'edit'){
        editTask(e)
    } else if(e.target.closest('button').className === 'delete'){
        deleteTask(e)
    }
};



const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex';
}

const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = 'Podaj treść';
    }
}
const closePopup = () => {
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
}

const deleteTask = (e) => {
    const deleteTodo = e.target.closest('li')
    deleteTodo.remove();

    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'Twoja lista jest pusta';
    }
}

document.addEventListener('DOMContentLoaded', main);