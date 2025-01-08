# RPG JS Game

This is a project template for [RPGJS](https://rpgjs.dev) apps. It lives at https://github.com/rpgjs/starter.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit rpgjs/starter rpg-app
cd rpg-app
```
## Note

使用 RPGJS 開發，安裝 NVM 與 NodeJS，用 junkhunt.net 產生繪製角色，LLM 使用 Google，地圖使用 Tiled's 修改。

- https://playground.rpgjs.dev/

- https://junkhunt.net/vx/charachip.shtml

- https://aistudio.google.com/prompts/new_chat

- https://www.mapeditor.org/

```
npx degit rpgjs/starter my-rpg-game
cd my-rpg-game
npm install --save-dev cross-env
npx cross-env RPG_TYPE=rpg npm run dev
```

## Get started

Install the dependencies...

```bash
cd rpg-app
npm install
npm run dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your game running. Edit a file in `src`, save it, and reload the page to see your changes.

> Launch in RPG mode with `RPG_TYPE=rpg npm run dev`

## Production

### Build with NodeJS

```bash
NODE_ENV=production npm run build
```

### Build with Docker

```bash
sudo docker build -t rpg .
sudo docker run -p 3000:3000 -d rpg
```

## Resources

[Documentation](https://docs.rpgjs.dev)
[Community Help](https://community.rpgjs.dev)

## Credits for Sample package assets

### Sounds

[Davidvitas](https://www.davidvitas.com/portfolio/2016/5/12/rpg-music-pack)
Attribution 4.0 International (CC BY 4.0)- https://creativecommons.org/licenses/by/4.0/deed.en

### Graphics

[Pipoya](https://pipoya.itch.io)

### Icons

https://game-icons.net