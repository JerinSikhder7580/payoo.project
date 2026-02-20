document.getElementById('login-btn').addEventListener("click", function () {
    console.log("aded")

    const loginNumber = document.getElementById('login-number')
    const number = loginNumber.value

    const loginPin = document.getElementById('login-pin')
    const pin = loginPin.value

    if (number == '01234567890' && pin == '1234') {
        alert("Login Succesfull")
            window.location.assign("/home.html")

    }

    else {
        alert("Login Failed")
        return
    }




})