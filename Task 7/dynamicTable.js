const tbody = document.getElementsByTagName("tbody")[0];
const buttonClassName = 'button-format';
const manageDivClassName = 'table-expenses__row-manage';
const rowClassName = 'table-expenses__row';

document.querySelector('.table-expenses__plus-button').addEventListener("click", createRow);

function createSaveButton(row) {
    const saveButton = document.createElement('button');
    saveButton.textContent = "Save";
    saveButton.className = buttonClassName;
    saveButton.addEventListener('click', (e) => saveChanges(row, e.currentTarget));
    return saveButton;
}

function createMinusButton(row) {
    const minusButton = document.createElement('button');
    minusButton.innerHTML = '&mdash;';
    minusButton.className = buttonClassName;
    minusButton.addEventListener('click', () => deleteRowInTable(row));
    return minusButton;
}

function createDiv() {
    const manageDiv = document.createElement('div');
    manageDiv.className = manageDivClassName;
    return manageDiv;
}

function createInputsList() {
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

    return [
        dateInput,
        transportInput,
        productsInput,
        otherShopsInput,
        utilitiesInput
    ];
}

function makeRow() {
    const row = document.createElement('tr');
    row.className = rowClassName;

    const saveButton = createSaveButton(row);
    const minusButton = createMinusButton(row);
    const manageDiv = createDiv();

    manageDiv.append(minusButton);
    manageDiv.append(saveButton);

   const inputElements = createInputsList();

   inputElements.forEach(element => {
       const td = document.createElement("td");
       td.append(element);
       row.append(td);
   });

    row.append(manageDiv);

    return row;
}

function createRow() {
    tbody.appendChild(makeRow());
}

function saveChanges(row, saveButton) {
    Array.from(row.getElementsByTagName('input')).forEach(input => {
        const parent = input.parentElement;
        const value = input.value;
        parent.innerHTML = value;
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Row";
    editButton.addEventListener("click", (e) => editRow(row, editButton));
    const oldDiv = row.getElementsByTagName("div")[0];
    saveButton.remove();
    oldDiv.append(editButton);
}

function editRow(row, editButton) {
    editButton.remove();
    const saveButton = createSaveButton(row);

    row.lastChild.append(saveButton);

    let inputs = createInputsList();

    for (let i = 0; i < row.children.length - 1; i++) {
        const node = row.childNodes[i];
        inputs[i].value = node && node.textContent;
        node.textContent = '';
        node.append(inputs[i]);
    }
}

function deleteRowInTable(row) {
    row.remove();
}
