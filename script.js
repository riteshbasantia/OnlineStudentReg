var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["pass"] = document.getElementById("pass").value;
    formData["cpass"] = document.getElementById("cpass").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["mob"] = document.getElementById("mob").value;
    formData["state"] = document.getElementById("state").value;
    formData["city"] = document.getElementById("city").value;
    formData["country"] = document.getElementById("country").value;
    formData["pin"] = document.getElementById("pin").value;
    formData["course"] = document.getElementById("course").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pass;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cpass;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.dob;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.mob;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.state;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.city;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.country;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.pin;
    cell12 = newRow.insertCell(11);
    cell12.innerHTML = data.course;
    cell12 = newRow.insertCell(12);
    cell12.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("cpass").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("mob").value = "";
    document.getElementById("state").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("course").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pass").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cpass").value = selectedRow.cells[4].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[5].innerHTML;
    document.getElementById("mob").value = selectedRow.cells[6].innerHTML;
    document.getElementById("state").value = selectedRow.cells[7].innerHTML;
    document.getElementById("city").value = selectedRow.cells[8].innerHTML;
    document.getElementById("country").value = selectedRow.cells[9].innerHTML;
    document.getElementById("pin").value = selectedRow.cells[10].innerHTML;
    document.getElementById("course").value = selectedRow.cells[11].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.pass;
    selectedRow.cells[4].innerHTML = formData.cpass;
    selectedRow.cells[5].innerHTML = formData.dob;
    selectedRow.cells[6].innerHTML = formData.mob;
    selectedRow.cells[7].innerHTML = formData.state;
    selectedRow.cells[8].innerHTML = formData.city;
    selectedRow.cells[9].innerHTML = formData.country;
    selectedRow.cells[10].innerHTML = formData.pin;
    selectedRow.cells[11].innerHTML = formData.course;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}