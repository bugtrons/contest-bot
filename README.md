<img src="https://socialify.git.ci/devstrons/contest-bot/image?description=1&font=Raleway&owner=1&pattern=Circuit%20Board&theme=Dark" alt="devstrons contest bot" width="1000" height="300" />
<p align="center">
  <p align="center">
    <a href="https://github.com/amino19/Health-Tracker/blob/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/github/license/devstrons/contest-bot?style=for-the-badge&logo=github?label=healthinesses" />
    </a>
    <a href="https://github.com/amino19/Health-Tracker">
      <img alt="Size" src="https://img.shields.io/github/languages/code-size/devstrons/contest-bot?style=for-the-badge&logo=github?label=healthinesses" />
    </a>
    <a href="https://github.com/amino19/Health-Tracker">
      <img alt="Stars" src="https://img.shields.io/github/stars/devstrons/contest-bot?style=for-the-badge&logo=github?label=healthinesses" />
    </a>
  </p>
</p>
<br>

## ⚡ Guidelines to follow:

- By forking, clone the repository in your local system.
- Make an account for [Developer Portal](https://discord.com/developers/applications) to hold discord bot.
- Open the folder in your IDE, & make a fille `.env` to setup the environment & carry credentials of discord's developer portal.
- Click on the `New Application` for naming your discord bot and copy-paste in `.env` 
  ```
  TOKEN=3ad852c30cda4bdfd2e942cfe5wc9d90b81710851e80cc5b3cfc5avac1965d1f
  ```
- Click on `OAuth2`, select `bot` & `appliations.commands` under `SCOPES`; and under `BOT PERMISSION`, check every box under `Text Permission`; Copy the link generated to call that bot in your server.
- From left section, click on `Bot`-> `Add Bot` -> `Yes, do it`.
- For,  hop to [this link](https://clist.by/) and Signup -> <your-username> at top -> select `API` -> `show my api-key` -> copy your unique API id as `ApiKey username:fc5505cf4a5c0ec16854972bf2538723xxxxxxxx` -> Paste it in `.env` as:
  ```
  CLIST_API_KEY=ApiKey username:fc5505cf4a5c0ec16854972bf2538723xxxxxxxx
  ```
- Copy & paste, the server id in `.env` file as:
  ```
  HOME_GUILD_ID=885165658936049745
  ```
- Update the node version (v16.x.x) & discord js (v13.1.0)
- In [bot.js](https://github.com/devstrons/contest-bot/blob/main/bot.js), comment the [line 23](https://github.com/devstrons/contest-bot/blob/main/bot.js#L23) & uncomment [line 24](https://github.com/devstrons/contest-bot/blob/main/bot.js#L24). 

## 🧰 Testing

* `npm install` — Installs all dependencies.
* `node index.js` — To run discord's bot.


## 📰 License
> The **hello world** project is released under the [MIT license](https://github.com/devstrons/hello-world/blob/main/LICENSE.md). <br> Developed &amp; maintained By the DEVSTRONS' Community. Copyright 2021 © DEVSTRONS.
<hr>

> **YouTube** <a href="https://www.youtube.com/channel/UCG7JT7yqut81fqFsVBX6oMg" target="_blank" rel="noopener">@devstrons</a> &nbsp;&middot;&nbsp;
> **Instagram** <a href="https://www.instagram.com/devstrons" target="_blank" rel="noopener">@devstrons</a> &nbsp;&middot;&nbsp;
> **Discord** <a href="https://discord.com/invite/MVujzTBqed" target="_blank" rel="noopener">DEVSTR😊NS'</a> &nbsp;&middot;&nbsp;
> **Twitter** <a href="https://twitter.com/devstrons" target="_blank" rel="noopener">@devstrons</a>
