document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault()
    const cashOutField = addBalanceAndCashOut('input-cash-out');
    const pinCodeField = addBalanceAndCashOut("cash-pin-code");
    const totalAmout = totalBalance("total-balance")
    if (isNaN(cashOutField)) {
        alert("Please Provide the number");
        return
    }
    if (pinCodeField === 1234) {
        const newBalance = totalAmout - cashOutField;
        document.getElementById("total-balance").innerText = newBalance
        const h2 = document.createElement("h2");
        h2.style.color = "red"
        h2.style.fontSize = "20px";
        h2.style.textAlign = "center"
        const p = document.createElement("p");
        h2.innerText = "Please Cash Your Money";
        p.innerText = `Cash Out: ${cashOutField} Total Balance: ${newBalance}`;
        document.getElementById("transactions-text").append(h2, p)
    }else{
        alert("Please Try again")
    }
})
