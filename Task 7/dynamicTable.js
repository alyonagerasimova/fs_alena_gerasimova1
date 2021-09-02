const btn = document.querySelector('.plus');
const tbody = document.getElementsByTagName("tbody")[0];
const classNameForButton = 'button-format';

btn.addEventListener("click", createRow);

function createSaveButton(row) {
    const saveButton = document.createElement('button');
    saveButton.textContent = "Save";
    saveButton.className = classNameForButton;
    //saveButton.setAttribute('disabled',disabled);
    saveButton.addEventListener('click', (e) => saveChanges(row, e.currentTarget));
    // for (let i = 0; i < row.children.length - 1; i++) {
    //     if (row.getElementsByTagName('input')[i].value === '') {
    //         saveButton.setAttribute('disabled',disabled);
    //     }
    //     console.log(row.getElementsByTagName('input')[i].value);
    // }
    return saveButton;
}

function createMinusButton(row) {
    const minusButton = document.createElement('button');
    minusButton.innerHTML = '&mdash;';
    minusButton.className = classNameForButton;
    minusButton.addEventListener('click', () => deleteRowInTable(row));
    return minusButton;
}

function createDiv() {
    const manageDiv = document.createElement('div');
    manageDiv.className = 'button-format';
    return manageDiv;
}

function makeRow() {
    const row = document.createElement('tr');
    row.className = 'usual';

    const saveButton = createSaveButton(row);

    const minusButton = createMinusButton(row);

    const manageDiv = createDiv();

    manageDiv.append(minusButton);
    manageDiv.append(saveButton);

    const dateInput = document.createElement('input');
    dateInput.type = "date";

    const transportInput = document.createElement('input');
    transportInput.type = "number";

    const productsInput = document.createElement('input');
    productsInput.type = "number";

    const otherShopsInput = document.createElement('input');
    otherShopsInput.type = "number";

    const utilitiesInput = document.createElement('input');
    utilitiesInput.type = "number";

    let td = document.createElement("td");
    td.append(dateInput);
    row.append(td);

    td = document.createElement("td");
    td.append(transportInput);
    row.append(td);

    td = document.createElement("td");
    td.append(productsInput);
    row.append(td);

    td = document.createElement("td");
    td.append(otherShopsInput);
    row.append(td);

    td = document.createElement("td");
    td.append(utilitiesInput);
    row.append(td);

    row.append(manageDiv);

    return row;
}

function createRow() {
    tbody.appendChild(makeRow());
}

function saveChanges(row, saveButton) {

    const newRow = document.createElement('tr');
    newRow.className = 'usual';
    tbody.appendChild(newRow);
    let rowTd;

    for (let td of row.getElementsByTagName('input')) {
        rowTd = document.createElement("td");
        rowTd.textContent = td.value;
        newRow.append(rowTd);
    }

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Row";

    const div = createDiv();

    div.append(createMinusButton(newRow));
    div.append(editButton);
    newRow.append(div);
    saveButton.remove();
    row.remove();

    editButton.addEventListener("click", (e) => editRow(newRow, e.currentTarget));
}

function editRow(newRow,editButton) {
    editButton.remove();
    const saveButton = createSaveButton(newRow);
    newRow.lastChild.append(saveButton);
    let rowEdit = makeRow();

    for (let i = 0; i < newRow.children.length - 1; i++) {
        rowEdit.getElementsByTagName('input')[i] = newRow.childNodes[i].innerHTML;
        newRow.childNodes[i].innerHTML = '';
        newRow.childNodes[i].append(rowEdit.getElementsByTagName('input')[i]);
        console.log(newRow.children.length - 1);
    }
}

function deleteRowInTable(row) {
    row.remove();
}
