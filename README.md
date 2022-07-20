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

const server = cfx.retrieveFive("v45z95").then(server => { // Replace v45z95 with a server id
    console.log(server.getHostName())

    console.log(server.getOwnerProfileUrl())

    server.getPlayers().forEach(player => {
         console.log(player.name)
    })
})
