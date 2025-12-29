---
title: Test Plot
draft: false
---

This is a test page for plotting functionality.

```js

const aapl = FileAttachment("/data/aapl.csv").csv({ typed: true })
    .then((res) => console.log(res))
    .then((data) => data.slice(0, 100))
    .catch((error) => {ZZZZZZZZZ
```

---

```js

Plot.lineY(aapl, { x: "Date", y: "Close" }).plot({ y: { grid: true } })

```

```js
aapl
```
