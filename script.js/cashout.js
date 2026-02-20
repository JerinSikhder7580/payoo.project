document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashOutNumberInput = document.getElementById('agent-number')
    const cashOutNumber = cashOutNumberInput.value
    console.log(cashOutNumber)
    if(cashOutNumber.length !== 11){
        alert("Invalid agent number")
        return
    }



    const cashOutAmountInput = document.getElementById('cashout-amount')
    const cashOutAmount = cashOutAmountInput.value
    console.log(cashOutAmount)

    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText
    console.log(balance)


    const newBalance = Number(balance) - Number(cashOutAmount)
    console.log(newBalance)


    if (newBalance < 0) {
        alert('Invalid Amount')
        return
    }

    const cashOutInput = document.getElementById('cashout-pin')
    pin = cashOutInput.value

    if (pin ==='1234') {
        alert("cashout succesful")
        balanceElement.innerText = newBalance

    }

    else {
        alert("invalid pin")
        return
    }
})
