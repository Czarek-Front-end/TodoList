let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newLiItem;
let editIcon = 'img src="img/edit-icon.svg"';
let deleteIcon = 'img src="img/delete-icon.svg"';


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput')
    $alertInfo = document.querySelector('.alertInfo')
    $addBtn = document.querySelector('.addBtn')
    $ulList = document.querySelector('.todoList ul')
    $btn = document.querySelector('.btn')
};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
};


const addNewTask = () => {
    if($todoInput.value !== ''){
        $newLiItem = document.createElement('li')
        $newLiItem.innerText = $todoInput.value;
        $ulList.appendChild($newLiItem);
        
        $todoInput.value = '';
        $alertInfo.innnerText = '';
        createToolsArea();
    } else {
        $alertInfo.innnerText = 'Wpisz treść zadania';
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools')
    $newLiItem.appendChild(toolsPanel)

    const editBtn = document.createElement('button');
    toolsPanel.classList.add('edit')
    editBtn.innerHTML = '<img src= "img/edit-icon.svg">';
    editBtn.style.border = 'none'
    editBtn.style.height = '100%'
    editBtn.style.width = '4rem'
    editBtn.style.background = 'transparent'

    const deleteBtn = document.createElement('button');
    toolsPanel.classList.add('delete')
    deleteBtn.innerHTML = '<img src= "img/delete-icon.svg">';
    deleteBtn.style.border = 'none'
    deleteBtn.style.height = '100%'
    deleteBtn.style.width = '4rem'
    deleteBtn.style.background = 'transparent'

    toolsPanel.appendChild(editBtn)
    toolsPanel.appendChild(deleteBtn)

}

document.addEventListener('DOMContentLoaded', main);