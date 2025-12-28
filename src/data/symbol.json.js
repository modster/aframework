
/**
 * @function getTokenPricesBySymbol - Fetch token prices by symbol.
 * @type {import('node-fetch').Response} 
 * @method GET
 * @param {string[]} symbolsArray - An array of token symbols. MAX 25 per request.
 * @param {string} symbol - A token symbol to fetch the price for.
 * @param {string} apiKey - Your Alchemy API key.
 * @param {URL} baseUrl - The Alchemy Prices API endpoint URL.
 * @constant {number} MAX_SYMBOLS_PER_REQUEST - Maximum number of symbols allowed per request.
 * @returns {Promise<Response>} - A promise that resolves to the token prices data.
 * @description Fetch token prices by symbol using Alchemy Prices RPC API. 
 * @link https://docs.alchemy.com/reference/prices-api#get-token-prices-by-symbol
 */
import 'dotenv/config'
import {supportedChains} from "./supported-chains.js"; // import "./supported-chains.json";
dotenv.config({path: '../.env'})

const apiKey = process.env.ALCHEMY_API_KEY;
const baseUrl = new URL(`https://api.g.alchemy.com/prices/v1/tokens/by-symbol?symbols=${symbols}`);
const init = {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

/**
 * @param {string} symbol - Array of token symbols to fetch prices for.
 * @description Fetch token prices by symbol using Alchemy Prices API.
 * @returns {Promise<Object>} - Returns a promise that resolves to the token prices data.
 */
async function getTokenPricesBySymbol() {
  try {
    const symbolsParam = symbols.join(',');
    const response = await fetch(, init);

    const data = await response.json();
    console.log("Token Prices By Symbol:");
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

// getTokenPricesBySymbol();

// var URL: {
  //   new(url: string | URL, base?: string | URL): URL;
  //   prototype: URL;
  //   canParse(url: string | URL, base?: string | URL): boolean;
  //   createObjectURL(obj: Blob | MediaSource): string;
  //   parse(url: string | URL, base?: string | URL): URL | null;
  //   revokeObjectURL(url: string): void;
  // }


/**
 * @example 2
 */
const response = await fetch(`https://api.g.alchemy.com/prices/v1/${apiKey}/tokens/by-symbol?symbols=${symbols.join(',')}`, {
  method: "GET",
  headers: {}, /** @todo no headers? */
});

const body = await response.json();
console.log(body);


async function getTokenPricesBySymbol() {
  try {
    const symbolsParam = symbols.join(',');
    const response = await fetch(`https://api.g.alchemy.com/prices/v1/tokens/by-symbol?symbols=${symbolsParam}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const data = await response.json();
    console.log("Token Prices By Symbol:");
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}


getTokenPricesBySymbol();