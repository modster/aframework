/**
 * @function getTokenPricesBySymbol
 * @description  -The Alchemy RPC API, fetch token prices by symbol using Alchemy Prices RPC API.
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

import "dotenv/config"
import { fileURLToPath } from "node:url"
import { supportedChains } from "./supported-chains"
// const [
// ALCHEMY_WEBHOOK_KEY,
// ALCHEMY_API_KEY,
// ALCHEMY_SECRET,
// ALCHEMY_API_RATE_LIMIT,
// ALCHEMY_NOTIFICATIONS_KEY,
// ALCHEMY_WEBSOCKETS_KEY,
// ALCHEMY_JWT] = process.env;
const apiKey = process.env.ALCHEMY_API_KEY
const baseUrl = new URL("https://api.g.alchemy.com/prices/v1/tokens/")
const chainsArray = supportedChains.join(",")
const body = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    },
}

const chainIds = new URL(`${baseUrl}by-symbol?symbols=${chainsArray}`)

// Fetch token prices by symbol using Alchemy Prices API.
export async function getTokenPricesBySymbol(symbols) {
    try {
        const response = await fetch(
            `${baseUrl}by-symbol?symbols=${symbols}`,
            body,
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error:", error)
    } finally {
        console.log("Fetch token prices by symbol - completed")
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const issues = await getTokenPricesBySymbol(chainIds)
    process.stdout.write(JSON.stringify(issues, null, 2))
}
