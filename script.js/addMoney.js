document.getElementById('add-money-btn').addEventListener('click', function () {
    const bankAccount = document.getElementById('add-money-bank').value
    if (bankAccount === "Select Bank") {
        alert("please select a bank")
        return
    }
    const accountNum = document.getElementById('add-money-number').value
    if (accountNum.length !== 11) {
        alert("Invalid account number")
        return
    }

    const amount = document.getElementById('add-money-amount').value

    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText
    console.log(balance)

    const newBalance = Number(balance) + Number(amount)

    const pin = document.getElementById('add-money-pin').value

    if (pin === '1234') {
        balanceElement.innerText = newBalance
        const history = document.getElementById('history-container')

        history.innerHTML = `<p>Added ${amount} From ${accountNum}</P>`

    }
    else {
        alert('Invalid pin')
    }




})












































const select = document.getElementById("add-money-bank")
select.addEventListener("change", () => {

    if (select.value === "Select Bank") {
        select.classList.add("text-black/50")
    }
    else {
        select.classList.remove("text-black/50")
        select.classList.add("text-black")

    }
})

