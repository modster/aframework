
/**
 * prices/v1/${ALCHEMY_API_KEY}/tokens/historical
 */
// npm install dotenv --save
import "dotenv/config"
// dotenv.config();
console.log(process.env)
const apiKey = process.env.ALCHEMY_API_KEY

const url = `https://api.g.alchemy.com/prices/v1/${apiKey}/tokens/historical`
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body:
    '{"symbol":"ETH","startTime":"202-01-01T00:00:00Z","endTime":"2025-12-28T23:59:59Z"}',
}

try {
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
} catch (error) {
  console.error(error)
}
