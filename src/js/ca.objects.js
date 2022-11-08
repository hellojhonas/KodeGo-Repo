function checkForm() {
    const txtInput = document.getElementById('username').value;
    console.log(txtInput.length);
    if (txtInput.length >= 8) {
        document.querySelector("button#btnSubmit").disabled = false;
    }
}