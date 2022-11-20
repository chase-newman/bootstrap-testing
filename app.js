fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.bpi.USD.rate)
        document.getElementById("price").innerHTML = data.bpi.USD.rate
    });

fetch("https://tes-db-96d5b-default-rtdb.firebaseio.com/Questions.json")
    .then(response => response.json())
    .then(data => console.log(data));