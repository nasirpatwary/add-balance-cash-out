document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault()
    const inputAmout = addBalanceAndCashOut("input-amount");
    const inputPinCode = addBalanceAndCashOut("pin-code");
    const totalAmout = totalBalance("total-balance");
    if (isNaN(inputAmout)) {
        alert("Please Provide the number");
        return
    }
    if (inputPinCode === 1234) {
        const newBalance = totalAmout + inputAmout
        document.getElementById('total-balance').innerText = newBalance;
        const p = document.createElement("p");
        const h2 = document.createElement("h2");
        h2.style.color = "green";
        h2.style.fontSize = "20px";
        h2.style.textAlign = "center";
        h2.innerText = "Please Add Balance";
        p.innerText = `Add Amount: ${inputAmout} Total Balance: ${newBalance}`;
        document.getElementById("transactions-text").append(h2, p)
    } else {
        alert("Please Check Your Code")
    }
})