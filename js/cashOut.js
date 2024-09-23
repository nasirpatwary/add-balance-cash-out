document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault()
    const cashOutField = addBalanceAndCashOut('input-cash-out');
    const pinCodeField = addBalanceAndCashOut("cash-pin-code");
    const totalAmout = totalBalance("total-balance")
    if (pinCodeField === 1234) {
        const newBalance = totalAmout - cashOutField;
        document.getElementById("total-balance").innerText = newBalance 
    }else{
        alert("Please Try again")
    }
})
