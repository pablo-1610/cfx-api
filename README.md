# Cfx.re JavaScript API

A package that helps you interacting with the Cfx.re, FiveM & RedM API.

<img align="right" src="https://user-images.githubusercontent.com/42814853/180027603-514401ba-d6bb-425a-892c-0bc50bf38310.png" height=20% width=20%>

<hr>

**How to install**

```bash
npm i cfx-api
```

**Example usage**:

```js
const cfx = require("cfx-api");

(async () => {
  // Retrieve a CitizenFX server (could be a FiveM or a RedM server)
  const server = await cfx.fetchServer("qrbm5v") // Replace "qrpm7v" with a server id
  console.log(`Server: ${server.hostname} has ${server.players.length} players online`);

  // Retrieve Cfx.re status
  const status = await cfx.fetchStatus()
  console.log(status.everythingOk ? "All Cfx.re systems are operational" : "Cfx.re is experiencing issues");

  // And get status of all individual components
  const components = await status.fetchComponents()
  for (let component of components)
    console.log(`${component.name}: ${component.status}`);
})();
