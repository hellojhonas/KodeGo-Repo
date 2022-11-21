function processSubmission() {
    const tr = document.createElement("tr");
    const tdname = document.createElement("td");
    const tdlastname = document.createElement("td");
    const tdgender = document.createElement("td");
    const actionBtn = document.createElement("button");
    actionBtn.setAttribute("id", "")

    const myFields = document.getElementsByClassName("form-field");
    tdname.textContent = myFields[0].value;
    myFields[0].value = '';
    tdlastname.textContent = myFields[1].value;
    myFields[1].value = '';
    if (myFields[2].checked) {
        tdgender.textContent = 'F';
        myFields[2].checked = false;
    } else if (myFields[3].checked){
        tdgender.textContent = 'M';
        myFields[3].checked = false;
    }
    

    tr.appendChild(tdname);
    tr.appendChild(tdlastname);
    tr.appendChild(tdgender);

    const myTableBody = document.querySelector("#parent-div table tbody");

    myTableBody.appendChild(tr);
}

function deleteRecord(evt){
    console.log(evt);
}