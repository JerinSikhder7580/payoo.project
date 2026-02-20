function showOnly(id){
    const addMoney= document.getElementById("add-money")
    const cashOut= document.getElementById("cash-out")

    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')

    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}