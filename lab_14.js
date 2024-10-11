function changeUser() {
    const name = document.getElementById("username");
const setButtonUser = document.getElementById("set-user-button");
name.textContent = setButtonUser.value;
setButtonUser.value = "";
}

function changeImg() {
    const profile = document.getElementById("background-img");
const setButtonImg = document.getElementById("set-user-img-button");
profile.style.backgroundImage = "url(" + setButtonImg.value + ")";
setButtonImg.value = "";
}

let contactCount = 1;

function addContact() {
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");

if (nameInput.value.trim() === "" || phoneInput.value.trim() === "") {
alert("Please enter both name and phone number.");
return;
}

const table = document.getElementById("contactTable");
const newRow = table.insertRow();

const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);

cell1.textContent = contactCount++;
cell2.textContent = nameInput.value;
cell3.textContent = phoneInput.value;

nameInput.value = "";
phoneInput.value = "";
}

function exportToCSV() {
const table = document.getElementById("contactTable");
let csvContent = "No.,Name,Phone Number\n";

for (let i = 1; i < table.rows.length; i++) {
const row = table.rows[i];
const rowData = [
  row.cells[0].textContent,
  row.cells[1].textContent,
  row.cells[2].textContent
].join(",");
csvContent += rowData + "\n";
}

// Create a blob and trigger download
const blob = new Blob([csvContent], { type: "text/csv" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "PhoneBook.csv";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
}