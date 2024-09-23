document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault()
    const inputAmout = addBalanceAndCashOut("input-amount");
    const inputPinCode = addBalanceAndCashOut("pin-code");
    const totalAmout = totalBalance("total-balance")
    if (inputPinCode === 1234) {
        const newBalance = totalAmout + inputAmout
        document.getElementById('total-balance').innerText = newBalance
    } else {
        alert("Please Check Your Code")
    }
})