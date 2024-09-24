// change text
function changeText(id) {
    const text = document.getElementById(id)
    return text;
}

function addBalanceAndCashOut(id) {
    const addBalance = document.getElementById(id);
    const balanceConvert = parseFloat(addBalance.value);
    return balanceConvert;
}

function totalBalance(id) {
    const balance = document.getElementById(id)
    const balanceConvert = parseFloat(balance.innerText);
    return balanceConvert;
}

function hiddenSection(id) {
    document.getElementById("add-balance-form").classList.add("hidden")
    document.getElementById("cash-out-form").classList.add("hidden")
    document.getElementById("text-history").classList.add("hidden")
    const hidden = document.getElementById(id).classList.remove("hidden");
    return hidden;
}
