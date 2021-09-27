const req = new XMLHttpRequest();

req.onload = function () {
    console.log("Request Finished");
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
    document.querySelector('h1').innerText = `Current price of Bitcoin is: \u0024${data.ticker.price}`
}

req.onerror =function () {
    console.log("Error");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();

