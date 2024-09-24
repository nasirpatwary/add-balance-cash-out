document.getElementById("show-add-btn").addEventListener("click", function(){
    const change = changeText("change-text");
    change.innerText = "Please deposite"
    hiddenSection("add-balance-form")
})
document.getElementById("show-cash-out").addEventListener("click", function(){
    const change = changeText("change-text");
    change.innerText = "Please cash out"
    hiddenSection("cash-out-form")
})
document.getElementById("show-transactions").addEventListener("click", function(){
    const change = changeText("change-text");
    change.innerText = "This is my history"
    hiddenSection("text-history")
})


