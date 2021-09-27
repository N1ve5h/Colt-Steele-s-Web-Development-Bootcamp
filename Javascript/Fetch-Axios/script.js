//using .then
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, waiting to parse...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("Data parsed...");
//         console.log(data.ticker.price);
//     })

//     .catch(e => {
//         console.log("Error: "+ e)
//     })

//async and await
// const fetchBitcoinPrice = async () => {
//   try {
//     const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
//     const data = await res.json();
//     console.log(data.ticker.price);
//   } catch (e) {
//     console.log("Something went wrong", e);
//   }
// };


//Using Axios Library and .then
//Waits for everything to finish.
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then (res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch (err => {
//         console.log("Error", err);
//     });

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log("Error ", e)
    }
}