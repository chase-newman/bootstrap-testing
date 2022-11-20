fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.bpi.USD.rate)
        document.getElementById("price").innerHTML = data.bpi.USD.rate
    });

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ethereum")
    .then(response => response.json())
    .then(data => console.log(data));

fetch("https://rest.coinapi.io/v1/exchangerate/BTC?apikey=82803CED-DC47-46DE-AB2D-8B4C86582F02")
    .then(response => response.json())
    .then(data => console.log(data))

// fetch("https://tes-db-96d5b-default-rtdb.firebaseio.com/Questions.json")
//     .then(response => response.json())
//     .then(data => console.log(data));