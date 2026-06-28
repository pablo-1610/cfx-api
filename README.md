# cfx-api

A JavaScript / TypeScript library to interact with the Cfx.re, FiveM and RedM APIs.

<img align="right" src="https://user-images.githubusercontent.com/42814853/180027603-514401ba-d6bb-425a-892c-0bc50bf38310.png" height=20% width=20%>

<hr>

## Installation

```bash
npm i cfx-api
```

## Quick start

```js
const cfx = require("cfx-api")

;(async () => {
  const servers = await cfx.servers.all({ minPlayers: 1, limit: 50 })
  console.log(`${servers.length} servers fetched`)

  const status = await cfx.status.get()
  console.log(status.everythingOk ? "All systems operational" : "Cfx.re is experiencing issues")
})()
```

TypeScript is supported out of the box:

```ts
import { servers, status } from "cfx-api"
```

## API

The library exposes two namespaces, `servers` and `status`. Standalone `fetch*` functions are also available as aliases.

### servers

#### `servers.all(filters?)`

Fetches the full public server list and decodes it. Returns an array of `CitizenServer`.

```js
const list = await cfx.servers.all({
  locale: "en-US",
  gametype: "Roleplay",
  minPlayers: 10,
  maxPlayers: 1000,
  tag: "drift",
  onlyOpen: true,
  search: "my community",
  limit: 100,
})
```

| Filter | Type | Description |
| --- | --- | --- |
| `locale` | string | Keep only servers using this locale |
| `gametype` | string | Keep only servers with this game type |
| `mapname` | string | Keep only servers with this map name |
| `minPlayers` | number | Minimum connected players |
| `maxPlayers` | number | Maximum connected players |
| `tag` | string | Keep only servers exposing this tag |
| `onlyOpen` | boolean | Exclude full servers |
| `search` | string | Case-insensitive match on the hostname |
| `limit` | number | Stop after this many matching servers |

#### `servers.single(id)`

Fetches a single server by its join id. Returns a `CitizenServer`.

```js
const server = await cfx.servers.single("xxxxxx")
console.log(server.hostname, server.playersCount, server.maxPlayers)
```

#### `servers.featured()`

Fetches the featured servers shown on the official server list. Returns a `CfxFeaturedServers`.

```js
const featured = await cfx.servers.featured()
console.log(featured.homePageServer.name)
console.log(featured.allIds)
```

#### `servers.icon(id, iconVersion)` and `servers.iconUrl(id, iconVersion)`

Fetches the server icon as a `Buffer`, or builds its URL.

```js
const server = await cfx.servers.single("xxxxxx")
const icon = await cfx.servers.icon(server.id, server.iconVersion)
const url = cfx.servers.iconUrl(server.id, server.iconVersion)
```

#### `servers.info(address)`, `servers.dynamic(address)`, `servers.players(address)`

Queries a game server directly through its own endpoints, using an `ip:port` address.

```js
const dynamic = await cfx.servers.dynamic("127.0.0.1:30120")
const players = await cfx.servers.players("127.0.0.1:30120")
const info = await cfx.servers.info("127.0.0.1:30120")
```

### status

#### `status.get()`

Returns a `CfxStatus`.

```js
const status = await cfx.status.get()
console.log(status.level, status.description, status.everythingOk)

const components = await status.fetchComponents()
for (const component of components) {
  console.log(`${component.name}: ${component.status}`)
}
```

#### `status.unresolvedIncidents()`

Returns the unresolved incidents.

```js
const incidents = await cfx.status.unresolvedIncidents()
console.log(incidents.incidents.length)
```

### Aliases

```js
cfx.fetchServer(id)
cfx.fetchAllServers(filters)
cfx.fetchFeaturedServers()
cfx.fetchServerIcon(id, iconVersion)
cfx.fetchStatus()
cfx.fetchUnresolvedIncidents()
```

## CitizenServer

A decoded server exposes the following members.

| Member | Description |
| --- | --- |
| `id` | Join id |
| `hostname` | Display name |
| `playersCount` / `maxPlayers` | Connected players and slot count |
| `players` | Connected players |
| `gameType` / `mapName` | Game type and map |
| `resources` | Loaded resources |
| `serverVersion` | Server build |
| `publicVariables` | Raw server variables |
| `tags` | Parsed tags |
| `connectedEndpoints` / `connectEndpoint` | Connection endpoints |
| `upvotePower` / `burstPower` | Listing power values |
| `iconVersion` / `iconUrl` | Server icon |
| `ownerId` / `ownerName` / `ownerProfileUrl` / `ownerAvatarUrl` | Owner information |
| `locale` | Server locale |
| `joinUrl` | `cfx.re/join` link |
| `isFiveM` / `isRedM` | Platform helpers |
| `isFull` | Whether the server is full |
| `isOneSyncEnabled` | OneSync state |
| `projectName` / `projectDesc` | Project metadata |
| `bannerConnecting` / `bannerDetail` | Banner URLs |

Helper methods: `hasResource(name)`, `hasAnyResourceStartingWith(prefix)`, `hasTag(tag)`, `isPlayerOnline(name)`.

## License

ISC
