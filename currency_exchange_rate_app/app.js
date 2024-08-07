let apiKeys = "your-api"
let URL = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKeys}`
let exchangeRateBtn = document.getElementById("exchange-rate")
let amountInput = document.getElementById("amount")
let dropdown = document.querySelectorAll(".dropdown select")
let fromCurr = document.querySelector(".from select")
let toCurr = document.querySelector(".to select")
let result = document.querySelector("#result")


const allCountryCode = async () => {
    try {
        for (let select of dropdown) {
            let response = await fetch(URL)
            let data = await response.json();

            let allRates = data.rates;
            for (codeList in allRates) {
                let newOption = document.createElement("option")
                newOption.innerText = codeList
                newOption.value = codeList
                select.append(newOption)
                if (select.name === "from" && codeList === "USD") {
                    newOption.selected = "selected"
                } else if (select.name === "to" && codeList === "PKR") {
                    newOption.selected = "selected"
                }
            }
        }
    } catch (error) {
        console.error('Error fetching currency data for dropdowns:', error);
    }
}


exchangeRateBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    updateCurrency();
})



const updateCurrency = () => {
    let valAmount = amountInput.value
    console.log(valAmount)

    if (valAmount === "" || valAmount < 1) {
        valAmount = 1
        amountInput.value = "1"
    }
    currencyExchange()
}


const currencyExchange = async () => {
    let response = await fetch(URL)
    let data = await response.json();

    let allRates = data.rates;

    let fromCurrency = fromCurr.value
    let toCurrency = toCurr.value

    let fromRate = allRates[fromCurrency]
    let toRate = allRates[toCurrency]

    let conversionRate = toRate / fromRate
    let amount = parseFloat(amountInput.value)
    let finalAmount = amount * conversionRate
    result.innerText = `${amount} ${fromCurrency} = ${finalAmount.toFixed()} ${toCurrency}`
    console.log(finalAmount)
}


allCountryCode()
