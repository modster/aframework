#! /usr/bin/env node

/**
 * @description Fetch token prices by symbol using Alchemy Prices API.
 * @param {string[]} supportedChains - Array of token symbols to fetch prices for.
 * @returns {Promise<Object>} - Returns a promise that resolves to the token prices data.
 * @todo configure environment variables for API keys and export a reusable function.
 */
import 'dotenv/config'
dotenv.config({path: '../.env'})
import {supportedChains} from "./supported-chains.js";
const apiKey =  proccess.env.ALCHEMY_API_KEY;
const baseUrl = "https://api.g.alchemy.com/"; ${api}/${version}/${assetClass}/"
connst assetClass = "tokens";
const version = "v1";
const api = "prices";
const by = "by-symbols";
const how = "by-symbol";
const tokens = "tokens";
const symbols = supportedChains.join(',');

async function getTokenPricesBySymbol() {
  try {
    const symbolsParam = symbols.join(',');
    const response = await fetch(`https://api.g.alchemy.com/prices/v1/${tokens}/${how}?${by}=${supportedChains}`, {
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