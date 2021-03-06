let elAdd = document.getElementById('addBtn');
elAdd.addEventListener('click', add, false);

 function add(e) {
     e.preventDefault();
    let newText = getText();
    addItem(newText);
    refresh();
 }

function getText() {
    let elItem = document.getElementById("textInput");
    let txt = elItem.value;

    return txt;
}

let arrItems = [];

function addItem(txt) {
    arrItems.push(txt);
}

function refresh() {
    clear();

    for(let i = 0; i < arrItems.length; i++) {
        let val = arrItems[i];
        let list = document.getElementById('list');
        let  newItem = document.createElement('li');
        let newText = document.createTextNode(val);
        newItem.appendChild(newText);
        list.appendChild(newItem);
    }

    for(let i = 0; i < arrItems.length; i++) {
        let list = document.getElementsByTagName('li');
        let deleteItem = document.createElement('span');
        let deleteText = document.createTextNode('\u00D7');
        deleteItem.className = 'delete';
        let newDeleteItem = deleteItem.appendChild(deleteText);
        list[i].appendChild(newDeleteItem);
    }
}


function clear() {
  document.getElementById('list').innerHTML = '';
}
