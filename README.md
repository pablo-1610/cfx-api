<img align="right" src="https://user-images.githubusercontent.com/42814853/180027603-514401ba-d6bb-425a-892c-0bc50bf38310.png" height=20% width=20%>

# Cfx.re JavaScript API
A package that helps you interacting with the Cfx.re API to fetch FiveM servers

**How to install**

```bash
npm i cfx-api
```

**How to use**:

```js
const cfx = require("cfx-api");

const server = await cfx.retrieveFive("v48z95"); // Replace v48z95 with any FiveM server id
console.log(server.hostname);
