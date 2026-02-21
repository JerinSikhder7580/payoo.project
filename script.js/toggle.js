function showOnly(id){
    const addMoney= document.getElementById("add-money")
    const cashOut= document.getElementById("cash-out")
    const history=document.getElementById("history")

    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    history.classList.add('hidden')

    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}