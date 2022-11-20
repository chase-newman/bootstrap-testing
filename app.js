fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.bpi.USD.rate)
        document.getElementById("price").innerHTML = data.bpi.USD.rate
    });