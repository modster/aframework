/**
 * @function getTokenPricesBySymbol -The Alchemy RPC API. 25 max per request.
 * @description Fetch token prices by symbol using Alchemy Prices RPC API.
 * @type {import('node-fetch').Response} - Will a type import Response object from node-fetch satisfy ts?
 * @param {number} MAX_SYMBOLS_PER_REQUEST - Maximum number of symbols allowed per request.
 * @param {string} method - request to Alchemy Prices API.
 * @param {string} ver - API version.
 * @param {string} api - API name. 
 * @param {string} erc - API namespace.
 * @param {string[]} supportedChains - Array of supported chains. <--------------------------------- MAX chains per request?
 * @param {string[]} manySymbols - Array of token symbols to fetch prices for. <--------------------------------- MAX symbols per request?
 * @param {string} aSymbol - A token symbol.
 * @param {string} apiKey - Your Alchemy API key.
 * @param {URL} baseUrl - The Alchemy Platform RPC 
 * @returns {Promise<Object>} - Returns a promise that resolves to the token prices data.
 * @throws {Error} - Throws an error if the prices endpoint URL is invalid or the request fails
 */

import 'dotenv/config'
dotenv.config({ path: '../.env' })
import { supportedChains } from './supported-chains';

// const [
//   ALCHEMY_WEBHOOK_KEY,  
//   ALCHEMY_API_KEY, 
//   ALCHEMY_SECRET,
//   ALCHEMY_API_RATE_LIMIT,
// ALCHEMY_NOTIFICATIONS_KEY,
// ALCHEMY_WEBSOCKETS_KEY,
// ALCHEMY_JWT] = process.env;  

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const baseUrl = new URL(`https://api.g.alchemy.com/prices/v1/tokens/`);
const symbols = supportedChains.join(',');

export async function getTokenPricesBySymbol(symbols) {
    try {
        const response = await fetch(`${baseUrl}by-symbol?symbols=${symbols}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': `Bearer ${ALCHEMY_API_KEY}`
            }
        });

        const data = await response.json();
        console.log("Token Prices By Symbol:");
        console.log(JSON.stringify(data, null, 2)); // <--------------------- output to stdout
    } catch (error) {
        console.error("Error:", error); // <--------------------- output to stderr
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const issues = await getTokenPricesBySymbol(supportedChains);
    console.log(issues);
}


