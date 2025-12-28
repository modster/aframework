/**
 * 
 * prices/v1/${ALCHEMY_API_KEY}/tokens/historical
 */
const url = 'https://api.g.alchemy.com/prices/v1/docs-demo/tokens/historical';
const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: '{"symbol":"ETH","startTime":"2024-01-01T00:00:00Z","endTime":"2024-01-31T23:59:59Z"}'
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}