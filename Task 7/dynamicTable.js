const btn = document.querySelector('.plus');
let tbody = document.getElementsByTagName("tbody")[0];
let newRow;
let save = document.createElement('button');
let rows = document.querySelectorAll('tr');
const td1 = [];
let inputText = [];
let btnMinus;

btn.addEventListener("click", createRow);

save.addEventListener('click', saveChanges);

function createRow() {
    newRow = document.createElement('tr');
    newRow.className = 'usual';
    for (let i = 0; i < tbody.childNodes.length; i++) {
        td1[i] = document.createElement("td");
        inputText = document.createElement('input');
        td1[i].appendChild(inputText);
        newRow.appendChild(td1[i]);
    }
    console.log(td1);
    console.log(newRow.childNodes);
    tbody.appendChild(newRow);
    tbody.append(save);
    btnMinus = document.createElement('button');
    btnMinus.innerHTML = '-';
    rows = document.querySelectorAll('tr');
    rows.appendChild(btnMinus);
    btnMinus.addEventListener('click', deleteRow);
    console.log(rows);
}

function saveChanges(td1) {
    save.className = 'button-save';
    save.innerHTML = "Save";
    save.setAttribute('disabled', 'disabled');
    for (let i = 0; i < tbody.childNodes.length; i++) {
        td1.innerHTML = td1.childNodes.values;
    }
    //const inputValue = inputText;
    console.log(newRow.childNodes);
    console.log(inputText);
    save.remove();
    // let td2 = [];
    // for (let i = 0; i < tbody.childNodes.length; i++) {
    //     console.log(newRow.childNodes);
    //     td2[i] = document.createElement("td");
    //     newRow.appendChild(td2[i]);
    //     td2[i].innerHTML = inputValue[i];
    // }
}

function deleteRow() {
    if (rows.length > 2) {
        tbody.deleteRow(this.parentNode.parentNode.parentNode.rowIndex);
    } else {
        return false;
    }
}