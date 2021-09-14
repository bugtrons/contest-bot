<img src="./Banner.png.png" />
<p align="center">
  <p align="center">
    <a href="https://github.com/devstrons/contest-bot/blob/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/github/license/devstrons/contest-bot?style=for-the-badge&logo=github?label=healthinesses" />
         <a href="https://discord.gg/hC4aEgXmuf">
      <img alt="Size" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" />
    </a>
    <a href="https://github.com/devstrons/contest-bot/stargazers">
      <img alt="Stars" src="https://img.shields.io/github/stars/devstrons/contest-bot?style=for-the-badge&logo=github?label=healthinesses" />
    </a>
  </p>
</p>
<br>

## 🧰 Testing

- `npm install` — Installs all dependencies.
- `node index.js` — To run the Discord bot.

## ⚡ Guidelines to follow

- By forking, clone the repository in your local system.
- Update the **node version (v16.x.x)** & **Discord.js (v13.1.0)**.
- Make an app in the [**Discord Developer Portal**](https://discord.com/developers/applications) to hold the Discord bot.
- Open the folder in your IDE, and make a file named `.env` to setup the environment and carry the credentials of the Discord's developer portal.
- Click on the `New Application` button for naming your Discord bot and copy-paste the following content in `.env`:

```
    TOKEN=3ad852c30cda4bdfd2e942cfe5wc9d90b81710851e80cc5b3cfc5avac1965d1f
```

- Click on `OAuth2`, select `bot` and `appliations.commands` under `SCOPES`. Under `BOT PERMISSION`, check every box under `Text Permission`. Copy the link generated to call that bot in your server.
- From left section, click on `Bot`-> `Add Bot` -> `Yes, do it`.
- Hop to [this link](https://clist.by/) and sign up -> <your-username> at top -> select `API` -> `show my api-key` -> copy your unique API ID as `ApiKey username:fc5505cf4a5c0ec16854972bf25387231cv35bm1` -> Paste it in `.env` as:

```
   CLIST_API_KEY=ApiKey username:fc5505cf4a5c0ec16854972bf25387231cv35bm1
```

- Copy and paste the server ID in `.env` file as:

```
    HOME_GUILD_ID=885165658936049745
```

- In the [`bot.js`](https://github.com/devstrons/contest-bot/blob/main/bot.js) file, comment [line 23](https://github.com/devstrons/contest-bot/blob/main/bot.js#L23) and uncomment [line 24](https://github.com/devstrons/contest-bot/blob/main/bot.js#L24).

## 📰 License

> The **devstrons' contest bot** project is released under the [MIT license](https://github.com/devstrons/contest-bot/blob/main/LICENSE.md). <br> Developed &amp; maintained By the DEVSTRONS' Community. Copyright 2021 © DEVSTRONS.
<hr>

> **YouTube** <a href="https://www.youtube.com/channel/UCG7JT7yqut81fqFsVBX6oMg" target="_blank" rel="noopener">@devstrons</a> &nbsp;&middot;&nbsp;
> **Instagram** <a href="https://www.instagram.com/devstrons" target="_blank" rel="noopener">@devstrons</a> &nbsp;&middot;&nbsp;
> **Discord** <a href="https://discord.com/invite/MVujzTBqed" target="_blank" rel="noopener">DEVSTR😊NS'</a> &nbsp;&middot;&nbsp;
> **Twitter** <a href="https://twitter.com/devstrons" target="_blank" rel="noopener">@devstrons</a>
