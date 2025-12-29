---
title: BTC WS
draft: true
---

<div class="grid grid-cols-4">
  <div class="card">
    <h2>Bitcoin price (USD/BTC)</h2>
    <div class="big">${btc.toLocaleString("en-US", {style: "currency", currency: "USD"})}</div>
  </div>
</div>

```js
const socket = new WebSocket(
  "wss://ws.eodhistoricaldata.com/ws/crypto?api_token=demo",
);
invalidation.then(() => socket.close());
socket.addEventListener(
  "open",
  () =>
    socket.send(JSON.stringify({ action: "subscribe", symbols: "BTC-USD" })),
);
const btc = Generators.observe((notify) => {
  let currentValue;
  const messaged = (event) => {
    const m = JSON.parse(event.data);
    const v = +m.p;
    if (isNaN(v) || v === currentValue) return;
    notify(currentValue = v);
  };
  socket.addEventListener("message", messaged);
  return () => socket.removeEventListener("message", messaged);
});
```
