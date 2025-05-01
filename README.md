---

# ForgeLinked  
Music made stronger with Lavalink for [ForgeScript](https://npmjs.com/package/@tryforge/forgescript).  

<a href="https://github.com/tryforge/ForgeLinked/"><img src="https://img.shields.io/github/package-json/v/tryforge/ForgeLinked/main?label=@tryforge/forge.linked&color=5c16d4" alt="@tryforge/forge.linked"></a>
 <a href="https://github.com/tryforge/ForgeScript/"><img src="https://img.shields.io/github/package-json/v/tryforge/ForgeScript/main?label=@tryforge/forgescript&color=5c16d4" alt="@tryforge/forgescript"></a>
 <a href="https://discord.gg/hcJgjzPvqb"><img src="https://img.shields.io/discord/739934735387721768?logo=discord" alt="Discord"></a>

---

## Features  
- Simple and easy-to-use functions  
- Support for multiple event listeners  
- Various filters support (Coming soon)  
- Support for different audio providers  
- Playlist support  

---

## Contents  
1. [Installation](#installation)  
2. [Setup](#setup)  
    1. [Listening Events](#listening-events)  
3. [Lavalink Configuration](#lavalink-configuration)  
4. [Tips](#tips)  
    1. [Default Search Engine](#default-search-engine)  
5. [Contributors](#contributors)  

---

## Installation  

> [!CAUTION]
> ⚠️ **Warning**  
> ForgeLinked is not compatible with ForgeMusic at the moment. Use it only if you understand Lavalink and its setup.  

To install ForgeLinked in your project, use:  

```bash
npm install @tryforge/forge.linked
```  

If you're using a different package manager, look up how to install Node.js dependencies accordingly.  

---

## Setup  

First, import `ForgeLink` and `ForgeClient` in your main file:  

```js
const { ForgeClient } = require('@tryforge/forgescript');
const { ForgeLink } = require('@tryforge/forge.link');
```  

Then, create a new instance of `ForgeLink` with event listeners and Lavalink nodes:  

```js
const lavalink = new ForgeLink({
    events: {
        kazagumo: ['playerStart'],
        shoukaku: ['debug', 'ready']
    },
    kazagumoOptions: {
        defaultSearchEngine: 'youtube'
    },
    nodes: [
        {
            name: 'Public Node',
            auth: 'youshallnotpass',
            url: 'lavalink.jirayu.net:13592',
            secure: false
        }
    ]
});
```  

Now, create the `ForgeClient` and attach `lavalink` as an extension:  

```js
const client = new ForgeClient({
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent',
        'GuildVoiceStates'
    ],
    events: [
        'messageCreate'
    ],
    extensions: [lavalink],
    prefixes: ['.']
});
```  

>[!INFO]
> ⚠️ **Important**  
> Ensure your `ForgeClient` has the `GuildVoiceStates` intent enabled for ForgeLink functions to work properly.  

---

## Listening Events  

ForgeLinked allows you to listen to specific Lavalink events. To do this, define them inside the `events` object:  

```js
const lavalink = new ForgeLink({
    events: {
        kazagumo: ['playerStart'],
        shoukaku: ['debug', 'ready']
    }
});
```  

Then, you can add custom event handlers:  

```js
lavalink.commands.kazagumo.add({
    type: 'playerStart',
    code: '$log[A track started playing now.]'
});

lavalink.commands.shoukaku.add(
    {
        type: 'debug',
        code: '$log[NODE "$env[name]" -> $env[info]]'
    },
    {
        type: 'ready',
        code: '$log[NODE "$env[name]" IS READY]'
    }
);
```  

---

## Lavalink Configuration  

To connect ForgeLinked to a Lavalink server, provide the `nodes` parameter in the setup:  

```js
const lavalink = new ForgeLink({
    events: {
        kazagumo: ['playerStart'],
        shoukaku: ['debug', 'ready']
    },
    nodes: [
        {
            name: 'Public Node',
            auth: 'youshallnotpass',
            url: 'lavalink.jirayu.net:13592',
            secure: false
        }
    ]
});
```  

You can find public Lavalink nodes online or host your own.  

---

## Tips  

### Default Search Engine  

Lavalink supports multiple search engines. To specify a default, add it under `kazagumoOptions`:  

```js
const lavalink = new ForgeLink({
    kazagumoOptions: {
        defaultSearchEngine: 'youtube'
    }
});
```  

---

## Contributors  

Many thanks to everyone who contributed to this project! ❤️  

Special thanks to [Cyberghost](https://github.com/Cyberghxst) for assisting with the event and command managers—without them, this wouldn’t have been possible!  

This package was developed with ♥️ by [Econome](https://discord.com/users/838105973985771520).  

We hope you enjoy using ForgeLink!  

[![Contributors](https://contrib.rocks/image?repo=tryforge/ForgeLinked)](https://github.com/tryforge/ForgeLinked)  

---

