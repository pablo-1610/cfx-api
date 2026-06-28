<h1 align="center">cfx-api</h1>

<p align="center">
  The fastest way to read the Cfx.re, FiveM and RedM server list from Node.js.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/cfx-api"><img src="https://img.shields.io/npm/v/cfx-api?color=cb3837&logo=npm" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/cfx-api"><img src="https://img.shields.io/npm/dm/cfx-api?color=cb3837&logo=npm" alt="npm downloads"></a>
  <a href="https://github.com/pablo-1610/cfx-api/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/cfx-api?color=blue" alt="license"></a>
  <a href="https://github.com/pablo-1610/cfx-api/stargazers"><img src="https://img.shields.io/github/stars/pablo-1610/cfx-api?style=social" alt="stars"></a>
  <a href="https://github.com/pablo-1610/cfx-api/actions"><img src="https://img.shields.io/github/actions/workflow/status/pablo-1610/cfx-api/unit_tests.yml?branch=master&label=tests" alt="tests"></a>
  <img src="https://img.shields.io/badge/TypeScript-ready-3178c6?logo=typescript&logoColor=white" alt="TypeScript ready">
</p>

<hr>

`cfx-api` lets you query the public Cfx.re infrastructure with a clean, fully typed API: the complete server list (decoded from the binary `streamRedir` feed), a single server, featured servers, server icons, the Cfx.re status page, and a game server's own endpoints.

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Quick start](#quick-start)
- [API](#api)
  - [servers](#servers)
  - [status](#status)
  - [Aliases](#aliases)
- [The CitizenServer model](#the-citizenserver-model)
- [License](#license)

## Features

- 🌍 **Full server list** decoded from the protobuf `streamRedir` feed, with client-side filters.
- 🔎 **Single server** lookup with the complete payload (players, resources, owner, variables…).
- ⭐ **Featured servers** as shown on the official server list.
- 🖼️ **Server icons** as a `Buffer` or a ready-to-use URL.
- 🛰️ **Direct game server** queries (`info.json`, `dynamic.json`, `players.json`).
- 📊 **Cfx.re status** and unresolved incidents.
- 🧩 **Fully typed**, zero configuration, works in JavaScript and TypeScript.

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

## Recipes

**Total players online across the whole network**

```js
const all = await cfx.servers.all()
const players = all.reduce((sum, server) => sum + server.playersCount, 0)
console.log(`${all.length} servers, ${players} players online`)
```

**Top 10 servers by player count**

```js
const all = await cfx.servers.all({ minPlayers: 1 })
const top = all.sort((a, b) => b.playersCount - a.playersCount).slice(0, 10)
top.forEach((s) => console.log(`${s.playersCount}/${s.maxPlayers} - ${s.hostname}`))
```

**Find roleplay servers in a given language with free slots**

```js
const servers = await cfx.servers.all({
  locale: "fr-FR",
  gametype: "Roleplay",
  onlyOpen: true,
})
```

**Check whether a player is connected to a server**

```js
const server = await cfx.servers.single("xxxxxx")
console.log(server.isPlayerOnline("PlayerName"))
```

## The CitizenServer model

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

[MIT](LICENSE) © PABLO-1610
