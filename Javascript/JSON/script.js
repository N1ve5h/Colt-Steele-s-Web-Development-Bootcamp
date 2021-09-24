const data = '{"ticker":{"base":"BTC","target":"USD","price":"41120.20036761","volume":"58410.85805059","change":"-617.56229917"},"timestamp":1632483663,"success":true,"error":""}';

const parseData = JSON.parse (data);
const price = parseData.ticker.price;

document.querySelector('h1').innerHTML = `Current price of Bitcoin is: \u0024${price}`