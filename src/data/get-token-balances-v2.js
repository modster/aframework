/**
 * @function alchemy_getTokenBalances
 * @description This module interacts with the Alchemy API to fetch token balances for a specific Ethereum address.
 */
import 'dotenv/config';
dotenv.config({ path: '../.env' });


const ethereumAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"; // Example address
const apiKey = process.env.ALCHEMY_API_KEY;
const apiUrl = new URL(`https://eth-mainnet.g.alchemy.com/v2/${apiKey}`).toString();
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const url = new URL(apiUrl);
const body = JSON.stringify({
    id: 1,
    jsonrpc: "2.0",
    method: "alchemy_getTokenBalances",
    params: [
        ethereumAddress || "greeffer.eth",
        chainId,
    ]
});

fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));