function addBalanceAndCashOut(id) {
    const addBalance = document.getElementById(id);
    const balanceConvert = parseFloat(addBalance.value);
    return balanceConvert;
}

function totalBalance(id) {
    const balance = document.getElementById(id)
    const balanceConvert = Number(balance.innerText);
    return balanceConvert;
}
